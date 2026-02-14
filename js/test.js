/* =====================================================
   GLOBAL STATE
===================================================== */

let codingScore = 0;
let examSubmitted = false;
let fullscreenWarningGiven = false;
let tabWarningGiven = false;


/* =====================================================
   FULLSCREEN FUNCTIONS
===================================================== */

function enterFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
    }
}

function exitFullscreenSafe() {
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    }
}

window.addEventListener("load", () => {
    enterFullscreen();
});


/* =====================================================
   RENDER QUESTIONS
===================================================== */

function renderMCQ(){

const container = document.getElementById("mcqSection");
container.innerHTML = "";

let currentSection = "";

selectedQuestions.forEach((q,index)=>{

if(q.section && q.section !== currentSection){
currentSection = q.section;
container.innerHTML += `
<div class="section-divider">
    <span>${currentSection}</span>
</div>`;
}

if(q.type==="mcq"){
container.innerHTML+=`
<div class="question-card modern-card">
<div class="question-title">Q${index+1}. ${q.q}</div>
<div class="options-container">
${q.options.map((opt,i)=>`
<label class="modern-option">
<input type="radio" name="q${index}" value="${i}">
<span>${opt}</span>
</label>`).join("")}
</div>
</div>`;
}

if(q.type==="text"){
container.innerHTML+=`
<div class="question-card modern-card">
<div class="question-title">Q${index+1}. ${q.q}</div>
${q.image ? `
<div class="circuit-box">
<img src="${q.image}" class="circuit-img">
</div>` : ""}
<input type="text"
class="modern-input"
id="text${index}"
placeholder="Enter numeric answer only">
</div>`;
}

if(q.type==="coding"){
container.innerHTML+=`
<div class="question-card coding-card">
<div class="coding-header">C Programming Question (5 Marks)</div>
<p class="coding-description">${q.description}</p>
<textarea id="codeArea" class="code-editor" rows="12"></textarea>
<button class="run-btn" onclick="runCode()">Run Code</button>
<pre id="outputBox" class="output-box"></pre>
</div>`;
}

});
}


/* =====================================================
   RUN CODE
===================================================== */

async function runCode(){

const code = document.getElementById("codeArea").value;
const codingQ = selectedQuestions.find(q=>q.type==="coding");

let passedAll = true;

for(let test of codingQ.testCases){

const response = await fetch("https://emkc.org/api/v2/piston/execute",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
language:"c",
version:"10.2.0",
files:[{content:code}],
stdin:test.input
})
});

const result = await response.json();

if(!result.run || result.run.output.trim() !== test.output){
passedAll = false;
break;
}
}

codingScore = passedAll ? 5 : 0;
document.getElementById("outputBox").innerText =
passedAll ? "All test cases passed ✅" : "Test case failed ❌";
}


/* =====================================================
   SAFE SUBMIT FUNCTION (FINAL FIX)
===================================================== */

async function submitTest(){

if(examSubmitted) return;
examSubmitted = true;

/* Remove listeners immediately to stop loops */
document.removeEventListener("fullscreenchange", fullscreenHandler);
document.removeEventListener("visibilitychange", visibilityHandler);

let score = 0;

selectedQuestions.forEach((q,index)=>{

if(q.type==="mcq"){
const selected = document.querySelector(`input[name="q${index}"]:checked`);
if(selected && Number(selected.value)===q.answer){
score += 1;
}
}

if(q.type==="text"){
const inputEl = document.getElementById(`text${index}`);
if(inputEl){
const val = parseFloat(inputEl.value.trim());
if(!isNaN(val) && Math.abs(val - q.answer) <= q.tolerance){
score += q.marks;
}
}
}
});

score += codingScore;

let passMark = parseInt(localStorage.getItem("passMark") || "0");
let result = score >= passMark ? "PASS" : "FAIL";

localStorage.setItem("score",score);
localStorage.setItem("result",result);

/* Prepare FormData */
const formData = new FormData();
formData.append("type","RESULT");
formData.append("name",localStorage.getItem("name"));
formData.append("phone",localStorage.getItem("phone"));
formData.append("score",score);
formData.append("result",result);

/* Use sendBeacon (SAFE + RELIABLE) */
if(navigator.sendBeacon){
    navigator.sendBeacon(SCRIPT_URL, formData);
}else{
    await fetch(SCRIPT_URL,{
        method:"POST",
        body:formData,
        keepalive:true
    });
}

exitFullscreenSafe();

/* Give backend enough time */
setTimeout(()=>{
    window.location.href="result.html";
},800);
}


/* =====================================================
   ANTI CHEAT HANDLERS (NO LOOP VERSION)
===================================================== */

function fullscreenHandler(){

if(examSubmitted) return;

if(!document.fullscreenElement){

const choice = confirm(
"You exited fullscreen.\n\nOK = Return to fullscreen\nCancel = Submit exam"
);

if(choice){
enterFullscreen();
}else{
submitTest();
}
}
}

function visibilityHandler(){

if(examSubmitted) return;

if(document.hidden){

const choice = confirm(
"Tab switch detected.\n\nOK = Continue exam\nCancel = Submit"
);

if(!choice){
submitTest();
}
}
}

/* Attach handlers */
document.addEventListener("fullscreenchange", fullscreenHandler);
document.addEventListener("visibilitychange", visibilityHandler);
