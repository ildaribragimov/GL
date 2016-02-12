// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
document.addEventListener("DOMContentLoaded", function(event) {

    // Создание всплывающего окна "Отправки письма"
    var sendMailPopup = new popUp("sendMail", {type: "alert", header: "Отправить письмо", data:"<p>Это всплывающее окно с формой отправки письма с сайта!</p>", navigation:"minimal"});

    // Получение ссылки на элемент вызывающий окно
    document.querySelector('button[value="sendMail"]')
        // Назначение обработчика события клика по элементу
        .addEventListener("click", function(event){
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            if (sendMailPopup) {
                // Вызов метода "Открыть окно"
                sendMailPopup.open();                
            }
        });

});