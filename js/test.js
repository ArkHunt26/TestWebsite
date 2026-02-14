let codingScore = 0;
let examSubmitted = false;

/* ================= RENDER QUESTIONS ================= */

function renderMCQ(){

    const container = document.getElementById("mcqSection");
    if(!container) return;

    container.innerHTML = "";

    selectedQuestions.forEach((q,index)=>{

        if(q.type==="mcq"){

            container.innerHTML+=`
            <div class="question-card">
                <div><b>Q${index+1}. ${q.q}</b></div>
                ${q.options.map((opt,i)=>`
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${opt}
                    </label><br>
                `).join("")}
            </div>
            `;
        }

        if(q.type==="coding"){

            container.innerHTML+=`
            <div class="question-card">
                <div><b>C Programming (5 Marks)</b></div>
                <p>${q.description}</p>
                <textarea id="codeArea" rows="10" placeholder="Write C code here..."></textarea>
                <button onclick="runCode()">Run Code</button>
                <pre id="outputBox"></pre>
            </div>
            `;
        }
    });
}

/* ================= RUN CODE ================= */

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

/* ================= SUBMIT TEST ================= */

async function submitTest(force = false){

    if(examSubmitted) return;
    examSubmitted = true;

    let score = 0;

    selectedQuestions.forEach((q,index)=>{

        if(q.type==="mcq"){
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            if(selected && Number(selected.value)===q.answer){
                score += 1; // MCQ = 1 mark
            }
        }
    });

    score += codingScore; // Coding = 5 marks

    let passMark = parseInt(localStorage.getItem("passMark") || "0");
    let result = score >= passMark ? "PASS" : "FAIL";

    const formData = new URLSearchParams();
    formData.append("type","RESULT");
    formData.append("name",localStorage.getItem("name"));
    formData.append("phone",localStorage.getItem("phone"));
    formData.append("score",score);
    formData.append("result",result);

    try{
        await fetch(SCRIPT_URL,{
            method:"POST",
            body:formData
        });
    }catch(err){
        console.error("Sheet update failed",err);
    }

    localStorage.setItem("score",score);
    localStorage.setItem("result",result);

    window.location.href="result.html";
}
