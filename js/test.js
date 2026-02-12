function renderMCQ(){
const c=document.getElementById("mcqSection");
questions.forEach(q=>{
let d=document.createElement("div");
d.innerHTML="<p>"+q.q+"</p>";
q.options.forEach((o,i)=>{
d.innerHTML+=`<label><input type="radio" name="q${q.id}" value="${i}"> ${o}</label><br>`;
});
c.appendChild(d);
});
}

async function submitTest(){

let score=0;

questions.forEach(q=>{
let s=document.querySelector(`input[name=q${q.id}]:checked`);
if(s && parseInt(s.value)===q.answer) score+=10;
});

let passMark=parseInt(localStorage.getItem("passMark"));
let result=score>=passMark?"PASS":"FAIL";

await fetch(SCRIPT_URL,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
type:"RESULT",
name:localStorage.getItem("name"),
phone:localStorage.getItem("phone"),
score:score,
result:result
})
});

localStorage.setItem("score",score);
localStorage.setItem("result",result);
window.location.href="result.html";
}
