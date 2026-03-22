/* test.js — v3 */
let codingScore = 0;
let examSubmitted = false;
let cheatPopupActive = false;

const SECTION_MAP = {
  "C Programming": "c",
  "C++ Programming": "cpp",
  "Embedded Systems": "hw",
  "RTOS": "rtos",
  "Hardware": "hardware",
  "Coding Challenge": "coding"
};

function getSectionIcon(section){
  const icons = {
    "C Programming": "⚙️",
    "C++ Programming": "🔧",
    "Embedded Systems": "🔌",
    "RTOS": "⏱️",
    "Hardware": "🔋",
    "Coding Challenge": "💻"
  };
  return icons[section] || "📝";
}

/* ========================= FULLSCREEN ========================= */
function enterFullscreen(){
  const elem = document.documentElement;
  if(elem.requestFullscreen) elem.requestFullscreen().catch(()=>{});
  else if(elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
}

/* ========================= RENDER QUESTIONS ========================= */
function renderMCQ(){
  const container = document.getElementById('mcqSection');
  container.innerHTML = '';
  let currentSection = '';

  selectedQuestions.forEach((q, index) => {
    if(q.section && q.section !== currentSection){
      currentSection = q.section;
      container.innerHTML += `
      <div class="section-divider">
        <span class="section-icon">${getSectionIcon(q.section)}</span>
        <span>${q.section}</span>
      </div>`;
    }

    if(q.type === 'mcq'){
      const optHtml = q.options.map((opt, i) => `
        <label class="option-label">
          <input type="radio" name="q${index}" value="${i}">
          <span>${opt}</span>
        </label>`).join('');

      container.innerHTML += `
      <div class="question-card">
        <div class="question-number">Question ${index+1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-grid">${optHtml}</div>
      </div>`;
    }

    if(q.type === 'text'){
      container.innerHTML += `
      <div class="question-card">
        <div class="question-number">Question ${index+1} — Numerical (${q.marks} marks)</div>
        ${q.image ? `<div style="margin-bottom:14px;"><img src="${q.image}" class="circuit-image" alt="Circuit diagram"></div>` : ''}
        <div class="question-text">${q.q}</div>
        <input type="text" class="text-answer-input" id="text${index}" placeholder="Enter numeric answer only">
      </div>`;
    }

    if(q.type === 'coding'){
      container.innerHTML += `
      <div class="coding-card">
        <div class="coding-meta">
          <span class="question-number">Coding Challenge</span>
          <span class="marks-badge">⭐ ${q.marks} Marks</span>
        </div>
        <div class="coding-desc">${q.description}</div>
        <textarea id="codeArea" class="code-editor" placeholder="Write your C code here...">${q.starterCode || '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'}</textarea>
        <div class="code-actions">
          <button class="run-btn" id="runBtn" onclick="runCode()">▶ Run Code</button>
          <span id="runStatus" style="font-size:13px;color:var(--text3);">Click Run to test your code</span>
        </div>
        <pre id="outputBox" class="output-box">Output will appear here...</pre>
      </div>`;
    }
  });
}

/* ========================= RUN CODE ========================= */
async function runCode(){
  const code = document.getElementById('codeArea').value;
  const codingQ = selectedQuestions.find(q => q.type === 'coding');
  const runBtn = document.getElementById('runBtn');
  const runStatus = document.getElementById('runStatus');
  const outputBox = document.getElementById('outputBox');

  runBtn.disabled = true;
  runBtn.textContent = '⏳ Running...';
  runStatus.textContent = 'Executing your code...';
  outputBox.className = 'output-box';
  outputBox.textContent = 'Running test cases...';

  let results = [];
  let allPassed = true;

  for(let i = 0; i < codingQ.testCases.length; i++){
    const test = codingQ.testCases[i];
    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          language: 'c',
          version: '10.2.0',
          files: [{content: code}],
          stdin: test.input
        })
      });
      const result = await response.json();
      const actual = (result.run?.output || '').trim();
      const expected = test.output.trim();
      const passed = actual === expected;

      if(!passed) allPassed = false;
      results.push({
        input: test.input,
        expected: expected,
        actual: actual,
        passed: passed,
        stderr: result.run?.stderr || ''
      });
    } catch(e) {
      allPassed = false;
      results.push({ input: test.input, expected: test.output, actual: 'Network error', passed: false, stderr: '' });
    }
  }

  codingScore = allPassed ? codingQ.marks : 0;

  let out = '';
  results.forEach((r, i) => {
    out += `Test ${i+1}: ${r.passed ? '✅ PASS' : '❌ FAIL'}\n`;
    out += `  Input   : ${r.input}\n`;
    out += `  Expected: ${r.expected}\n`;
    out += `  Got     : ${r.actual}\n`;
    if(r.stderr) out += `  Error   : ${r.stderr.substring(0,100)}\n`;
    out += '\n';
  });
  out += allPassed ? '🎉 All test cases passed!' : '⚠️ Some test cases failed. Review your output.';

  outputBox.textContent = out;
  outputBox.className = 'output-box ' + (allPassed ? 'pass' : 'fail');
  runStatus.textContent = allPassed ? '✅ All passed' : '❌ Tests failed';
  runBtn.disabled = false;
  runBtn.textContent = '▶ Run Code';
}

