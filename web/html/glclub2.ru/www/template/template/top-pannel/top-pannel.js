"use strict";
// Создание экземпляра объекта "Выезжающей панели главного меню"
var slideMenuPannel = new slidePannel([".page-wrapper", ".burger-button"]);

// Открытие/Скрытие главного меню на мобильных устройствах, при клике по кнопке "burger-button"
(function(burgerButton){
    // Назначение обработчика события татча по пунктам меню
    burgerButton.addEventListener('touchend', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
    // Назначение обработчика события клика по пункту меню
    burgerButton.addEventListener('click', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Проверка состояния главного меню
        (slideMenuPannel.enable == true)
            // Вызов метода "Сворачивания панели", если панель развернута
            ? slideMenuPannel.hide(enableScroll)
            // Вызов метода "Разворачивания панели", если панель свернута
            : slideMenuPannel.show(disableScroll);
    });
})(document.querySelector('.top-pannel__burger-button'));

// Назначение обработчика событию "Изменение размера окна браузера"
window.addEventListener("resize", function(event){
    // Сворачивание панели навигации, при условиях: Ширина "Области просмотра браузера" > 960px; Панель навигации развернута.
    if ( document.documentElement.clientWidth > 960 && slideMenuPannel.enable == true ) slideMenuPannel.hide(enableScroll);
});
