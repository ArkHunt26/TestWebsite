let examDuration;
let timerInterval;

async function initExamTimer(){

try{
const response = await fetch(SCRIPT_URL + "?mode=student");
const config = await response.json();

examDuration = parseInt(config.duration) * 60;
startTimer();

}catch(e){
console.error(e);
}
}

function startTimer(){

const timerDisplay = document.getElementById("timer");

timerInterval = setInterval(()=>{

if(examDuration <= 0){
clearInterval(timerInterval);
submitTest(false);
return;
}

let minutes = Math.floor(examDuration / 60);
let seconds = examDuration % 60;

timerDisplay.innerText =
minutes + ":" + (seconds < 10 ? "0"+seconds : seconds);

examDuration--;

},1000);
}
