import axios from "axios";

let time = document.getElementById("time");

setInterval(() =>{
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
},1000)

let date = document.getElementById("date");

let dateFormat = { month: 'long', year: 'numeric', day: 'numeric' };
date.innerHTML = new Date().toLocaleDateString('sv-SE', dateFormat);