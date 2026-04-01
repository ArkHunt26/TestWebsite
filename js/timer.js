/* timer.js — v4: counts down to absolute exam end time */
let timerInterval;

function initExamTimer(){
  // examEndTime is set by index.html as: startTime + duration*60000 (absolute epoch ms)
  const endTime = parseInt(localStorage.getItem('examEndTime') || '0');

  if(!endTime || endTime <= Date.now()){
    // Already expired — auto-submit immediately
    if(!examSubmitted){
      localStorage.setItem('examSubmittedFlag','1');
      localStorage.removeItem('examEndTime');
      submitTest(false);
    }
    return;
  }
  startCountdown(endTime);
}

function startCountdown(endTime){
  const display = document.getElementById('timer');

  timerInterval = setInterval(() => {
    const remaining = endTime - Date.now();

    if(remaining <= 0){
      clearInterval(timerInterval);
      if(display){ display.textContent = '00:00'; display.className = 'timer-display danger'; }
      if(!examSubmitted){
        localStorage.setItem('examSubmittedFlag','1');
        localStorage.removeItem('examEndTime');
        submitTest(false);
      }
      return;
    }

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    if(display){
      display.textContent = String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0');
      if(remaining <= 5*60000)       display.className = 'timer-display danger';
      else if(remaining <= 15*60000) display.className = 'timer-display warning';
      else                           display.className = 'timer-display';
    }
  }, 500);
}
