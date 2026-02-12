/* ===========================
   RENDER QUESTIONS
   =========================== */
function renderMCQ(){

const c = document.getElementById("mcqSection");
c.innerHTML = "";

questions.forEach(q=>{

let d = document.createElement("div");
d.className = "question-block";

d.innerHTML = "<p>"+q.q+"</p>";

q.options.forEach((o,i)=>{
d.innerHTML += `
<label>
<input type="radio" name="q${q.id}" value="${i}">
${o}
</label><br>`;
});

c.appendChild(d);

});
}


/* ===========================
   SUBMIT TEST
   =========================== */
async function submitTest(){

let score = 0;

/* CALCULATE SCORE */
questions.forEach(q=>{
let s = document.querySelector(`input[name=q${q.id}]:checked`);
if(s && parseInt(s.value) === q.answer){
score += 10;
}
});


/* PASS / FAIL */
let passMark = parseInt(localStorage.getItem("passMark") || "0");
let result = score >= passMark ? "PASS" : "FAIL";


/* ===========================
   SEND RESULT (FORM MODE → NO CORS)
   =========================== */
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


/* SAVE LOCAL RESULT */
localStorage.setItem("score",score);
localStorage.setItem("result",result);

/* REDIRECT */
window.location.href="result.html";
}
