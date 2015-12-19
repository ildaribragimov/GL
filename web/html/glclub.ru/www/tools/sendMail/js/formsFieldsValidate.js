// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function () {

	/* ==== Решение "preventDefault.js"========================== *
	 * ==== Отмена действия по умолчанию браузера на событие ==== *
	 * ========================================================== */
	function preventDefault(event) { event = event || window.event; event.preventDefault ? event.preventDefault() : event.returnValue = false; }
	/* ========================================================== */

	
	/**
	 * Функция Проверяет значения поля формы на допустимость и валидность
	 *
	 * Возвращаемое значение:
	 * * true|false (тип: boolean) - Результат проверки. Да - Проверка значений полей формы прошла успешно; Нет - Проверка завершилась безуспешно
	 */
	function checkFormData(form) {
		// Объявление переменных:
		var elements = form.elements, // Коллекция объектов элементов формы
			errorMsg = []; // Массив сообщений об ошибках
			
		// Обход коллеции объектов в массиве
		for (var e = 0; e < elements.length; e++) {
			// Объявление переменных:
			var name = elements[e].name, // Значение атрибута "name" элемента формы
				type = elements[e].type, // Значение атрибута "type" элемента формы
				value = elements[e].value; // Содержимое элемента формы

			// Если тип элемента формы - button/input или captcha
			if ( type == 'submit' || ~name.toLowerCase().indexOf('captcha') ) {
				// Прерывание выполнения текущей итерации и переход к следующей итерации
				continue;
			}
			// Если содержимое элемента формы пустое
			if ( value == '' ) {
				// Формирование сообщения об ошибке
				errorMsg[e] = 'Поле не должно быть пустым!';
				// Прерывание выполнения текущей итерации и переход к следующей итерации
				continue;
			}
			// Проверка содержимого элемента формы на соответствие присвоенному типу поля
			switch ( name ) {
				case 'name':
					// Формирование регулярного выражения (любые символы кроме руссих букв и пробела) для поиска совпадений
					var regExp = /(^[а-яА-ЯёЁ\s]*$)/i;
					// Если совпадения найдены
					if ( regExp.exec(value) == null) {
						// Формирование сообщения об ошибке
						errorMsg[e] = 'Имя должно состоять только из букв русского алфавита!';
					}
					break;
				case 'email':
					alert ('Это Ваш Email');
					break;
				case 'phone':
					alert ('Это Ваш Телефон');
					break;
				default:
					alert ('Это значение не изветстного мне поля');
					break;
			}
		}
		
		if ( errorMsg != '') {
			alert (errorMsg.join(', '));
		}
		
		// Возвращение положительного результата
		return true;
	}


	/**
	 * Назначение одного обработчика событий отправки формы всем формам на странице
	 */
	// Получение коллекции объектов всех форм, присутствующих на странице
	var forms = document.getElementsByTagName('form');
	// Обход коллеции объектов в массиве
	for (var f = 0; f < forms.length; f++) {
		// Назначение каждому объкту коллекции обработчика события отправки формы на сервер
		forms[f].addEventListener("submit", function(event) {
			// Вызов функции предварительной проверки данных перед отправкой на сервер
			checkFormData(this);
			// 
			//turingTest(this);
			// Отмена действия по умолчанию браузера на событие
			preventDefault(event);
		});
	}

});