'use strict';

  
const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear_button');

editor.oninput = () => {
       localStorage.setItem('value', editor.value);
}

window.onload = () => {
    editor.value = localStorage.getItem('value');
};

clearButton.onclick = () => {
    localStorage.removeItem('value');
    editor.value = '';
  };
