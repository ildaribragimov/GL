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
	/* ============== */
	
	/**
	 * Функция "Разворачивания/Сворачивания главного меню"
	 */ 
	function showMainMenu() {
		// Получение ссылки на набор элементов
		$('#page-wrapper, #topPannel, #topPannel .button.-showMenu')
			// Переключение занчения атрибута class, выбранных эелементов
			.toggleClass('menu-enabled');
		
		// Блокировка/Активация прокрутки страницы
		( $('#page-wrapper').hasClass('menu-enabled') == true )
			// Блокировка
			? disableScroll()
			// Активация
			: enableScroll();
	
		// Запрет на переход по ссылке
		return false;
	}
	
	// Определение высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	$('#rooms .roomsItems, #rooms .roomsItem').height( $(window).height() );
	
	// Переопределение высоты секции "НОМЕРА" при изменении размера окна
	$(window).resize(function(){
		$('#rooms .roomsItems, #rooms .roomsItem').height($(window).height());
	});
	
	// Получение ссылки на элемент видимой иконки "Показать меню"
	$('#topPannel .button.-showMenu:visible')
		// Получение ссылки на дочерний элемент с id "mainMenu"
		.siblings('#mainMenu')
		// Перемещение выбранных элементов в конец содержимого элемента "body"
		.appendTo('body')
		// Отображение элемента
		.css('display', 'block')
		
		// Получение ссылки на пункты меню
		.find(".menuItem")
		// Клик по пункту меню
		.on('click', 'a', function(event){
			
			var anchor = $(this);
			$('html, body')
				.animate(
					{
						scrollTop: $(anchor.attr('href')).offset().top
					},
					{
						duration: 500,
						easing: 'easeOutExpo',
						complete: showMainMenu()
					}
				);
				
		/*		
				
			// Получение ссылки на набор с id "page-wrapper", "topPannel"
			.find('#page-wrapper, #topPannel')
				// Переключение занчения атрибута class, выбранных эелементов
				.toggleClass('menu-enabled')
				// Получение ссылки на прямого родителя набора элементов - элемент "body"
				.parent('body')
				// Переключение значения атрибута class, элемента "body"
				.toggleClass('overflow-hidden');
				
			
			*/
			event.preventDefault();
			
			return false;	
		});
		
		

	/**
	 * Клик по кнопке "ПОКАЗАТЬ/СКРЫТЬ МЕНЮ"
	 */
	$('#topPannel .button.-showMenu:visible').on('click', '.icon', showMainMenu);
	
});