$(document).ready( function(){

	/**
	 * Плагин "Получение GET-параметра из URL-строки в формате JSON по имени
	 *
	 * Параметры плагина:
	 * varName (тип: string) - имя запрашиваемого GET-параметра
	 *
	 * Возвращаемое значение:
	 * urlVars[varName] (тип: string) - значение параметра
	 
	function showMainMenu() {
		// Получение ссылки на набор элементов
		$('#page-wrapper, #topPannel .button.-showMenu')
			// Переключение занчения атрибута class, выбранных эелементов
			.toggleClass('menu-enabled')
			// Получение ссылки на прямого родителя набора элементов - элемент "body"
			//.parent('body')
			// Переключение значения атрибута class, элемента "body"
			//.toggleClass('overflow-hidden');
			
		// Запрет на переход по ссылке
		return false;
	}*/
	
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
		.on('click', 'a', function(){
			
			var anchor = $(this);
			$('html, body')
				.stop()
				.animate(
					{ scrollTop: $(anchor.attr('href')).offset().top },
					1000
				)
				
				
			// Получение ссылки на набор с id "page-wrapper", "topPannel"
			.find('#page-wrapper, #topPannel')
				// Переключение занчения атрибута class, выбранных эелементов
				.toggleClass('menu-enabled')
				// Получение ссылки на прямого родителя набора элементов - элемент "body"
				.parent('body')
				// Переключение значения атрибута class, элемента "body"
				.toggleClass('overflow-hidden');
				
			
			

				
				
			e.preventDefault();
			
			return false;	
		});
		
	// Получение ссылки на элемент видимой иконки "Показать меню"
	$('#topPannel .button.-showMenu:visible')
		// Получение ссылки на дочерний элемент с классом ".icon"
		.find('.icon')
		// Клик по кнопке "showMenu"
		.on('click', function(){
			// Получение ссылки на элемент, вызвавший событие
			$(this)
				// Получение ссылки на прямого родителя элемента с классом "button"
				.parent('.button')
				// Добавление к полученному набору ссылки на элементов с id "page-wrapper", "topPannel"
				.add('#page-wrapper, #topPannel')
				// Переключение занчения атрибута class, выбранных эелементов
				.toggleClass('menu-enabled')
				// Получение ссылки на прямого родителя набора элементов - элемент "body"
				.parent('body')
				// Переключение значения атрибута class, элемента "body"
				.toggleClass('overflow-hidden');
			
			// Запрет на переход по ссылке
			return false;
		});

	// Получение ссылки на элемент видимой иконки "Показать меню"
	//$('#topPannel .button.-showMenu:visible')
		// Клик по кнопке "showMenu"
		//.on('click', '.icon', showMainMenu);
});