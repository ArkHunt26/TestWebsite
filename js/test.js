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
let testSubmitted = false;

async function submitTest(forceSubmit=false){

    window.onbeforeunload = null;  // 🔥 disable leave protection

    if(testSubmitted) return;
    testSubmitted = true;

    // If manual submit, show confirmation
    if(!forceSubmit){
        const confirmSubmit = confirm("Are you sure you want to submit?");
        if(!confirmSubmit){
            testSubmitted = false;
            return;
        }
    }

    // Disable all inputs immediately
    document.querySelectorAll("input").forEach(el=>{
        el.disabled = true;
    });

    let score = 0;

    questions.forEach(q=>{
        let s = document.querySelector(`input[name=q${q.id}]:checked`);
        if(s && parseInt(s.value) === q.answer){
            score += 10;
        }
    });

    let passMark = parseInt(localStorage.getItem("passMark") || "0");
    let result = score >= passMark ? "PASS" : "FAIL";

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

/* ============================
   PREVENT PAGE EXIT DURING EXAM
============================ */

window.onbeforeunload = function(){
    return "Exam in progress. Are you sure you want to leave?";
};


            // async function submitTest(){

            //     if(!confirm("Are you sure you want to submit the exam?")){
            //         return;
            //     }

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
