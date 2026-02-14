/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let codingScore = 0;
let examSubmitted = false;
let fullscreenWarningActive = false;
let tabWarningActive = false;


/* =====================================================
   ENTER FULLSCREEN
===================================================== */

function enterFullscreen(){
    const elem = document.documentElement;
    if(elem.requestFullscreen){
        elem.requestFullscreen().catch(()=>{});
    }
}

function exitFullscreenSafe(){
    if(document.fullscreenElement){
        document.exitFullscreen().catch(()=>{});
    }
}


/* =====================================================
   AUTO ENTER FULLSCREEN ON LOAD
===================================================== */

window.addEventListener("load", () => {
    enterFullscreen();
});


/* =====================================================
   ANTI CHEAT SYSTEM (FINAL STABLE)
===================================================== */

document.addEventListener("fullscreenchange", async () => {

    if(examSubmitted) return;

    if(!document.fullscreenElement && !fullscreenWarningActive){

        fullscreenWarningActive = true;

        const action = confirm(
            "⚠ Fullscreen exited.\n\nPress OK to return to fullscreen.\nPress Cancel to submit exam."
        );

        if(action){
            enterFullscreen();
            fullscreenWarningActive = false;
        }else{
            await forceSubmit("Cheating detected: Fullscreen exited.");
        }
    }
});


document.addEventListener("visibilitychange", async () => {

    if(examSubmitted) return;

    if(document.hidden && !tabWarningActive){

        tabWarningActive = true;

        const action = confirm(
            "⚠ Tab switch detected.\n\nPress OK to continue exam.\nPress Cancel to submit exam."
        );

        if(action){
            tabWarningActive = false;
        }else{
            await forceSubmit("Cheating detected: Tab switched.");
        }
    }
});


/* =====================================================
   FORCE SUBMIT
===================================================== */

async function forceSubmit(reason){

    if(examSubmitted) return;

    alert(reason + "\n\nExam will now be submitted.");

    await submitTest();
}


/* =====================================================
   RUN CODE (5 MARKS)
===================================================== */

async function runCode(){

    const code = document.getElementById("codeArea").value;
    const codingQ = selectedQuestions.find(q=>q.type==="coding");

    if(!codingQ){
        alert("Coding question not found.");
        return;
    }

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
        document.getElementById("outputBox").innerText =
            "All test cases passed ✅ (5 Marks)";
    }else{
        codingScore = 0;
        document.getElementById("outputBox").innerText =
            "Test case failed ❌ (0 Marks)";
    }
}


/* =====================================================
   SUBMIT TEST (FINAL FIXED)
   TOTAL MARKS = 30
===================================================== */

async function submitTest(){

    if(examSubmitted) return;
    examSubmitted = true;

    let score = 0;

    /* ================= MCQ SCORING (1 MARK EACH) ================= */

    selectedQuestions.forEach((q,index)=>{

        if(q.type === "mcq"){
            const selected = document.querySelector(
                `input[name="q${index}"]:checked`
            );

            if(selected && Number(selected.value) === q.answer){
                score += 1;   // 1 mark
            }
        }
    });

    /* ================= CODING SCORE (5 MARKS) ================= */

    score += codingScore;

    /* ================= RESULT ================= */

    let passMark = parseInt(localStorage.getItem("passMark") || "0");
    let result = score >= passMark ? "PASS" : "FAIL";

    localStorage.setItem("score",score);
    localStorage.setItem("result",result);

    /* ================= SEND TO GOOGLE SHEET ================= */

    const formData = new FormData();
    formData.append("type","RESULT");
    formData.append("name",localStorage.getItem("name"));
    formData.append("phone",localStorage.getItem("phone"));
    formData.append("score",score);
    formData.append("result",result);

    try{
        await fetch(SCRIPT_URL,{
            method:"POST",
            body:formData,
            keepalive:true
        });
    }catch(e){
        console.log("Sheet update error:",e);
    }

    /* ================= CLEANUP ================= */

    exitFullscreenSafe();

    setTimeout(()=>{
        window.location.href="result.html";
    },800);
}
