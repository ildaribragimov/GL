// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
function ready() {

    /* ==== Решение "disable(enable)Scroll.js" ========= *
	 * ==== Блокировка/Активация прокрутки страницы ==== *
	 * ================================================= */
	var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};
	function preventDefaultForScrollKeys(event) { if (keys[event.keyCode]) { event.preventDefault(); return false; } }
	function disableScroll() { if (window.addEventListener) { window.addEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false); } window.onwheel = function(event){event.preventDefault();}; window.onmousewheel = document.onmousewheel = function(event){event.preventDefault();}; window.ontouchmove  = function(event){event.preventDefault();}; document.onkeydown  = preventDefaultForScrollKeys; }
	function enableScroll() { if (window.removeEventListener) { window.removeEventListener('DOMMouseScroll', function(event){event.preventDefault();}, false); } window.onwheel = null; window.onmousewheel = document.onmousewheel = null; window.ontouchmove = null; document.onkeydown = null; }
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
        $_sticker = document.querySelector('.sticker'),
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


    /* ============================================ *
     * ==== Решение "Блок презентации НОМЕРОВ" ==== *
     * ============================================ */
    // Функция анимации
    function animate(el, action){
        switch(action){
            case 'show':
                el.style.backgroundColor = 'pink';
                break;
            case 'hide':
                el.style.backgroundColor = '';
                break;
        }
    }

    // Функция-обработчик событий "mouseout" и "mouseover"
    function emulateMOverMOut(event){ var a=event.type, b=event.target; if(b==this || (a=='mouseout' && !cursorOn) || (a=='mouseover' && cursorOn)){return;} var c=event.relatedTarget, d=(a=='mouseover')?b:c, f=(a=='mouseover')?c:b, g=(a=='mouseover')?'show':'hide', k='.'+animatedElClass.replace(' ','.'); if(!cursorOn){ var l=d.parent(k); if(d.classList.contains('animated')){cursorOn=d;}else if(l){cursorOn=l;} animate(cursorOn, g); return; } if(d && (l==cursorOn)){return;} animate(cursorOn, g); cursorOn = null; }

    // Объявление переменных:
    var $_rooms = document.querySelector('.roomsItems'), // Ссылка на первый элемента с классом "roomsItems"
        animatedElClass = 'roomsItem', // CSS-класс анимируемого элемента
        cursorOn = null; // Переменная, в котрую будет записываться ссылка на элемент, над которым находится курсор в текущий момент
    
    // Назначение обработчика событиям "mouseover" и "mouseout"
    $_rooms.onmouseout = $_rooms.onmouseover = emulateMOverMOut;
    /* ============================================ */
    

/*
    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика (татча) по кнопке "Показать/Скрыть меню"
        .onTouchEnd = function(event) {
            // Отмена действия по умолчанию браузера на событие
            preventDefault(event);
            event.target.click();
        };*/
        // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика (татча) по кнопке "Показать/Скрыть меню"
        .addEventListener('touchend', function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            event.target.click();
        });


    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика (татча) по кнопке "Показать/Скрыть меню"
        .onclick = function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
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
					var scrolled = window.pageYOffset,
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

    
    
        
        
        	/*
	var formSendMail = document.getElementById('sendMail'),
		userMessage = formSendMail.querySelector('textarea'),
		userMessageHeight = parseInt(getComputedStyle(userMessage).height);

		userMessage.onkeyup = function(){
			var textareaHeight = parseInt(getComputedStyle(this).height),
				textareaPaddingTop = parseInt(getComputedStyle(this).paddingTop),
				textareaPaddingBottom = parseInt(getComputedStyle(this).paddingBottom),
				textareaInnerHeight = userMessageHeight+textareaPaddingTop+textareaPaddingBottom;

			alert (this.scrollHeight +' > '+ textareaInnerHeight);
			if ( this.scrollHeight > textareaInnerHeight ) {
				this.scrollHeight = textareaInnerHeight;
				this.style.height = this.scrollHeight-textareaPaddingTop-textareaPaddingBottom+'px';
			} else {
				
			}
		};
        
        	document.getElementById("showMap").onclick = function(){
		//
		document.getElementById("popupWindow-map").style.display = 'block';
		//
		return false;
	};
    
    */
} // function ready()

document.addEventListener("DOMContentLoaded", ready, false);