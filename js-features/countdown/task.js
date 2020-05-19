"use strict";

let timer = () => {
    const startTime = document.getElementById("timer");
    let i = startTime.textContent--;
    if (i == 1){
        alert('Вы победили в конкурсе');
        clearInterval(id);
    }
};
let id = setInterval(timer, 1000);