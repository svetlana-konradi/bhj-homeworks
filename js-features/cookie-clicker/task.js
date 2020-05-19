"use strict";

const changeCookie = document.getElementById('cookie');

changeCookie.onclick = function () {
    if (changeCookie.width === 200) {
        changeCookie.width = 230;
    } else {
        changeCookie.width = 200;
    }

    let clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;
};
