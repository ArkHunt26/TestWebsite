let codingScore=0;

function renderMCQ(){

const container=document.getElementById("mcqSection");

Object.entries(questionBank).forEach(([section,questions])=>{

let sectionDiv=document.createElement("div");
sectionDiv.innerHTML=`<h3>${section.toUpperCase()}</h3>`;

questions.forEach(q=>{

let div=document.createElement("div");
div.innerHTML=`<p>${q.question}</p>`;

q.options.forEach((opt,i)=>{

if(q.type==="single"){
div.innerHTML+=`<label>
<input type="radio" name="q${q.id}" value="${i}"> ${opt}
</label><br>`;
}else{
div.innerHTML+=`<label>
<input type="checkbox" name="q${q.id}" value="${i}"> ${opt}
</label><br>`;
}

});

sectionDiv.appendChild(div);
});

container.appendChild(sectionDiv);

});
}

async function runCode(){

if(!examActive){
alert("Exam Over");
return;
}

const langSelect=document.getElementById("language").value;
const code=document.getElementById("codeEditor").value;

let language=langSelect==="c"?"c":"cpp";
let total=0;

for(let test of codingQuestion.testCases){

try{

const response=await fetch(
"https://emkc.org/api/v2/piston/execute",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
language:language,
version:"*",
files:[{content:code}],
stdin:test.input
})
});

const result=await response.json();

if(result.run && result.run.stdout){
if(result.run.stdout.trim()===test.output.trim()){
total+=10;
}
}

}catch(error){
document.getElementById("codeResult").innerText=
"Compiler temporarily unavailable. Try again.";
return;
}

}

codingScore=total;
document.getElementById("codeResult").innerText=
"Coding Score: "+codingScore+"/40";
}

async function submitTest(){

let mcqScore=0;

Object.values(questionBank).flat().forEach(q=>{

const selected=[...document.querySelectorAll(`input[name=q${q.id}]:checked`)]
.map(e=>parseInt(e.value)).sort();

const correct=q.answer.slice().sort();

if(JSON.stringify(selected)===JSON.stringify(correct)){
mcqScore+=2;
}
});

let totalScore=mcqScore+codingScore;
let result=totalScore>=60?"PASS":"FAIL";

await fetch(SCRIPT_URL,{
method:"POST",
body:JSON.stringify({
name:localStorage.getItem("name"),
phone:localStorage.getItem("phone"),
score:totalScore,
result:result
})
});

localStorage.setItem("score",totalScore);
localStorage.setItem("result",result);

document.exitFullscreen();
window.location.href="result.html";
}
