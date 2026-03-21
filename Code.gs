// =====================================================
//   EMBEDDED EXAM SUITE v3 — Google Apps Script
//   Code.gs
// =====================================================

const ADMIN_PASSWORD = "admin@123"; // Change this!

/* =====================================================
   POST HANDLER
===================================================== */
function doPost(e) {

  const ss = SpreadsheetApp.getActive();
  const resultsSheet = ss.getSheetByName("Results");
  const configSheet  = ss.getSheetByName("Config");
  const data = e.parameter;

  /* ================= SAVE RESULT ================= */
  if (data.type === "RESULT") {

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const name  = (data.name  || "").trim().toLowerCase();
      const phone = (data.phone || "").trim();

      if (!name || !phone) {
        return jsonOutput({ error: "Invalid data" });
      }

      const rows = resultsSheet.getDataRange().getValues();

      // Duplicate prevention
      for (let i = 1; i < rows.length; i++) {
        const existingName  = (rows[i][1] || "").toString().trim().toLowerCase();
        const existingPhone = (rows[i][2] || "").toString().trim();

        if (existingName === name && existingPhone === phone) {
          return jsonOutput({ status: "ALREADY_SUBMITTED" });
        }
      }

      // Parse section breakdown (JSON string from frontend)
      let sectionsStr = data.sections || "{}";

      // Save new entry (col A=Time, B=Name, C=Phone, D=Score, E=Result, F=Sections JSON)
      resultsSheet.appendRow([
        new Date(),
        data.name,
        data.phone,
        Number(data.score),
        data.result,
        sectionsStr
      ]);

      return jsonOutput({ status: "RESULT_SAVED" });

    } finally {
      lock.releaseLock();
    }
  }

  /* ================= UPDATE CONFIG ================= */
  if (data.type === "UPDATE_CONFIG") {

    if (data.password !== ADMIN_PASSWORD) {
      return jsonOutput({ error: "Unauthorized" });
    }

    // A2=Duration, B2=StartTime, C2=Enabled, D2=PassMark, E2=SessionId, F2=InvCode
    configSheet.getRange("A2:F2").setValues([[
      Number(data.duration),
      data.startTime ? new Date(data.startTime) : "",
      data.enabled === "true",
      Number(data.passMark),
      data.sessionId || "",
      data.invCode || configSheet.getRange("F2").getValue() || ""
    ]]);

    return jsonOutput({ status: "CONFIG_UPDATED" });
  }

  return jsonOutput({ error: "Invalid request" });
}


/* =====================================================
   GET HANDLER
===================================================== */
function doGet(e) {

  const ss = SpreadsheetApp.getActive();
  const resultsSheet = ss.getSheetByName("Results");
  const configSheet  = ss.getSheetByName("Config");

  const config = configSheet.getRange("A2:F2").getValues()[0];

  const password = e.parameter.password || "";
  const mode     = e.parameter.mode || "student";

  /* ================= STUDENT MODE ================= */
  if (mode === "student") {
    return jsonOutput({
      duration:  config[0] || "",
      startTime: config[1] || "",
      enabled:   config[2] || false,
      passMark:  config[3] || "",
      sessionId: config[4] || ""
    });
  }

  /* ================= ADMIN AUTH ================= */
  if (password !== ADMIN_PASSWORD) {
    return jsonOutput({ error: "Unauthorized" });
  }

  const rows = resultsSheet.getDataRange().getValues();

  let pass = 0, fail = 0;
  let passList = [], failList = [];

  for (let i = 1; i < rows.length; i++) {
    const name    = rows[i][1];
    const phone   = rows[i][2];
    const score   = Number(rows[i][3]);
    const result  = rows[i][4];
    const secJson = rows[i][5] || "{}";

    let sections = {};
    try { sections = JSON.parse(secJson); } catch(e) {}

    const entry = { name: name, phone: phone, score: score, sections: sections };

    if (result === "PASS") {
      pass++;
      passList.push(entry);
    } else {
      fail++;
      failList.push(entry);
    }
  }

  return jsonOutput({
    duration:        config[0] || "",
    startTime:       config[1] || "",
    enabled:         config[2] || false,
    passMark:        config[3] || "",
    sessionId:       config[4] || "",
    invCode:         config[5] || "",
    totalCandidates: rows.length - 1,
    passedCount:     pass,
    failedCount:     fail,
    passList:        passList,
    failList:        failList
  });
}


/* =====================================================
   COMMON JSON RESPONSE
===================================================== */
function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* =====================================================
   SPREADSHEET SETUP HELPER
   Run this once to create sheets with correct headers
===================================================== */
function setupSheets() {
  const ss = SpreadsheetApp.getActive();

  // Results sheet
  let results = ss.getSheetByName("Results");
  if (!results) results = ss.insertSheet("Results");
  results.getRange("A1:F1").setValues([["Timestamp","Name","Phone","Score","Result","SectionBreakdown"]]);

  // Config sheet
  let config = ss.getSheetByName("Config");
  if (!config) config = ss.insertSheet("Config");
  config.getRange("A1:F1").setValues([["Duration","StartTime","Enabled","PassMark","SessionId","InvCode"]]);
  config.getRange("A2:F2").setValues([[60, "", false, 25, "EXAM2025", ""]]);

  // Evaluations sheet (Round 2)
  let evals = ss.getSheetByName("Evaluations");
  if (!evals) evals = ss.insertSheet("Evaluations");
  evals.getRange("A1:H1").setValues([["Timestamp","CandidateName","Invigilator","DateTime","Ratings","Remarks","CodingQuestion","InvCode"]]);

  SpreadsheetApp.getUi().alert("✅ Sheets set up successfully!");
}
