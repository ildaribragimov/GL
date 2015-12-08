// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function() {

	/**
	 * Объявление глобальных переменных
	 *
	 * viewport (тип: object) - Объект области просмотра браузера
	 * $_roomsItems (тип: object) - Объект элементов секции "НОМЕРА"
	 * $_mainMenu (тип: object) - Ссылка на DOM-элемент с id "mainMenu"
	 * $_topPannel (тип: object) - Ссылка на DOM-элемент с id "topPannel"
	 */
	var viewport = document.documentElement,
		$_roomsItems = document.querySelectorAll('.roomsItems, .roomsItem'),
		$_mainMenu = document.getElementById('mainMenu'),
		$_topPannel = document.getElementById('topPannel');



	/* ================================================= *
	 * ==== Блокировка/Активация прокрутки страницы ==== *
	 * ================================================= */
	/**
	 * Объявление переменных
	 *
	 * keys (тип: array) - массив кодов клавиш, отвечающих за скроллирование страницы:
	 * * 32 - Пробел
	 * * 33 - "pageup"
	 * * 34 - "pagedown"
	 * * 35 - "end"
	 * * 36 - "home"
	 * * 37 - Стрелка "Влево"
	 * * 38 - Стрелка "Вверх"
	 * * 39 - Стрелка "Вправо"
	 * * 40 - Стрелка "Вниз"
	 */
	var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

	/**
	 * Функция "Отмены действия браузера на события прокрутки мышью"
	 *
	 * Параметры функции:
	 * e (тип: Объект) - объект, содержащий данные о событии
	 */
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault()
		};
		e.returnValue = false;  
	}

	/**
	 * Функция "Отмены действия браузера на события нажатий клавиш"
	 *
	 * Параметры функции:
	 * e (тип: Объект) - объект, содержащий данные о событии
	 */
	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	/**
	 * Функция "Блокировки прокрутки страницы"
	 */
	function disableScroll() {
		// Старые версии FF
		if (window.addEventListener) {
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		}
		// Современный стандарт
		window.onwheel = preventDefault;
		// Старые браузеры, IE
		window.onmousewheel = document.onmousewheel = preventDefault;
		// Для мобильных устройств
		window.ontouchmove  = preventDefault;
		document.onkeydown  = preventDefaultForScrollKeys;
	}

	/**
	 * Функция "Активации прокрутки страницы"
	 */
	function enableScroll() {
		// Старые версии FF
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		}
		// Современный стандарт
		window.onwheel = null;
		// Старые браузеры, IE
		window.onmousewheel = document.onmousewheel = null; 
		// Для мобильных устройств
		window.ontouchmove = null;  
		document.onkeydown = null;  
	}
	/* ================================================= */



	/* ====================================================== *
	 * ==== Разворачивание/Сворачивание панели навигации ==== *
	 * ====================================================== */
	/**
	 * Объект выезжающей панели навигации
	 *
	 * Свойства объекта:
	 * * enable (тип: Boolean) - Состояние панели навигации (false - свернута; true - развернута)
	 *
	 * Методы объекта:
	 * * show - Метод разворачивает панель
	 * * hide - Метод сворачивает панель
	 */
	var slideNavPannel = {
		enable: false,
		show: function(){
			// Получение ссылки на набор элементов
			$('#page-wrapper, #topPannel, .burgerButton, #mainMenu')
				// Переключение занчения атрибута class, выбранных эелементов
				.addClass('menu-enabled');
			// Блокировка прокрутки страницы
			disableScroll();
			// Изменение статуса состояния панели навигации
			this.enable = true;
		},
		hide: function(){
			$('#page-wrapper, #topPannel, .burgerButton, #mainMenu')
				// Переключение занчения атрибута class, выбранных эелементов
				.removeClass('menu-enabled');
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
		// Обход массива элементов "$_roomsItems"
		for (var i = 0; i < $_roomsItems.length; i++) {
			// Установка высоты равной высоте объекта "viewport"
			$_roomsItems[i].style.height = viewport.clientHeight+'px';
		};
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



	// Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
		// Установка обработчика события клика по кнопке "Показать/Скрыть меню"
		.onclick = function(){
			// Отображение списка пунктов меню для свернутой панели навигации (только для мобильных устройств)
			//alert($_mainMenu.display);
			if ( getComputedStyle($_mainMenu).display == 'none' ) $_mainMenu.style.display = 'block';
			//if ( $('#mainMenu').css({'display':'none'}) ) $('#mainMenu').css({'display':'block'});
			// Проверка состояния панели навигации
			( slideNavPannel.enable == true )
				// Вызов метода "Сворачивания панели", если панель развернута
				? slideNavPannel.hide()
				// Вызов метода "Разворачивания панели", если панель свернута
				: slideNavPannel.show();
			
			// Запрет на переход по ссылке
			return false;
		};



	// Получение ссылки на пункты главного меню
	$_mainMenu.querySelector('ul')
		// Установка обработчика события клика по пункту главного меню
		.onclick = function(event){
			// Сворачивание панели навигации, если она развернута
			
			
			/** 
			 * Объявление переменных:
			 *
			 * anchor (тип: string) - Строка, содержащая ссылку на якорь 
			 * scrollTopValue (тип: number) - Расстояние от верхнего края окна браузера до верхней границы якоря
			 * interval (тип: number) - Частота смены кадров (в секунду)
			 * scrollPageY - Функция смены положения области просмотра браузера относительно его текущего положения
			 */
			//var anchor = this.attr('href'),
			var anchor = event.target.getAttribute('href'),
				scrollTopValue = document.getElementById( anchor.match(/[^#].*/) ).offsetTop,
				interval = 1000/100,
				scrollStatus = null,
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
						// Выход из интервальной функции, если расстояние, на которое необходимо прокрутить страницу = 0
						scrollStatus = 'done';
									if ( slideNavPannel.enable == true & scrollStatus == 'done' ) slideNavPannel.hide();

						clearInterval(scrollPageY);
						// Вызов метода "Прокрутки относительно текущего положения" объекта "window"
					} else {
						window.scrollBy(0,scrollStep);
					}

				}, interval);

			// Запрет на переход по ссылке
			return false;
		};



	document.getElementById("showMap").onclick = function(){
		//
		document.getElementById("popupWindow-map").style.display = 'block';
		//
		return false;
	};



	var formSendMail = document.getElementById('sendMail'),
		userMessage = formSendMail.querySelector('textarea'),
		userMessageHeight = parseInt(getComputedStyle(userMessage).height);
/*
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
		};*/

});