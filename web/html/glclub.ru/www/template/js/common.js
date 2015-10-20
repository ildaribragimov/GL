/**
 * Basic animation effects
 */

$(document).ready( function(){

	// Клик по кнопке "showMenu"
	$('#topPannel .button.-showMenu .icon').on('click', function(){
		// Получение ссылки на элемент, вызвавший событие
		$(this)
			// Получение ссылки на прямого родителя элемента с классом "button"
			.parent(".button")
			// Добавление к полученному набору ссылки на элемент с id "page-wrapper"
			.add('#page-wrapper')
			.parent('body')
			.toggleClass("overflow-hidden")
			.end()
			// Переключение занчения атрибута class, выбранных эелементов
			.toggleClass("menu-enabled");
		// Запрет на переход по ссылке
		return false;  
	});

});

/* ================ */