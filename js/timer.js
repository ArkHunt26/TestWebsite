let timeLeft = 3600;
let examActive = true;

window.onload = function(){

document.documentElement.requestFullscreen();

const interval = setInterval(()=>{

timeLeft--;

let m=Math.floor(timeLeft/60);
let s=timeLeft%60;

document.getElementById("timer").innerText =
m+":"+(s<10?"0":"")+s;

if(timeLeft<=0){
clearInterval(interval);
examActive=false;
document.exitFullscreen();
submitTest();
}

},1000);
};
