"use strict"

document.onclick = (element) => {
    if (element.target.className == "hole hole_has-mole") {
        dead.textContent ++;
        if (dead.textContent == 10) {
            alert("Вы выиграли!");
            counterReset();
        };
    } else {
        lost.textContent ++;
        if (lost.textContent == 5) {
            alert("Вы проиграли!");
            counterReset();
        };
    };
};

function counterReset()  {
    dead.textContent = 0;
    lost.textContent = 0;
};