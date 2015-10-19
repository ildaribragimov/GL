/**
 * Basic animation effects
 */

$(document).ready( function(){

	// Клик по кнопке "showMenu"
	$('#topPannel .button.-showMenu').on('click', function(){
		//
		$('#page-wrapper').animate(
			{
				// Отступ от левого края элемента станет равным 240px
				marginLeft: "240px"
			},
			// Скорость анимации 0,6 секунды
			600,
			'easeOutExpo'
		);

		// Запрет на переход по ссылке
		return false;  
	});

});

/* ================ */