/* ========================= CALCULATE SECTION SCORES ========================= */
function calculateSectionScores(){
  const sectionData = {};

  selectedQuestions.forEach((q, index) => {
    const sec = q.section;
    if(!sectionData[sec]) sectionData[sec] = { correct: 0, total: 0, marks: 0, maxMarks: 0 };

    if(q.type === 'mcq'){
      sectionData[sec].total++;
      sectionData[sec].maxMarks += 1;
      const sel = document.querySelector(`input[name="q${index}"]:checked`);
      if(sel && Number(sel.value) === q.answer){
        sectionData[sec].correct++;
        sectionData[sec].marks += 1;
      }
    }

    if(q.type === 'text'){
      sectionData[sec].total++;
      sectionData[sec].maxMarks += q.marks;
      const el = document.getElementById(`text${index}`);
      if(el){
        const val = parseFloat(el.value.trim());
        if(!isNaN(val) && Math.abs(val - q.answer) <= q.tolerance){
          sectionData[sec].correct++;
          sectionData[sec].marks += q.marks;
        }
      }
    }

    if(q.type === 'coding'){
      sectionData[sec].total++;
      sectionData[sec].maxMarks += q.marks;
      sectionData[sec].marks += codingScore;
      if(codingScore > 0) sectionData[sec].correct++;
    }
  });

  return sectionData;
}

/* ========================= SUBMIT TEST ========================= */
async function submitTest(fromCheat){
  if(examSubmitted) return;
  examSubmitted = true;

  if(document.fullscreenElement) await document.exitFullscreen().catch(()=>{});

  const sectionScores = calculateSectionScores();
  let totalScore = 0;
  Object.values(sectionScores).forEach(s => totalScore += s.marks);

  const passMark = parseInt(localStorage.getItem('passMark') || '0');
  const result = totalScore >= passMark ? 'PASS' : 'FAIL';

  // Build section breakdown for storage
  const sectionBreakdown = {};
  Object.entries(sectionScores).forEach(([sec, data]) => {
    const key = SECTION_MAP[sec] || sec.toLowerCase().replace(/\s/g,'_');
    sectionBreakdown[key] = {
      correct: data.correct,
      total: data.total,
      marks: data.marks,
      maxMarks: data.maxMarks,
      pct: data.maxMarks > 0 ? Math.round((data.marks / data.maxMarks)*100) : 0
    };
  });

  // Fix 3: embed coding question title in sectionBreakdown so it reaches the server
  // and is readable by invigilators on any device (not just same-browser localStorage)
  const codingQObj = selectedQuestions.find(q => q.type === 'coding');
  if(codingQObj){
    const div = document.createElement('div');
    div.innerHTML = codingQObj.description;
    const plainDesc = div.textContent || div.innerText || '';
    const firstLine = plainDesc.split('\n')[0].trim();
    sectionBreakdown._codingQuestion = firstLine;
    // Also store locally as fallback for same-browser invigilator
    const candidateName = localStorage.getItem('name') || '';
    localStorage.setItem('codingQ_' + candidateName.replace(/\s/g,'_'), firstLine);
  }

  const formData = new URLSearchParams();
  formData.append('type', 'RESULT');
  formData.append('name', localStorage.getItem('name'));
  formData.append('phone', localStorage.getItem('phone'));
  formData.append('score', totalScore);
  formData.append('result', result);
  formData.append('sections', JSON.stringify(sectionBreakdown));

  try {
    await fetch(SCRIPT_URL, { method: 'POST', body: formData });
  } catch(e) {}

  localStorage.setItem('score', totalScore);
  localStorage.setItem('result', result);
  localStorage.setItem('sectionBreakdown', JSON.stringify(sectionBreakdown));

  window.location.href = 'result.html';
}

/* ========================= ANTI CHEAT ========================= */
// cheatPopup is overridden by test.html to use the custom overlay
// This is a fallback only — should not be called directly
function cheatPopup(reason){
  if(examSubmitted || cheatPopupActive) return;
  cheatPopupActive = true;
  // Delegate to window.cheatPopup override if it exists
  if(window._customCheatPopup){
    cheatPopupActive = false;
    window._customCheatPopup(reason);
    return;
  }
  cheatPopupActive = false;
}

// fullscreenchange: no longer enforced — fullscreen is optional
// Tab-switch is still detected via visibilitychange
let _expectingFsChange = false;
document.addEventListener('fullscreenchange', () => {
  // No action — fullscreen is not mandatory
});
document.addEventListener('visibilitychange', () => {
  if(document.hidden && !examSubmitted){
    window._customCheatPopup ? window._customCheatPopup('⚠️ Tab switch detected!') : cheatPopup('⚠️ Tab switch detected!');
  }
});
