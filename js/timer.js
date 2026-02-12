let interval = null;
let endTime = null;

/* ===========================
   INIT EXAM TIMER
   =========================== */
async function initExamTimer(){

    try{

        const res = await fetch(SCRIPT_URL + "?mode=student");
        const config = await res.json();

        if(!config.enabled){
            alert("Exam is not enabled yet.");
            window.location.href = "index.html";
            return;
        }

        if(!config.startTime || !config.duration){
            alert("Exam not configured.");
            window.location.href = "index.html";
            return;
        }

        const startTime = new Date(config.startTime);
        const now = new Date();
        endTime = new Date(startTime.getTime() + config.duration * 60000);

        if(now < startTime){
            alert("Exam has not started yet.");
            window.location.href = "index.html";
            return;
        }

        if(now >= endTime){
            alert("Exam time is over.");
            window.location.href = "index.html";
            return;
        }

        /* Store for result usage */
        localStorage.setItem("passMark", config.passMark);

        /* Start timer */
        interval = setInterval(updateTimer,1000);
        updateTimer();

    }catch(err){
        console.log("Timer init error:",err);
        alert("Unable to load exam config.");
    }
}



/* ===========================
   UPDATE TIMER
   =========================== */
function updateTimer(){

    const now = new Date();

    if(now >= endTime){

        clearInterval(interval);

        document.getElementById("timer").innerText = "00:00";

        // Force submit WITHOUT confirmation
        submitTest(true);

        return;
    }

    const timeLeft = Math.floor((endTime - now)/1000);

    const m = Math.floor(timeLeft/60);
    const s = timeLeft % 60;

    document.getElementById("timer").innerText =
        m + ":" + (s < 10 ? "0"+s : s);
}


/* Start timer on page load */
initExamTimer();




            // let duration = parseInt(localStorage.getItem("duration")) || 0;
            // let startTime = new Date(localStorage.getItem("startTime"));
            // let endTime = new Date(startTime.getTime() + duration * 60000);

            // function updateTimer(){

            //     const now = new Date();

            //     if(now >= endTime){

            //         document.getElementById("timer").innerText = "00:00";

            //         // Force submit (NO confirmation)
            //         submitTest(true);

            //         return;
            //     }

            //     const timeLeft = Math.floor((endTime - now)/1000);

            //     const m = Math.floor(timeLeft/60);
            //     const s = timeLeft % 60;

            //     document.getElementById("timer").innerText =
            //         m + ":" + (s < 10 ? "0"+s : s);
            // }

            // setInterval(updateTimer,1000);
            // updateTimer();





            //             // let examInterval = null;

            //             // async function initializeExam(){

            //             //     const res = await fetch(SCRIPT_URL + "?mode=student");
            //             //     const config = await res.json();

            //             //     const start = new Date(config.startTime);
            //             //     const end = new Date(start.getTime() + config.duration * 60000);

            //             //     function updateTimer(){

            //             //         const now = new Date();
            //             //         const remaining = Math.floor((end - now) / 1000);

            //             //         if(remaining <= 0){
            //             //             clearInterval(examInterval);
            //             //             alert("Time Up!");
            //             //             submitTest();
            //             //             return;
            //             //         }

            //             //         const m = Math.floor(remaining / 60);
            //             //         const s = remaining % 60;

            //             //         document.getElementById("timer").innerText =
            //             //             m + ":" + (s < 10 ? "0" : "") + s;
            //             //     }

            //             //     updateTimer();
            //             //     examInterval = setInterval(updateTimer, 1000);
            //             // }

            //             // window.onload = initializeExam;




            //             //                 // let examInterval = null;

            //             //                 // async function initializeExam(){

            //             //                 //     const res = await fetch(SCRIPT_URL + "?mode=student");
            //             //                 //     const config = await res.json();

            //             //                 //     if(!config.enabled){
            //             //                 //         alert("Exam not enabled.");
            //             //                 //         window.location.href="index.html";
            //             //                 //         return;
            //             //                 //     }

            //             //                 //     if(!config.startTime){
            //             //                 //         alert("Exam not scheduled.");
            //             //                 //         window.location.href="index.html";
            //             //                 //         return;
            //             //                 //     }

            //             //                 //     const start = new Date(config.startTime);
            //             //                 //     const end = new Date(start.getTime() + config.duration * 60000);
            //             //                 //     const now = new Date();

            //             //                 //     if(now < start){
            //             //                 //         alert("Exam has not started yet.");
            //             //                 //         window.location.href="index.html";
            //             //                 //         return;
            //             //                 //     }

            //             //                 //     if(now > end){
            //             //                 //         alert("Exam is already over.");
            //             //                 //         window.location.href="index.html";
            //             //                 //         return;
            //             //                 //     }

            //             //                 //     // Store passMark locally
            //             //                 //     localStorage.setItem("passMark", config.passMark);

            //             //                 //     function updateTimer(){

            //             //                 //         const current = new Date();
            //             //                 //         const remaining = Math.floor((end - current) / 1000);

            //             //                 //         if(remaining <= 0){
            //             //                 //             clearInterval(examInterval);
            //             //                 //             alert("Time Up!");
            //             //                 //             submitTest();
            //             //                 //             return;
            //             //                 //         }

            //             //                 //         const m = Math.floor(remaining / 60);
            //             //                 //         const s = remaining % 60;

            //             //                 //         document.getElementById("timer").innerText =
            //             //                 //             m + ":" + (s < 10 ? "0" : "") + s;
            //             //                 //     }

            //             //                 //     updateTimer();
            //             //                 //     examInterval = setInterval(updateTimer, 1000);
            //             //                 // }

            //             //                 // window.onload = initializeExam;
