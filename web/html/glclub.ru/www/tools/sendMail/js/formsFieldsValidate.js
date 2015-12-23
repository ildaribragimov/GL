// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function () {


	/* ==== Решение "preventDefault.js"========================== *
	 * ==== Отмена действия по умолчанию браузера на событие ==== *
	 * ========================================================== */
	function preventDefault(event) { event = event || window.event; event.preventDefault ? event.preventDefault() : event.returnValue = false; }
	/* ========================================================== */


	/* ==== Решение "getResultMsg.js"==================== *
	 * ==== Формирование объекта системных сообщений ==== *
	 * ================================================== */
	function getResultMsg(type, logMsgs) { return { type: type, report: logMsgs }; }
	/* ================================================== */


    /* ==== Решение "formsFieldsValidate.js" ============================= *
     * ==== Проверка значений поля формы на допустимость и валидность ==== *
     * =================================================================== */
    function checkFormData(form) { var elements = form.elements, logMsgs = []; for (var e = 0; e < elements.length; e++) { var tagName = elements[e].tagName.toLowerCase(), name = elements[e].name, type = elements[e].type, value = elements[e].value; if ( type == 'submit' || ~name.toLowerCase().indexOf('captcha') ) { continue; } if ( value == '' ) { logMsgs[e] = 'Поле не должно быть пустым!'; continue; } switch ( name ) { case 'name': var regExp = /(^[а-яА-ЯёЁ\s]*$)/i; if ( regExp.exec(value) == null) { logMsgs[e] = 'Имя должно состоять только из букв русского алфавита!'; } break; case 'email': var regExp = /(^([a-z0-9]+[-._]{0,1})+@([a-z0-9]+[-._]{0,1})+\.+[A-z]{2,8}$)/i; if ( regExp.exec(value) == null) { logMsgs[e] = 'E-mail указан не верно!'; } break; case 'phone': var regExp = /(\+7[\s{1}]?[\({1}]?\d{3,6}[\){1}]?[\s{1}]?\d{1,3}[\s\-{1}]?\d{2}[\s\-{1}]?\d{2}\b)/; if ( regExp.exec(value) == null) { logMsgs[e] = 'Номер телефона указан не верно!'; } break; case 'message': var regExp = /([\<\>]|script|style)/i; if ( regExp.exec(value) !== null) { logMsgs[e] = 'Вводите только текст! HTML-теги недопустимы!'; } break; default: break; } } var result = ( logMsgs.length > 0) ? getResultMsg('fail', logMsgs) : getResultMsg('success', ['Проверка данных прошла успешно!']); return result; }
    /* ================================================== */


	// Получение коллекции объектов всех форм, присутствующих на странице
	var forms = document.getElementsByTagName('form');

	// Обход коллеции объектов в массиве
	for (var f = 0; f < forms.length; f++) {
       	/**
         * Назначение одного обработчика событий отправки формы всем формам на странице
         */
		forms[f].addEventListener("submit", function(event) {
			// Если предварительная проверка данных формы прошла успешно
			if ( checkFormData(this).type == 'success' ) {
				alert ('Данные формы корректны!');
				// Вызов функции проверки пользователя по тесту Тьюринга
				//turingTest(this);
			} else {
				alert ('Данные формы НЕ корректны!');
			}
			// Отмена действия по умолчанию браузера на событие
			preventDefault(event);
		});

        /**
         * Деактивация кнопок формы
         */
        // Получение коллекций элементов "button" и "input"
        var buttons = forms[f].getElementsByTagName('button'),
            inputs = forms[f].getElementsByTagName('input');
        // Объявление массива значений атрибута "type" элементов, котрые необходимо деактивировать
        var buttonsTypes = ['button', 'submit', 'reset'];
        // Обход коллекции "buttons" в цикле
        for ( var b = 0; b < buttons.length; b++ ) {
            // Если значение атрибута "type" текущего элемента коллекции (массива) присутствует в массиве искомых типов кнопок
            if ( buttonsTypes.in_array(buttons[b].type) ) {
                // Устанавливаем атрибут "disabled" с пустым значением
                buttons[b].setAttribute('disabled','');
            }
        }
        // Обход коллекции "inputs" в цикле
        for ( var b = 0; b < inputs.length; b++ ) {
            // Если значение атрибута "type" текущего элемента коллекции (массива) присутствует в массиве искомых типов кнопок
            if ( buttonsTypes.in_array(inputs[b].type) ) {
                // Устанавливаем атрибут "disabled" с пустым значением
                inputs[b].setAttribute('disabled','');
            }
        }
        
	}

});