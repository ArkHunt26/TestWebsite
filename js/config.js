// config.js
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzH27Gvf4uHunE7Ky4UbubwRX4pRlpCAdAlnrXQVHlZLLHn5CCW_uX-nM6NrBID8uWo/exec";
const SPREADSHEET_ID = "1PYDJPxUnHa13L6IAPacDLE5gZwKneBZWeUqwm-m1t4g";

/* ── Shared utility: password show/hide toggle ── */
function togglePwd(id, btn){
  const inp = document.getElementById(id);
  if(!inp) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁️';
  inp.focus();
}
