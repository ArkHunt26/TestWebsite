/* timer.js — v3: uses hard end time stored in localStorage */
let timerInterval;

function initExamTimer(){
  // Check if we have a hard end time
  let endTime = parseInt(localStorage.getItem('examEndTime') || '0');

  if(!endTime || endTime <= Date.now()){
    // Fallback: fetch from server
    fetch(SCRIPT_URL + '?mode=student')
      .then(r => r.json())
      .then(config => {
        const dur = parseInt(config.duration) * 60000;
        endTime = Date.now() + dur;
        localStorage.setItem('examEndTime', endTime);
        startCountdown(endTime);
      })
      .catch(() => {
        // If can't connect, use 60 min default
        endTime = Date.now() + 60 * 60000;
        startCountdown(endTime);
      });
  } else {
    startCountdown(endTime);
  }
}

function startCountdown(endTime){
  const display = document.getElementById('timer');

  timerInterval = setInterval(() => {
    const remaining = endTime - Date.now();

    if(remaining <= 0){
      clearInterval(timerInterval);
      display.textContent = '00:00';
      display.className = 'timer-display danger';
      if(!examSubmitted) submitTest(false);
      return;
    }

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    display.textContent = String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0');

    // Color warning
    if(remaining <= 5 * 60000){
      display.className = 'timer-display danger';
    } else if(remaining <= 15 * 60000){
      display.className = 'timer-display warning';
    } else {
      display.className = 'timer-display';
    }
  }, 500);
}
