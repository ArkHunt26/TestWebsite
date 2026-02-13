function renderMCQ(){

const container = document.getElementById("mcqSection");
container.innerHTML = "";

selectedQuestions.forEach((q,index)=>{

if(q.type==="mcq"){

container.innerHTML+=`
<div class="question-card">
<p><b>Q${index+1}.</b> ${q.q}</p>
${q.options.map((opt,i)=>`
<label>
<input type="radio" name="q${index}" value="${i}">
${opt}
</label><br>`).join("")}
</div>
`;

}

if(q.type==="text"){

container.innerHTML+=`
<div class="question-card">
<p><b>Q${index+1}.</b> ${q.q}</p>
<input type="text" id="text${index}" placeholder="Enter answer">
</div>
`;

}

if(q.type==="coding"){

container.innerHTML+=`
<div class="question-card">
<h3>C Programming Question (5 Marks)</h3>
<p>${q.description}</p>
<textarea id="codeArea" rows="10" style="width:100%;"></textarea>
<button onclick="runCode()">Run Code</button>
<pre id="outputBox"></pre>
</div>
`;

}

});
}

let codingScore = 0;

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


            // let codingScore = 0;

            // async function runCode(){

            // const code = document.getElementById("codeArea").value;
            // const codingQ = selectedQuestions.find(q=>q.type==="coding");

            // const response = await fetch("https://emkc.org/api/v2/piston/execute",{
            // method:"POST",
            // headers:{"Content-Type":"application/json"},
            // body:JSON.stringify({
            // language:"c",
            // version:"10.2.0",
            // files:[{content:code}],
            // stdin:codingQ.testCases[0].input
            // })
            // });

            // const result = await response.json();
            // document.getElementById("outputBox").innerText=result.run.output;

            // if(result.run.output.trim()===codingQ.testCases[0].output){
            // codingScore=5;
            // }else{
            // codingScore=0;
            // }
            // }


async function submitTest(){

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

/* SEND TO SHEET */
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




        // function submitTest(){

        // let score = 0;

        // selectedQuestions.forEach((q,index)=>{

        // if(q.type==="mcq"){
        // const selected = document.querySelector(`input[name="q${index}"]:checked`);
        // if(selected && Number(selected.value)===q.answer){
        // score++;
        // }
        // }

        // if(q.type==="text"){
        // const val = parseFloat(document.getElementById(`text${index}`).value);
        // if(Math.abs(val-q.answer)<=q.tolerance){
        // score+=q.marks;
        // }
        // }

        // });

        // score+=codingScore;

        // localStorage.setItem("finalScore",score);
        // window.location.href="result.html";
        // }




                    // /* ===========================
                    //    RENDER QUESTIONS
                    // =========================== */

                    // function renderMCQ(){

                    //     const container = document.getElementById("mcqSection");
                    //     container.innerHTML = "";

                    //     questions.forEach((q,index)=>{

                    //         const card = document.createElement("div");
                    //         card.className = "question-card";

                    //         // Question Header
                    //         const header = document.createElement("div");
                    //         header.className = "question-header";
                    //         header.innerText = (index+1) + ". " + q.q;

                    //         // Options Box
                    //         const optionsBox = document.createElement("div");
                    //         optionsBox.className = "options-box";

                    //         q.options.forEach((option,i)=>{
                    //             const label = document.createElement("label");
                    //             label.className = "option-item";

                    //             label.innerHTML = `
                    //                 <input type="radio" name="q${q.id}" value="${i}">
                    //                 <span>${option}</span>
                    //             `;

                    //             optionsBox.appendChild(label);
                    //         });

                    //         card.appendChild(header);
                    //         card.appendChild(optionsBox);

                    //         container.appendChild(card);
                    //     });
                    // }


                    //             // function renderMCQ(){

                    //             //     const c = document.getElementById("mcqSection");
                    //             //     c.innerHTML = "";

                    //             //     questions.forEach(q=>{

                    //             //         let d = document.createElement("div");
                    //             //         d.className = "question-block";

                    //             //         d.innerHTML = "<p>"+q.q+"</p>";

                    //             //         q.options.forEach((o,i)=>{
                    //             //             d.innerHTML += `
                    //             //             <label>
                    //             //             <input type="radio" name="q${q.id}" value="${i}">
                    //             //             ${o}
                    //             //             </label><br>`;
                    //             //         });

                    //             //         c.appendChild(d);
                    //             //     });
                    //             // }


                    // /* ===========================
                    //    SUBMIT TEST
                    // =========================== */
                    // let testSubmitted = false;

                    // async function submitTest(forceSubmit=false){

                    //     window.onbeforeunload = null;  // 🔥 disable leave protection

                    //     if(testSubmitted) return;
                    //     testSubmitted = true;

                    //     // If manual submit, show confirmation
                    //     if(!forceSubmit){
                    //         const confirmSubmit = confirm("Are you sure you want to submit?");
                    //         if(!confirmSubmit){
                    //             testSubmitted = false;
                    //             return;
                    //         }
                    //     }

                    //     // Disable all inputs immediately
                    //     document.querySelectorAll("input").forEach(el=>{
                    //         el.disabled = true;
                    //     });

                    //     let score = 0;

                    //     questions.forEach(q=>{
                    //         let s = document.querySelector(`input[name=q${q.id}]:checked`);
                    //         if(s && parseInt(s.value) === q.answer){
                    //             score += 10;
                    //         }
                    //     });

                    //     let passMark = parseInt(localStorage.getItem("passMark") || "0");
                    //     let result = score >= passMark ? "PASS" : "FAIL";

                    //     const formData = new URLSearchParams();
                    //     formData.append("type","RESULT");
                    //     formData.append("name",localStorage.getItem("name"));
                    //     formData.append("phone",localStorage.getItem("phone"));
                    //     formData.append("score",score);
                    //     formData.append("result",result);

                    //     await fetch(SCRIPT_URL,{
                    //         method:"POST",
                    //         body:formData
                    //     });

                    //     localStorage.setItem("score",score);
                    //     localStorage.setItem("result",result);

                    //     window.location.href="result.html";
                    // }

                    // /* ============================
                    //    PREVENT PAGE EXIT DURING EXAM
                    // ============================ */

                    // window.onbeforeunload = function(){
                    //     return "Exam in progress. Are you sure you want to leave?";
                    // };


                    //             // async function submitTest(){

                    //             //     if(!confirm("Are you sure you want to submit the exam?")){
                    //             //         return;
                    //             //     }

                    //             //     let score = 0;

                    //             //     questions.forEach(q=>{
                    //             //         let s = document.querySelector(`input[name=q${q.id}]:checked`);
                    //             //         if(s && parseInt(s.value) === q.answer){
                    //             //             score += 10;
                    //             //         }
                    //             //     });

                    //             //     let passMark = parseInt(localStorage.getItem("passMark") || "0");
                    //             //     let result = score >= passMark ? "PASS" : "FAIL";

                    //             //     const formData = new URLSearchParams();
                    //             //     formData.append("type","RESULT");
                    //             //     formData.append("name",localStorage.getItem("name"));
                    //             //     formData.append("phone",localStorage.getItem("phone"));
                    //             //     formData.append("score",score);
                    //             //     formData.append("result",result);

                    //             //     await fetch(SCRIPT_URL,{
                    //             //         method:"POST",
                    //             //         body:formData
                    //             //     });

                    //             //     localStorage.setItem("score",score);
                    //             //     localStorage.setItem("result",result);

                    //             //     window.location.href="result.html";
                    //             // }
