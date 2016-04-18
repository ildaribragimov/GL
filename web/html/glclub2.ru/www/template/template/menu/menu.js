"use strict";
// Плавная прокрутка страницы до якоря, при клике по пункту меню
(function(menu){
    // Назначение обработчика события татча по пунктам меню
    menu.addEventListener('touchend', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
    // Назначение обработчика события клика по пункту меню
    menu.addEventListener('click', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов функции готового решения "плавная прокрутка страницы до якоря"
        scrollingToAnchor(event, function(){
            // Сворачивание панели навигации, если она развернута
            if ( slideMenuPannel.enable == true ) { slideMenuPannel.hide(enableScroll); }
        });
    });
})(document.getElementById("main-menu"));
