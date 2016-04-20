"use strict";
/**
 * Объявление переменных
 *
 * * sendReviewPopupTemplate (тип: string) - HTML-шаблон содержимого всплывающего окна добавления отзыва
 * * sendMailPopupTemplate (тип: string) - HTML-шаблон содержимого всплывающего окна отправки email
 * * sendReviewPopup (тип: object) - Экземпляр объекта модального окна "Добавления отзыва"
 * * sendMailPopup (тип: object) - Экземпляр объекта модального окна "Отправки письма"
 */
var sendReviewPopupTemplate = '<p>Это всплывающее окно с формой отправки отзыва!</p>',
    sendMailPopupTemplate = '<form class="form form_send-mail" action="/" method="post" accept-charset="utf-8" autocomplete="on" novalidate><div class="form__element form__element_first form__element_input"><input class="form__element-field" name="user-name" type="text" placeholder="Ваше имя" pattern="^[А-Яа-яЁё\s]+$" required="required"></div><div class="form__element form__element_input"><input class="form__element-field" name="user-email" type="email" placeholder="Ваш E-mail" required="required"></div><div class="form__element form__element_textarea"><textarea class="form__element-field" name="user-meggage" placeholder="Напишите сообщение здесь..." wrap="soft" rows="3" required="required"></textarea></div><div class="form__element form__element_last form__element_button controls"><div class="controls__wrapper"><div class="controls__content"><button class="button button_rounded button_theme_green" type="submit"><span class="button__icon icon icon_plane icon_size_x24"></span></button></div></div></div></form>';
    
var sendReviewPopup = new popUp('sendReview', {type: 'alert', header: 'Отправить отзыв', content: sendReviewPopupTemplate, navigation:'minimal'}),
    sendMailPopup = new popUp('sendMail', {type: 'alert', header: 'Отправить письмо', content: sendMailPopupTemplate, navigation:'minimal'});

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
