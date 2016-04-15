"use strict";
// Установка высоты элементов слайдера ROOMS относительно области просмотра браузера
(function(elements){
    setSizeFrom(elements, {height:100});
    // Назначение обработчика событию "Изменение размера окна браузера"
    window.addEventListener("resize", function(event){
        // Вызов функции "Установка высоты секции "НОМЕРА"
        setSizeFrom(elements, {height:100});
    });
})(document.querySelectorAll(".rooms, .rooms__item"));