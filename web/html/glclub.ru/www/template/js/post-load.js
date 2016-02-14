// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
document.addEventListener("DOMContentLoaded", function(event) {

    /**
     * Объявление переменных
     *
     * * sendReviewPopup (тип: object) - Экземпляр объекта модального окна "Добавления отзыва"
     * * sendMailPopup (тип: object) - Экземпляр объекта модального окна "Отправки письма"
     */
    var sendReviewPopup = new popUp("sendReview", {type: "alert", header: "Отправить отзыв", data:"<p>Это всплывающее окно с формой отправки отзыва!</p>", navigation:"minimal"}),
        sendMailPopup = new popUp("sendMail", {type: "alert", header: "Отправить письмо", data:"<p>Это всплывающее окно с формой отправки письма с сайта!</p>", navigation:"minimal"});
    ;

    // Получение ссылки на элемент вызывающий окно "sendReview"
    document.querySelector('button[value="sendReview"]')
        // Назначение обработчика события клика по элементу
        .addEventListener("click", function(event){
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Если объект модельного окна создан
            if (sendReviewPopup) {
                // Вызов метода "Открыть окно"
                sendReviewPopup.open();                
            }
        });

    // Получение ссылки на элемент вызывающий окно "sendMail"
    document.querySelector('button[value="sendMail"]')
        // Назначение обработчика события клика по элементу
        .addEventListener("click", function(event){
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Если объект модельного окна создан
            if (sendMailPopup) {
                // Вызов метода "Открыть окно"
                sendMailPopup.open();                
            }
        });

});