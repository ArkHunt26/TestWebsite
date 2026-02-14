function enterFullscreen(){
const elem = document.documentElement;
if(elem.requestFullscreen){
elem.requestFullscreen();
}
}


let codingScore = 0;

/* =========================
   RENDER QUESTIONS
========================= */

function renderMCQ(){

const container = document.getElementById("mcqSection");
container.innerHTML = "";

let currentSection = "";

selectedQuestions.forEach((q,index)=>{

/* ===== SECTION TITLE ===== */
if(q.section && q.section !== currentSection){
currentSection = q.section;

container.innerHTML += `
<div class="section-divider">
    <span>${currentSection}</span>
</div>
`;
}

/* ===== MCQ ===== */
if(q.type==="mcq"){

container.innerHTML+=`
<div class="question-card modern-card">
    <div class="question-title">
        Q${index+1}. ${q.q}
    </div>

    <div class="options-container">
        ${q.options.map((opt,i)=>`
        <label class="modern-option">
            <input type="radio" name="q${index}" value="${i}">
            <span>${opt}</span>
        </label>
        `).join("")}
    </div>
</div>
`;

}

/* ===== TEXT (Hardware) ===== */
if(q.type==="text"){

container.innerHTML+=`
<div class="question-card modern-card">

    <div class="question-title">
        Q${index+1}. ${q.q}
    </div>

    ${q.image ? `
    <div class="circuit-box">
        <img src="${q.image}" class="circuit-img">
    </div>
    ` : ""}

    <input type="text"
           class="modern-input"
           id="text${index}"
           placeholder="Enter your answer here (numeric only)">
</div>
`;

}

/* ===== CODING ===== */
if(q.type==="coding"){

container.innerHTML+=`
<div class="question-card coding-card">

    <div class="coding-header">
        C Programming Question (5 Marks)
    </div>

    <p class="coding-description">${q.description}</p>

    <textarea id="codeArea"
              class="code-editor"
              rows="12"
              placeholder="Write your C code here..."></textarea>

    <button class="run-btn" onclick="runCode()">Run Code</button>

    <pre id="outputBox" class="output-box"></pre>

</div>
`;

}

});

}

/* =========================
   RUN CODE (PISTON API)
========================= */

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

if(passedAll){
codingScore = 5;
document.getElementById("outputBox").innerText = "All test cases passed ✅";
}else{
codingScore = 0;
document.getElementById("outputBox").innerText = "Test case failed ❌";
}

}

/* =========================
   SUBMIT TEST
========================= */
let examSubmitted = false;

async function submitTest(forceSubmit = false){

if(examSubmitted) return; // prevent double submit
examSubmitted = true;

/* Exit fullscreen safely */
if(document.fullscreenElement){
    await document.exitFullscreen();
}

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

/* Prevent multiple submission via localStorage */
if(localStorage.getItem("examSubmitted")){
    window.location.href="result.html";
    return;
}

localStorage.setItem("examSubmitted","true");

const formData = new URLSearchParams();
formData.append("type","RESULT");
formData.append("name",localStorage.getItem("name"));
formData.append("phone",localStorage.getItem("phone"));
formData.append("score",score);
formData.append("result",result);

await fetch(SCRIPT_URL,{
method:"POST",
body:formData
});

localStorage.setItem("score",score);
localStorage.setItem("result",result);

window.location.href="result.html";
}

document.addEventListener("visibilitychange", function(){
if(document.hidden && !examSubmitted){
alert("Tab switching detected. Exam will be submitted.");
submitTest(true);
}
});

