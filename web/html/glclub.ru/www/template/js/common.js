$(document).ready( function(){

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
	 *
	 * Параметры функции:
	 * e (тип: Объект) - объект, содержащий данные о событии
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
	 *
	 * Параметры функции:
	 * e (тип: Объект) - объект, содержащий данные о событии
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
	/** Объявление переменных:
	 * 
	 * menuEnable (тип: boolean) - Состояние выезжающей панели меню. Может принимать два значения:
	 * * true - Меню раскрыто;
	 * * false - меню закрыто.
	 */
	var menuEnable = false;
	/**
	 * Функция "Разворачивания/Сворачивания главного меню"
	 */ 
	function showMainMenu() {
		// Получение ссылки на набор элементов
		$('#page-wrapper, #topPannel, #topPannel .burgerButton, #mainMenu')
			// Переключение занчения атрибута class, выбранных эелементов
			.toggleClass('menu-enabled');
		
		// Смена значения переменной состояния панели навигации
		menuEnable = ( menuEnable == false )? true: false;
		
		// Блокировка/Активация прокрутки страницы
		( menuEnable == true )
		//( $('#page-wrapper').hasClass('menu-enabled') == true )
			// Блокировка
			? disableScroll()
			// Активация
			: enableScroll();
		
		// Запрет на переход по ссылке
		return false;
	}
	/* ====================================================== */
	
	// Определение высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	$('#rooms .roomsItems, #rooms .roomsItem').height( $(window).height() );
	
	// Переопределение высоты секции "НОМЕРА" при изменении размера окна
	$(window).resize(function(){
		$('#rooms .roomsItems, #rooms .roomsItem').height($(window).height());
		if ( $(this).width() > 960 && menuEnable == true ) showMainMenu();
	});
	
	// Получение ссылки на элемент видимой иконки "Показать меню"
	$('#topPannel .burgerButton')
		// Установка обработчика события клика по кнопке "Показать/Скрыть меню"
		.on('click', '.icon', function(){
			// Обращение у функции "Разворачивания/Сворачивания главного меню"
			showMainMenu();
			
			// Запрет на переход по ссылке
			return false;
		});
	
	// Получение ссылки на пункты главного меню
	$('#mainMenu .menuItem')
		// Установка обработчика события клика по пункту главного меню
		.on('click', 'a', function(){
			//if ( menuEnable == true ) showMainMenu();
			
			/** Объявление переменных:
			 * 
			 * sectionName (тип: string) - Ссылка пункта меню на якорь
			 * scrollTopValue (тип: integer) - Расстояние от верхнего края окна браузера до верхней границы якоря
			 */
			var sectionName = $(this).attr('href'),
				scrollTopValue = $(sectionName).offset().top;
		
			// Получение ссылки на набор элементов "html, body"
			$('html, body')
			//$('html').css({'transition':'0.25s', 'transform':'translateY(-250px)'});
				// Выполнение анимации "плавная прокрутка страницы до якоря
				
				.animate(
					{scrollTop: scrollTopValue},
					{duration: 500, easing: 'easeOutExpo', complete: function(){
						//if ( menuEnable == true ) showMainMenu();
					}}
				);
				
				if ( menuEnable == true ) showMainMenu();
			// Запрет на переход по ссылке
			return false;
		});

});