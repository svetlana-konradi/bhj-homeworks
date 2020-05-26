"use strict";

let modalMain = document.querySelector('#modal_main');
let modalClose = document.querySelectorAll('div.modal__close');
let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');

modalMain.className = 'modal modal_active';

modalClose[0].onclick = function(){
    modalMain.className = 'modal'
}
show_success.onclick = function(){
    modalMain.className = 'modal'
    modalSuccess.className = 'modal modal_active';
}
modalClose[1].onclick = function(){
    modalSuccess.className = 'modal';
}