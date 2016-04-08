	/**
	 * Объявление глобальных переменных
	 *
	 * $_viewport (тип: object) - Объект области просмотра браузера
	 * $_roomsItems (тип: object) - Объект элементов секции "НОМЕРА" (блоков НОМЕР 1, НОМЕР 2)
	 * $_mainMenu (тип: object) - Ссылка на DOM-элемент с id "mainMenu"
	 * $_topPannel (тип: object) - Ссылка на DOM-элемент с id "topPannel"
     * 
	 */
	var $_viewport = document.documentElement,
        $_roomsItems = document.querySelectorAll('.roomsItem'),
		$_mainMenu = document.getElementById('mainMenu'),
		$_topPannel = document.getElementById('topPannel'),
        $_sticker = document.querySelector('.sticker');




	/**
	 * Установка высоты секции "НОМЕРА" равной высоте видимой области просмотра окна браузера
	 */
	function setRoomsItemsViewportHeight() {
        // Определение переменной, хранящей значение высоты области просмотра барузера
        var viewportHeight = document.documentElement.clientHeight+'px';
        
		// Обход массива элементов "$_roomsItems"
		for (var r = 0; r < document.querySelectorAll('.roomsItem, .roomsItems').length; r++) {
			// Установка элементу высоты равной высоте объекта "$_viewport"
			$_roomsItems[r].style.height = viewportHeight;
		};
        // Установка элементу высоты равной высоте объекта "$_viewport"
        document.querySelector('.roomsItems').style.height = viewportHeight;
	};


	// Вызов функции "Установка высоты секции "НОМЕРА"
	setRoomsItemsViewportHeight();


    /**
     * Установка высоты секции "Карта проезда" равной 1/2 высоты видимой области просмотра окна браузера
     */
    function setMapSectionHeight() {
        // Сохранение в переменную ссылки на узел с ID "map"
        var mapContainer = document.querySelector('#map');
        // Проверка, присутствует ли узел с ID "map"
        if (mapContainer){
            // Установка элементу высоты равной 1/2 высоты области просмотра браузера
            mapContainer.style.height = $_viewport.clientHeight/2+'px';            
        }
    }

    // Вызов функции "Установка высоты секции "Карта проезда"
	setMapSectionHeight();
    

    // Назначение обработчика событию "Изменение размера окна браузера"
	window.onresize = function(){
		// Вызов функции "Установка высоты секции "НОМЕРА"
		setRoomsItemsViewportHeight();
        // Вызов функции "Установка высоты секции "Карта проезда"
        setMapSectionHeight();
		// Сворачивание панели навигации, при условиях: Ширина "$_viewport" > 960px; Панель навигации развернута.
		if ( $_viewport.clientWidth > 960 && slideNavPannel.enable == true ) slideNavPannel.hide();
	};


    /* ============================================ *
     * ==== Решение "Блок презентации НОМЕРОВ" ==== *
     * ============================================ */
    // Функция анимации
    function animate(el, action){
        //  var defaultElWidth = getComputedStyle(el).width;
        
        switch(action){
            case 'show':
                // вызов метода анимации на целевом объекте
                /*
                el.animate({width:defaultElWidth+"850px"}, function(){
                    console.log('Анимация завершена!');
                }, {easingFunc:'easeInOutQuint', duration:1000});
                */
                el.style.backgroundColor = 'pink';
                break;
            case 'hide':
                el.style.backgroundColor = '';
                /*
                el.animate({width:"0px"}, function(){
                    console.log('Анимация завершена!');
                }, {easingFunc:'easeInOutQuint', duration:1000});
                */
                break;
        }
    }

    // Функция-обработчик событий "mouseout" и "mouseover"
    function emulateMOverMOut(event){var target = event.target; if(target == this){return;} var type = event.type, relatedTarget = event.relatedTarget, animatedElCssClass = '.'+animatedElClass.replace(' ', '.'), targetParent = parent(target, animatedElCssClass), relatedTargetParent = parent(relatedTarget, animatedElCssClass); if( targetParent || relatedTargetParent ){target = (target.tagName == 'A') ? toString.call(target): target; relatedTarget = (relatedTarget.tagName == 'A') ? toString.call(relatedTarget): relatedTarget; if( targetParent == relatedTargetParent || target == relatedTargetParent || relatedTarget == targetParent ){return;}target = targetParent || target;} if( target.classList.contains(animatedElClass) ){var action = (type == 'mouseover')? 'show': 'hide'; cursorOn = ( cursorOn == null || cursorOn != target ) ? target: null; animate(target, action);}}

    // Объявление переменных:
    var $_rooms = document.querySelector('.roomsItems'), // Ссылка на первый элемента с классом "roomsItems"
        animatedElClass = 'roomsItem', // CSS-класс анимируемого элемента
        cursorOn = null; // Переменная, в котрую будет записываться ссылка на элемент, над которым находится курсор в текущий момент
    
    // Назначение обработчика событиям "mouseover" и "mouseout"
    $_rooms.onmouseout = $_rooms.onmouseover = emulateMOverMOut;
    /* ============================================ */
    

    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события татча по кнопке "Показать/Скрыть меню"
        .addEventListener('touchend', function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Вызов события "onclick"
            event.target.click();
        });
    // Получение ссылки на элемент видимой иконки "Показать меню"
	$_topPannel.querySelector('.burgerButton .icon')
        // Назначение обработчика события клика по кнопке "Показать/Скрыть меню"
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
        // Назначение обработчика события татча по пункту главного меню
        .addEventListener('touchend', function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Вызов события "onclick"
            event.target.click();
        });
	// Получение ссылки на пункты главного меню
	$_mainMenu.querySelector('ul')
        // Назначение обработчика события клика (татча) по пункту главного меню
        .addEventListener('click', function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Вызов функции готового решения "плавная прокрутка страницы до якоря"
            scrollingToAnchor(event, function(){
                // Сворачивание панели навигации, если она развернута
                if ( slideNavPannel.enable == true ) { slideNavPannel.hide(); }
            });
        });


    
    
        
        
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