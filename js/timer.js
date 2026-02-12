let timeLeft=localStorage.getItem("duration")*60;

setInterval(()=>{
timeLeft--;
let m=Math.floor(timeLeft/60);
let s=timeLeft%60;
document.getElementById("timer").innerText=m+":"+s;
if(timeLeft<=0) submitTest();
},1000);
