// test.js

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
div.innerHTML+=`<label><input type="radio" name="q${q.id}" value="${i}"> ${opt}</label><br>`;
}else{
div.innerHTML+=`<label><input type="checkbox" name="q${q.id}" value="${i}"> ${opt}</label><br>`;
}

});

sectionDiv.appendChild(div);
});

container.appendChild(sectionDiv);
});
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
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
type:"RESULT",
name:localStorage.getItem("name"),
phone:localStorage.getItem("phone"),
score:totalScore,
result:result
})
});

localStorage.setItem("score",totalScore);
localStorage.setItem("result",result);

window.location.href="result.html";
}
