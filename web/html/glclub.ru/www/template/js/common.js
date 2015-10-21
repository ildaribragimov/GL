$(document).ready( function(){

	// Определение высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	$('#rooms .roomsItems, #rooms .roomsItem').height( $(window).height() );
	
	// Переопределение высоты секции "НОМЕРА" при изменении размера окна
	$(window).resize(function(){
		$('#rooms .roomsItems, #rooms .roomsItem').height($(window).height());
	});
	
	// Клик по кнопке "showMenu"
	$('#topPannel .button.-showMenu .icon').on('click', function(){
		// Получение ссылки на элемент, вызвавший событие
		$(this)
			// Получение ссылки на прямого родителя элемента с классом "button"
			.parent('.button')
			// Добавление к полученному набору ссылки на элемент с id "page-wrapper"
			.add('#page-wrapper')
			.parent('body')
			.toggleClass('overflow-hidden')
			.end()
			.add('#topPannel')
			// Переключение занчения атрибута class, выбранных эелементов
			.toggleClass('menu-enabled');
		// Запрет на переход по ссылке
		return false;  
	});

});