// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function () {

	/**
	 * Функция Проверяет значения поля формы на допустимость и валидность
	 *
	 * Возвращаемое значение:
	 * * true|false (тип: boolean) - Результат проверки. Да - Проверка значений полей формы прошла успешно; Нет - Проверка завершилась безуспешно
	 */
	function checkFormData(form) {
		/**
		 * Объявление переменных
		 *
		 * formElements (тип: array) - Массив ссылок на элементы формы, которые необходимо проверить
		 * fields (тип: object) - Объект Элементов формы
		 * fieldValue (тип: string) - Содержимое поля
		 
		var formElements = ['input', 'select', 'textarea'],
			fields = ,
			fieldValue = ;
		*/
		var elems = form.elements;
		// Вывод количества элементов формы
		alert (elems.length);
		
		for (var i = 0; i < elems.length; i++) {
			var t = elems[i]
			alert(t);
		}
		

		// Вывод имени тэга элемента формы
		
		//alert (form.elements.userName);
		alert('тест');
		alert(form.innerHTML);
		
		
		// Возвращение положительного результата
		return true;
	}
	
	/*
	document.getElementsByTagName('form').onsubmit = function(){
		alert ('тест');
	};
	*/
	
	function getFormContent(form) {
		alert(form.innerHTML);
		// Запрет на переход по ссылке
		return false;
	}
	
	
	// Назначение одного обработчика событий отправки для разных форм
	document.querySelectorAll('button').addEventListener("submit", getFormContent(this));
	
	/*
	document.forms.sendMail.sendMail
		.onclick = function(){
			// Вызов функции проверки значений полей формы
			checkFormData( document.forms.sendMail );			
			
			// Запрет на переход по ссылке
			return false;
		};
		*/
});