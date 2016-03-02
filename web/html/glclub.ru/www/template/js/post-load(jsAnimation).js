// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
document.addEventListener("DOMContentLoaded", function(event) {

    /**
     * Создание объекта всплывающих окон на основе родительского класса "popUp" 
     */
    function glPopUp(name, options) {
        /**
         * Объявление переменных:
         *
         * * popup (тип: object) - рбъект всплывающего окна, унаследованный от рродительского класса "PopUp"
         * * parentOpen (тип: function) - Метод "open" родительского класса
         * * parentClose (тип: function) - Метод "close" родительского класса
         */
        var popup = popUp.apply(this, arguments),
            parentOpen = this.open,
            parentClose = this.close;

        /**
         * Метод "open" открывает всплывающее окно
         */
        this.open = function() {
            // Установка начальной прозрачности всплывающему окну
            //popup.style.opacity = 0;
            // Вызов метода "open" родительского класса
            parentOpen.call(this);
            // Анимация элемента всплывающего окна - "появление"
            animate(popup, {opacity:1}, {duration:200});
        };
        
        /**
         * Метод "close" закрывает всплывающее окно
         */
        this.close = function() {
            // Анимация элемента всплывающего окна - "растворение"
            animate(popup, {opacity:0}, {duration:200}, function(){
                // Вызов метода "close" родительского класса
                parentClose.call(this);
            });
        };
        
    }

    /**
     * Объявление переменных
     *
     * * sendReviewPopup (тип: object) - Экземпляр объекта модального окна "Добавления отзыва"
     * * sendMailPopup (тип: object) - Экземпляр объекта модального окна "Отправки письма"
     */
    var sendReviewPopup = new glPopUp("sendReview", {type: "alert", header: "Отправить отзыв", content:"<p>Это всплывающее окно с формой отправки отзыва!</p>", navigation:"minimal"}),
        sendMailPopup = new glPopUp("sendMail", {type: "alert", header: "Отправить письмо", content:"<p>Это всплывающее окно с формой отправки письма с сайта!</p>", navigation:"minimal"});

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
            // Если объект модельного окна создан
            if (sendMailPopup) {
                // Вызов метода "Открыть окно"
                sendMailPopup.open();                
            }
        });

});