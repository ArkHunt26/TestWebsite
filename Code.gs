// =====================================================
//   EMBEDDED EXAM SUITE v3 — Google Apps Script
//   Multi-Session + Role-Based Passwords
// =====================================================

// Role passwords — change these!
const HR_TA_PASSWORD  = "hr&ta@123";
const MGMT_PASSWORD   = "manage@123";
const INVIG_PASSWORD  = "invig@123";   // used by invigilator login validation only

// Legacy fallback (backwards compat)
const ADMIN_PASSWORD  = HR_TA_PASSWORD;

/* =====================================================
   HELPERS
===================================================== */
function getSessionSheets(ss, sessionId) {
  const safeName = (sessionId || "Default").toString().trim().replace(/[^a-zA-Z0-9_\-]/g,"_");
  const resultsName = "Results_" + safeName;
  const evalsName   = "Evals_"   + safeName;

  let results = ss.getSheetByName(resultsName);
  if (!results) {
    results = ss.insertSheet(resultsName);
    results.getRange("A1:F1").setValues([["Timestamp","Name","Phone","Score","Result","SectionBreakdown"]]);
  }

  let evals = ss.getSheetByName(evalsName);
  if (!evals) {
    evals = ss.insertSheet(evalsName);
    evals.getRange("A1:J1").setValues([["Timestamp","CandidateName","Invigilator","DateTime","Ratings","Remarks","CodingQuestion","InvCode","Verdict","SessionId"]]);
  }

  return { results, evals };
}

function getConfigSheet(ss) {
  let config = ss.getSheetByName("Config");
  if (!config) {
    config = ss.insertSheet("Config");
    config.getRange("A1:H1").setValues([["SessionId","SessionName","Duration","StartTime","Enabled","PassMark","InvCode","CreatedAt"]]);
  }
  return config;
}

function getAllSessions(ss) {
  const config = getConfigSheet(ss);
  const rows = config.getDataRange().getValues();
  const sessions = [];
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    sessions.push({
      sessionId:   rows[i][0] || "",
      sessionName: rows[i][1] || "",
      duration:    rows[i][2] || "",
      startTime:   rows[i][3] || "",
      enabled:     rows[i][4] || false,
      passMark:    rows[i][5] || "",
      invCode:     rows[i][6] || "",
      createdAt:   rows[i][7] || "",
      row:         i + 1
    });
  }
  return sessions;
}

function findSession(ss, sessionId) {
  const sessions = getAllSessions(ss);
  return sessions.find(s => s.sessionId === sessionId) || null;
}

function getActiveSession(ss) {
  const sessions = getAllSessions(ss);
  const now = new Date();
  // Find enabled session closest to now
  const enabled = sessions.filter(s => s.enabled);
  if (!enabled.length) return sessions[sessions.length - 1] || null;
  return enabled[0];
}

/* =====================================================
   POST HANDLER
===================================================== */
function doPost(e) {
  const ss   = SpreadsheetApp.getActive();
  const data = e.parameter;

  /* ================= SAVE RESULT ================= */
  if (data.type === "RESULT") {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const name      = (data.name  || "").trim().toLowerCase();
      const phone     = (data.phone || "").trim();
      const sessionId = data.sessionId || "";

      if (!name || !phone) return jsonOutput({ error: "Invalid data" });

      const { results } = getSessionSheets(ss, sessionId);
      const rows = results.getDataRange().getValues();

      for (let i = 1; i < rows.length; i++) {
        if ((rows[i][1]||"").toString().trim().toLowerCase() === name &&
            (rows[i][2]||"").toString().trim() === phone) {
          return jsonOutput({ status: "ALREADY_SUBMITTED" });
        }
      }

      results.appendRow([
        new Date(), data.name, data.phone,
        Number(data.score), data.result, data.sections || "{}"
      ]);
      return jsonOutput({ status: "RESULT_SAVED" });
    } finally { lock.releaseLock(); }
  }

  /* ================= SAVE EVALUATION ================= */
  if (data.type === "EVALUATION") {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sessionId = data.sessionId || "";
      const { evals } = getSessionSheets(ss, sessionId);
      evals.appendRow([
        new Date(), data.candidateName || "", data.invigilator || "",
        data.datetime || "", data.ratings || "{}", data.remarks || "",
        data.codingQuestion || "", data.invCode || "", data.verdict || "", sessionId
      ]);
      return jsonOutput({ status: "EVALUATION_SAVED" });
    } finally { lock.releaseLock(); }
  }

  /* ================= UPDATE CONFIG ================= */
  if (data.type === "UPDATE_CONFIG") {
    if (data.password !== HR_TA_PASSWORD) return jsonOutput({ error: "Unauthorized" });

    const config    = getConfigSheet(ss);
    const sessionId = data.sessionId || "";
    const existing  = findSession(ss, sessionId);

    const rowData = [
      sessionId,
      data.sessionName || sessionId,
      Number(data.duration),
      data.startTime ? new Date(data.startTime) : "",
      data.enabled === "true",
      Number(data.passMark),
      data.invCode || (existing ? existing.invCode : ""),
      existing ? existing.createdAt : new Date()
    ];

    if (existing) {
      config.getRange(existing.row, 1, 1, 8).setValues([rowData]);
    } else {
      // New session
      const lastRow = config.getLastRow();
      config.getRange(lastRow + 1, 1, 1, 8).setValues([rowData]);
    }
    return jsonOutput({ status: "CONFIG_UPDATED" });
  }

  /* ================= CREATE SESSION ================= */
  if (data.type === "CREATE_SESSION") {
    if (data.password !== HR_TA_PASSWORD) return jsonOutput({ error: "Unauthorized" });
    const config = getConfigSheet(ss);
    const newId  = data.sessionId || ("EXAM_" + Date.now());
    const existing = findSession(ss, newId);
    if (existing) return jsonOutput({ error: "Session ID already exists" });
    config.appendRow([newId, data.sessionName || newId, 60, "", false, 25, "", new Date()]);
    // Create the sheets eagerly
    getSessionSheets(ss, newId);
    return jsonOutput({ status: "SESSION_CREATED", sessionId: newId });
  }

  /* ================= DELETE SESSION ================= */
  if (data.type === "DELETE_SESSION") {
    if (data.password !== HR_TA_PASSWORD) return jsonOutput({ error: "Unauthorized" });
    const config  = getConfigSheet(ss);
    const session = findSession(ss, data.sessionId);
    if (!session) return jsonOutput({ error: "Not found" });
    config.deleteRow(session.row);
    return jsonOutput({ status: "SESSION_DELETED" });
  }

  return jsonOutput({ error: "Invalid request" });
}


