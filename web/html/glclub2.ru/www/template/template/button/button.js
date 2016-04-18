"use strict";
/**
 * Объявление переменных
 *
 * * sendReviewPopup (тип: object) - Экземпляр объекта модального окна "Добавления отзыва"
 * * sendMailPopup (тип: object) - Экземпляр объекта модального окна "Отправки письма"
 */
var sendReviewPopup = new popUp("sendReview", {type: "alert", header: "Отправить отзыв", content:"<p>Это всплывающее окно с формой отправки отзыва!</p>", navigation:"minimal"}),
    sendMailPopup = new popUp("sendMail", {type: "alert", header: "Отправить письмо", content:"<p>Это всплывающее окно с формой отправки письма с сайта!</p>", navigation:"minimal"});

// Получение ссылки на элемент вызывающий окно "sendReview"
document.querySelector('button[value="sendReview"]')
    // Назначение обработчика события клика по элементу
    .addEventListener("touchend", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
// Получение ссылки на элемент вызывающий окно "sendReview"
document.querySelector('button[value="sendReview"]')
    // Назначение обработчика события клика по элементу
    .addEventListener("click", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        console.log("sendReview");
        // Если объект модельного окна создан
        if (sendReviewPopup) {
            // Вызов метода "Открыть окно"
            sendReviewPopup.open();                
        }
    });
// Получение ссылки на элемент вызывающий окно "sendReview"
document.querySelector('button[value="sendMail"]')
    // Назначение обработчика события клика по элементу
    .addEventListener("touchend", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
// Получение ссылки на элемент вызывающий окно "sendMail"
document.querySelector('button[value="sendMail"]')
    // Назначение обработчика события клика по элементу
    .addEventListener("click", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        console.log("sendMail");
        // Если объект модельного окна создан
        if (sendMailPopup) {
            // Вызов метода "Открыть окно"
            sendMailPopup.open();                
        }
    });
