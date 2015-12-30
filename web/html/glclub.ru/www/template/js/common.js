// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function() {

    /* ==== Решение "disable(enable)Scroll.js" ========= *
	 * ==== Блокировка/Активация прокрутки страницы ==== *
	 * ================================================= */
	var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};
	function preventDefaultForScrollKeys(event) { if (keys[event.keyCode]) { preventDefault(event); return false; } }
	function disableScroll() { if (window.addEventListener) { window.addEventListener('DOMMouseScroll', preventDefault, false); } window.onwheel = preventDefault; window.onmousewheel = document.onmousewheel = preventDefault; window.ontouchmove  = preventDefault; document.onkeydown  = preventDefaultForScrollKeys; }
	function enableScroll() { if (window.removeEventListener) { window.removeEventListener('DOMMouseScroll', preventDefault, false); } window.onwheel = null; window.onmousewheel = document.onmousewheel = null; window.ontouchmove = null; document.onkeydown = null; }
	/* ============== */


	/**
	 * Объявление глобальных переменных
	 *
	 * viewport (тип: object) - Объект области просмотра браузера
	 * $_roomsItems (тип: object) - Объект элементов секции "НОМЕРА" (блоков НОМЕР 1, НОМЕР 2)
	 * $_mainMenu (тип: object) - Ссылка на DOM-элемент с id "mainMenu"
	 * $_topPannel (тип: object) - Ссылка на DOM-элемент с id "topPannel"
     * touchDevice (тип: boolean) - Подтверждение, что экран устройства пользователя - сенсорный
     * 
	 */
	var viewport = document.documentElement,
        $_roomsItems = document.querySelectorAll('.roomsItem'),
		$_mainMenu = document.getElementById('mainMenu'),
		$_topPannel = document.getElementById('topPannel'),
        touchDevice = isTouchDevice();


    /* ================================================================== *
	 * ==== Проверка сенсорный ли тип экрана устройства пользователя ==== *
	 * ================================================================== */
    /**
     * Функция проверяет поддерживает ли экран события сенсорных прикосновений
     *
     * Возвращаемое значение:
     * true/false (тип: boolean) - Да (если события поддерживаются); Нет (Если собития не поддерживаниюся)
     *
     * Примечание:
     * * Кроссбраузерное решение с поддержкой IE 8-
     * * Используется в случаях, когда обработчик события назначен как через "on"событие, так и через "addEventListener"
     */
    function isTouchDevice() {
        return ('ontouchstart' in window) || ('onmsgesturechange' in window);
    };
    /* ================================================================== */


	/* ====================================================== *
	 * ==== Разворачивание/Сворачивание панели навигации ==== *
	 * ====================================================== */
	/**
	 * Объект выезжающей панели навигации
	 *
	 * Свойства объекта:
	 * * elements (тип: Array) - Массив селекторов элементов, над которыми будут проходить манипуляции
	 * * enable (тип: Boolean) - Состояние панели навигации (false - свернута; true - развернута)
	 *
	 * Методы объекта:
	 * * show - Метод разворачивает панель
	 * * hide - Метод сворачивает панель
	 */
	var slideNavPannel = {
        elements: ["#page-wrapper", "#topPannel", ".burgerButton"],
		enable: false,
		show: function(){
            for (var i = 0; i < this.elements.length; i++ ) {
				// Переключение занчения атрибута class, выбранных эелементов
				document.querySelector(this.elements[i]).classList.add('menu-enabled');                
            }
			// Блокировка прокрутки страницы
			disableScroll();
			// Изменение статуса состояния панели навигации
			this.enable = true;
		},
		hide: function(){
            for (var i = 0; i < this.elements.length; i++ ) {
				// Переключение занчения атрибута class, выбранных эелементов
				document.querySelector(this.elements[i]).classList.remove('menu-enabled');                
            }
			// Активация прокрутки страницы
			enableScroll();
			// Изменение статуса состояния панели навигации
			this.enable = false;
		}
	};
	/* ====================================================== */


	/* ======================================================== *
	 * ==== Установка высоты секции "НОМЕРА" равной        ==== *
	 * ==== высоте видимой области просмотра окна браузера ==== *
	 * ======================================================== */
	function setRoomsItemsViewportHeight() {
        // Определение переменной, хранящей значение высоты области просмотра барузера
        var viewportHeight = viewport.clientHeight+'px';
		// Обход массива элементов "$_roomsItems"
		for (var r = 0; r < $_roomsItems.length; r++) {
			// Установка элементу высоты равной высоте объекта "viewport"
			$_roomsItems[r].style.height = viewportHeight;
		};
        // Установка элементу высоты равной высоте объекта "viewport"
        document.querySelector('.roomsItems').style.height = viewportHeight;
	};
	/* ======================================================== */


	// Вызов функции "Установка высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	setRoomsItemsViewportHeight();


	// Переопределение высоты секции "НОМЕРА" при изменении размера окна
	window.onresize = function(){
		// Вызов функции "Установка высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
		setRoomsItemsViewportHeight();
		// Сворачивание панели навигации, при условиях: Ширина "viewport" > 960px; Панель навигации развернута.
		if ( viewport.clientWidth > 960 && slideNavPannel.enable == true ) slideNavPannel.hide();
	};


    // Получение ссылки на элемент ".roomsItems" - контейнера НОМЕРОВ (списка НОМЕРОВ)
    document.querySelector('.roomsItems')
        // Назначние обработчика события "НАВЕДЕНИЕ МЫШИ" на дочерних элементах
        .onmouseover = function(event){
            // Увеличение ширины блока НОМЕРА
            //event.target.parentNode
        };
    // Получение ссылки на элемент ".roomsItems" - контейнера НОМЕРОВ (списка НОМЕРОВ)
    document.querySelector('.roomsItems')
        .onmouseout = function(event){
            // Уменьшение ширины блока НОМЕРА
            //event.target.parentNode
        };


    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика (татча) по кнопке "Показать/Скрыть меню"
        .onTouchEnd = function(event) {
            // Отмена действия по умолчанию браузера на событие
            preventDefault(event);
            event.target.click();
        };


    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика (татча) по кнопке "Показать/Скрыть меню"
        .onclick = function(event) {
            // Отмена действия по умолчанию браузера на событие
            preventDefault(event);
			// Проверка состояния панели навигации
			( slideNavPannel.enable == true )
				// Вызов метода "Сворачивания панели", если панель развернута
				? slideNavPannel.hide()
				// Вызов метода "Разворачивания панели", если панель свернута
				: slideNavPannel.show();
        };


	// Получение ссылки на пункты главного меню
	$_mainMenu.querySelector('ul')
		// Установка обработчика события клика по пункту главного меню
		.onclick = function(event){
			/** 
			 * Объявление переменных:
			 *
			 * anchor (тип: string) - Строка, содержащая ссылку на якорь 
			 * scrollTopValue (тип: number) - Расстояние от верхнего края окна браузера до верхней границы якоря
			 * interval (тип: number) - Частота смены кадров (в секунду)
			 * scrollPageY - Функция смены положения области просмотра браузера относительно его текущего положения
			 */
			var anchor = event.target.getAttribute('href'),
				scrollTopValue = document.getElementById( anchor.match(/[^#].*/) ).offsetTop,
				interval = 1000/100,
				scrollPageY = setInterval(function(){
					/** 
					 * Объявление переменных:
					 *
					 * scrolled (тип: number) - Положение области просмотра окна браузера относительно левого верхнего угла страницы
					 * needToScroll (тип: number) - Расстояние, на которое необходимо прокрутить страницу относительно ее текущего положения
					 * scrollStep (тип: number) - Шаг прокрутки страницы на текущем кадре в пикселях.
					 */
					var scrolled = window.pageYOffset || document.documentElement.scrollTop,
						needToScroll = (scrollTopValue-scrolled),
						scrollStep = (Math.abs(needToScroll) != 2)
							? needToScroll/3
							: needToScroll;

					// Проверка расстояния, на которое необходимо прокрутить страницу на равенство 0 (нулю)
					if (needToScroll == 0) {
                        // Сворачивание панели навигации, если она развернута
                        if ( slideNavPannel.enable == true ) slideNavPannel.hide();
                        // Выход из интервальной функции
						clearInterval(scrollPageY);
					} else {
                        // Вызов метода "Прокрутки относительно текущего положения" объекта "window"
						window.scrollBy(0,scrollStep);
					}

				}, interval);
			// Запрет на переход по ссылке
			return false;
		};

});