/* =====================================================
   GET HANDLER
===================================================== */
function doGet(e) {
  const ss       = SpreadsheetApp.getActive();
  const password = e.parameter.password || "";
  const mode     = e.parameter.mode     || "student";
  const reqSid   = e.parameter.sessionId || "";  // requested session

  /* ================= STUDENT MODE ================= */
  if (mode === "student") {
    // Student uses the ACTIVE (enabled) session
    const session = getActiveSession(ss);
    if (!session) return jsonOutput({ error: "No active exam" });
    return jsonOutput({
      duration:  session.duration,
      startTime: session.startTime,
      enabled:   session.enabled,
      passMark:  session.passMark,
      sessionId: session.sessionId,
      sessionName: session.sessionName
    });
  }

  /* ================= AUTH CHECK ================= */
  const isHRTA  = password === HR_TA_PASSWORD;
  const isMgmt  = password === MGMT_PASSWORD  || isHRTA;
  const isInvig = password === INVIG_PASSWORD  || isHRTA;

  if (!isHRTA && !isMgmt && !isInvig) {
    return jsonOutput({ error: "Unauthorized" });
  }

  /* ================= LIST SESSIONS ================= */
  if (mode === "sessions") {
    const sessions = getAllSessions(ss).map(s => ({
      sessionId: s.sessionId, sessionName: s.sessionName,
      enabled: s.enabled, startTime: s.startTime, duration: s.duration,
      createdAt: s.createdAt
    }));
    return jsonOutput({ sessions });
  }

  /* ================= ADMIN / MGMT DATA ================= */
  // Determine which session to read
  let session;
  if (reqSid) {
    session = findSession(ss, reqSid);
    if (!session) return jsonOutput({ error: "Session not found" });
  } else {
    // Default: most recently created / last in list
    const sessions = getAllSessions(ss);
    session = sessions[sessions.length - 1] || null;
    if (!session) return jsonOutput({ error: "No sessions configured" });
  }

  const { results, evals } = getSessionSheets(ss, session.sessionId);
  const rows = results.getDataRange().getValues();

  let pass = 0, fail = 0, passList = [], failList = [];
  for (let i = 1; i < rows.length; i++) {
    const name    = rows[i][1];
    const phone   = rows[i][2];
    const score   = Number(rows[i][3]);
    const result  = rows[i][4];
    const secJson = rows[i][5] || "{}";
    let sections  = {};
    try { sections = JSON.parse(secJson); } catch(ex) {}
    const entry = { name, phone, score, sections };
    if (result === "PASS") { pass++; passList.push(entry); }
    else                   { fail++; failList.push(entry); }
  }

  // Read evaluations for this session
  const evalRows   = evals.getDataRange().getValues();
  const evalsByCandidate = {};
  for (let i = 1; i < evalRows.length; i++) {
    const cName = (evalRows[i][1] || "").trim();
    if (!cName) continue;
    if (!evalsByCandidate[cName]) evalsByCandidate[cName] = [];
    let ratings = {};
    try { ratings = JSON.parse(evalRows[i][4] || "{}"); } catch(ex) {}
    evalsByCandidate[cName].push({
      invigilator:    evalRows[i][2],
      datetime:       evalRows[i][3],
      ratings:        ratings,
      remarks:        evalRows[i][5],
      codingQuestion: evalRows[i][6],
      invCode:        evalRows[i][7],
      verdict:        evalRows[i][8]
    });
  }

  // Attach evaluations to candidate entries
  [...passList, ...failList].forEach(entry => {
    const ev = evalsByCandidate[entry.name];
    if (ev) entry.evaluations = ev;
  });

  return jsonOutput({
    sessionId:       session.sessionId,
    sessionName:     session.sessionName,
    duration:        session.duration,
    startTime:       session.startTime,
    enabled:         session.enabled,
    passMark:        session.passMark,
    invCode:         session.invCode,
    totalCandidates: rows.length - 1,
    passedCount:     pass,
    failedCount:     fail,
    passList,
    failList,
    role:            isHRTA ? "hrta" : isMgmt ? "mgmt" : "invig"
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
   SETUP — run once
===================================================== */
function setupSheets() {
  const ss = SpreadsheetApp.getActive();

  // Config sheet
  getConfigSheet(ss);

  // Create a default session if none exist
  const sessions = getAllSessions(ss);
  if (!sessions.length) {
    ss.getSheetByName("Config").appendRow([
      "DEFAULT", "Default Exam", 60, "", false, 25, "", new Date()
    ]);
    getSessionSheets(ss, "DEFAULT");
  }

  SpreadsheetApp.getUi().alert("✅ Multi-session setup complete!\n\nPasswords:\nHR & TA: hr&ta@123\nManagement: manage@123\nInvigilator: invig@123\n\nYou can change these in Code.gs.");
}
