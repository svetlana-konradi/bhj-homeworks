'use strict'
const progress = document.getElementById('progress');//получаем полосу прогресса
let form = document.getElementById('form'); //получаем элемент формы
let input = form.querySelector('input'); //получаем кнопку

form.addEventListener('submit', sendForm); //обработчик на кнопку

function sendForm() {//отправляем запрос
    event.preventDefault();
    let formData = new FormData();//создаём форму для отправки
    let xhr = new XMLHttpRequest();//создаём запрос

    let file = input.files[0]; //находим массив с файлами в  input и достаем нужный
    progress.value = 0; //обнуляем значение прогресс-бара
    progress.max = file.size; //задаем максимальный размер прогресс-бара (он равен размеру файла)
    formData.append('file', file); //добавляем в объект формы файл

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = (e) => progress.value = e.loaded; //во время прогресса присваивать значение e.loaded
    xhr.send(formData); //отправляем форму
}
