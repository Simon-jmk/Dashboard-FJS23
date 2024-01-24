// CLOCK
let time = document.getElementById("time");

setInterval(() =>{
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
},1000)

// DATE
let date = document.getElementById("date");
let dateFormat = { month: 'long', year: 'numeric', day: 'numeric' };

date.innerHTML = new Date().toLocaleDateString('sv-SE', dateFormat);

// NOTEBOARD
document.addEventListener('DOMContentLoaded', function() {
    const noteboardText = document.querySelector('.noteboard-text');
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        noteboardText.innerHTML = savedNote;
    }
    noteboardText.addEventListener('input', function() {
        localStorage.setItem('savedNote', noteboardText.innerHTML);
    });
});
// TITLE TEXT
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTitle = localStorage.getItem('dashboardTitle');
    const placeholderText = '...';

    dashboardTitle.innerText = localStorage.getItem('dashboardTitle') || placeholderText;
    dashboardTitle.addEventListener('blur', () => {
        const titleText = dashboardTitle.innerText.trim() || placeholderText;
        localStorage.setItem('dashboardTitle', titleText === placeholderText ? '' : titleText);
        dashboardTitle.innerText = titleText;
      });

      dashboardTitle.addEventListener('focus', () => {
        if (dashboardTitle.innerText === placeholderText) {
          dashboardTitle.innerText = '';
          
        }
      });
    });

