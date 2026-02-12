let examInterval = null;

async function initializeExam(){

    const res = await fetch(SCRIPT_URL + "?mode=student");
    const config = await res.json();

    const start = new Date(config.startTime);
    const end = new Date(start.getTime() + config.duration * 60000);

    function updateTimer(){

        const now = new Date();
        const remaining = Math.floor((end - now) / 1000);

        if(remaining <= 0){
            clearInterval(examInterval);
            alert("Time Up!");
            submitTest();
            return;
        }

        const m = Math.floor(remaining / 60);
        const s = remaining % 60;

        document.getElementById("timer").innerText =
            m + ":" + (s < 10 ? "0" : "") + s;
    }

    updateTimer();
    examInterval = setInterval(updateTimer, 1000);
}

window.onload = initializeExam;




                // let examInterval = null;

                // async function initializeExam(){

                //     const res = await fetch(SCRIPT_URL + "?mode=student");
                //     const config = await res.json();

                //     if(!config.enabled){
                //         alert("Exam not enabled.");
                //         window.location.href="index.html";
                //         return;
                //     }

                //     if(!config.startTime){
                //         alert("Exam not scheduled.");
                //         window.location.href="index.html";
                //         return;
                //     }

                //     const start = new Date(config.startTime);
                //     const end = new Date(start.getTime() + config.duration * 60000);
                //     const now = new Date();

                //     if(now < start){
                //         alert("Exam has not started yet.");
                //         window.location.href="index.html";
                //         return;
                //     }

                //     if(now > end){
                //         alert("Exam is already over.");
                //         window.location.href="index.html";
                //         return;
                //     }

                //     // Store passMark locally
                //     localStorage.setItem("passMark", config.passMark);

                //     function updateTimer(){

                //         const current = new Date();
                //         const remaining = Math.floor((end - current) / 1000);

                //         if(remaining <= 0){
                //             clearInterval(examInterval);
                //             alert("Time Up!");
                //             submitTest();
                //             return;
                //         }

                //         const m = Math.floor(remaining / 60);
                //         const s = remaining % 60;

                //         document.getElementById("timer").innerText =
                //             m + ":" + (s < 10 ? "0" : "") + s;
                //     }

                //     updateTimer();
                //     examInterval = setInterval(updateTimer, 1000);
                // }

                // window.onload = initializeExam;
