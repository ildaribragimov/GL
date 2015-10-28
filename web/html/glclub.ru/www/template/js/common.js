//function ready() {

$(document).ready( function(){
	
	/**
	 * Объявление глобальных переменных
	 *
	 * viewport (тип: object) - Объект области просмотра браузера
	 */
	var viewport = document.documentElement;



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



	// Определение высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	$('.roomsItems, .roomsItem').css({'height':viewport.clientHeight});
	
		// Переопределение высоты секции "НОМЕРА" при изменении размера окна
	window.onresize = function(){
		$('.roomsItems, .roomsItem').css({'height':viewport.clientHeight});
		if ( viewport.clientWidth > 960 && slideNavPannel.enable == true ) slideNavPannel.hide();
	};



	// Получение ссылки на элемент видимой иконки "Показать меню"
	$('#topPannel .burgerButton .icon')
		// Установка обработчика события клика по кнопке "Показать/Скрыть меню"
		.click(function(){
			// Отображение списка пунктов меню для свернутой панели навигации (только для мобильных устройств)
			if ( $('#mainMenu').css({'display':'none'}) ) $('#mainMenu').css({'display':'block'});
			// Проверка состояния панели навигации
			( slideNavPannel.enable == true )
				// Вызов метода "Сворачивания панели", если панель развернута
				? slideNavPannel.hide()
				// Вызов метода "Разворачивания панели", если панель свернута
				: slideNavPannel.show();
			
			// Запрет на переход по ссылке
			return false;
		});



	// Получение ссылки на пункты главного меню
	$('#mainMenu .menuItem a')
		// Установка обработчика события клика по пункту главного меню
		.click(function(){
			if ( slideNavPannel.enable == true ) slideNavPannel.hide();
			
			/** Объявление переменных:
			 * 
			 * scrollTopValue (тип: integer) - Расстояние от верхнего края окна браузера до верхней границы якоря
			 */
			var anchor = $(this).attr('href'),
				scrollTopValue = document.getElementById( anchor.match(/[^#].*/) ).offsetTop,
				duration = 500,
				fps = 50,
				interval = 1000/fps,
				scrollPageY = setInterval(function(){

					var scrolled = window.pageYOffset || document.documentElement.scrollTop,
						needToScroll = (scrollTopValue-scrolled),

						scrollStep = (Math.abs(needToScroll) != 2) ? needToScroll/3 : needToScroll;

						window.scrollBy(0,scrollStep);

					if (scrollTopValue == scrolled) clearInterval(scrollPageY);

				}, interval);
			
			// Запрет на переход по ссылке
			return false;
		});

	var sectionContacts = document.getElementById('contacts'),
		formSendMail = sectionContacts.getElementsByClassName('subsection-sendMail'),
		userMessage = document.getElementsByName('userMessage');
		
		document.getElementsByName('userMessage').click = function(){
			alert('userMessage');
		};
		
	

});

//} document.addEventListener("DOMContentLoaded", ready);