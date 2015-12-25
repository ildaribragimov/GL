// Явное указание на режим строгого соответствия современному стандарту
"use strict";

// Исполнение скрипта при готовности DOM-структуры документа
$.documentReady(function () {


    /**
     * Класс проверки и отправки форм на сервер
     *
     * Аргумменты:
     * * form (тип: object) - Ссылка на объект формы, которую необходимо предварительно проверить перед отправкой
     */
    function FormExt(form) {
        /**
         * Объявление переменных
         */
        var form = form, // Ссылка на объект формы
            elements = form.elements,
            buttons = form.querySelectorAll('[type="button"], [type="submit"], [type="reset"]'); // Ссылка на коллекцию элементов формы
        alert();
        /**
         * Метод Распределяет коллекцию элементов формы на две группы: Поля ввода информации; Кнопки действий
         *
         * Параметры:
         * * elementsType (тип: string) - Название типа элементов, которые необходимо получить
         */
        function elementsFilter() {
            // Объявление массива значений атрибута "type" кнопок действий формы
            var buttonsTypes = ['button', 'submit', 'reset'];
            // Обход коллекции элементов формы в цикле
            for (var i = 0; i < elements.length; i++) {
                if ( buttonsTypes.in_array(elements[i].type) ) {
                    
                } else {
                    
                }
            }
        }
        
        
        /*
  function showCount() {
    result.innerHTML = this.value.length;
  }


  var form = document.forms[0],
      elem = form.elements;
  
  alert(elem.length);
  
  for (var i=0; i < elem.length; i++) {
    
    elem[i].onkeyup = elem[i].oninput = function () {
        result.innerHTML = this.value.length;
    };
    
    elem[i].onpropertychange = function() {
      if (event.propertyName == "value") result.innerHTML = this.value.length;
    };
    
    elem[i].oncut = function() {
      setTimeout(function(){result.innerHTML = this.value.length;}, 0); // на момент oncut значение еще старое
    };
  
  }
  */
        
        
        
        
        
        
        
        
        
        /**
         * Метод проверяет пуста ли форма
         *
         * Возвращаемое значение:
         * * false/true (тип: boolean) - "ДА" (если форма имеет хотя бы одно незаполненное поле) / "НЕТ" (Если форма заполнена полностью)
         */
        function isFormEmpty() {
            // Обход коллеции объектов в массиве
            for (var e = 0; e < elements.length; e++) {
                // Объявление переменных:
                var value = elements[e].value, // Содержимое элемента формы
                    valueLength = value.length; // Количество символов в элементе формы
                // Если содержимое элемента формы пустое
                if ( value == '' ) {
                    // Возвращение результата "Да, форма либо пуста, либо не все элементы заполнены"
                    return true;
                }
            }
            // Возвращение результата "Нет, форма заполнена полностью"
            return false;
        }

        /**
         * Функция активирует/деактивирует кнопки действий формы в зависимости от готовности формы к проверке содержимого
         *
         * Параметры:
         * * state (тип: boolean) - статус доступност икнопок действий формы: true - кнопки доступны; false - кнопки не доступны.
         */
        function enableFormActions(state) {
            // Получение коллекций элементов "button" и "input"
            var buttons = form.getElementsByTagName('button'),
                inputs = form.getElementsByTagName('input');
            // Объявление массива значений атрибута "type" элементов, котрые необходимо деактивировать
            var buttonsTypes = ['button', 'submit', 'reset'];
            // Обход коллекции "buttons" в цикле
            for ( var b = 0; b < buttons.length; b++ ) {
                // Если значение атрибута "type" текущего элемента коллекции (массива) присутствует в массиве искомых типов кнопок
                if ( buttonsTypes.in_array(buttons[b].type) ) {
                    // Переключаем атрибут "disabled" в завсисимости от готовности формы к проверке
                    ( state )
                        ? buttons[b].removeAttribute('disabled') // Удаляем атрибут "disabled"
                        : buttons[b].setAttribute('disabled','') // Устанавливаем атрибут "disabled"
                }
            }
            // Обход коллекции "inputs" в цикле
            for ( var i = 0; i < inputs.length; i++ ) {
                // Если значение атрибута "type" текущего элемента коллекции (массива) присутствует в массиве искомых типов кнопок
                if ( buttonsTypes.in_array(inputs[i].type) ) {
                    // Переключаем атрибут "disabled" в завсисимости от готовности формы к проверке
                    ( state )
                        ? inputs[i].removeAttribute('disabled') // Удаляем атрибут "disabled"
                        : inputs[i].setAttribute('disabled','') // Устанавливаем атрибут "disabled"
                }
            }
        }

        /**
         * Функция Проверяет значения поля формы на допустимость и валидность
         *
         * Возвращаемое значение:
         * * result (тип: object) - Объект системных сообщений о результатах проверки
         */
        function checkFormData() {
            // Объявление переменных:
            var elements = form.elements, // Коллекция объектов элементов формы
                logMsgs = [], // Массив сообщений об ошибках
                result = {
                    type: 'success',
                    report: ['Проверка данных прошла успешно!']
                };
            // Обход коллеции объектов в массиве
            for (var e = 0; e < elements.length; e++) {
                // Объявление переменных:
                var tagName = elements[e].tagName.toLowerCase(), // Название тега элемента формы
                    name = elements[e].name, // Значение атрибута "name" элемента формы
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
                    logMsgs[e] = 'Поле не должно быть пустым!';
                    // Прерывание выполнения текущей итерации и переход к следующей итерации
                    continue;
                }
                // Проверка (по значнию атрибута "name") содержимого элемента формы на соответствие присвоенному типу поля
                switch ( name ) {
                    case 'name':
                        // Формирование регулярного выражения (любые символы кроме руссих букв и пробела) для поиска совпадений
                        var regExp = /(^[а-яА-ЯёЁ\s]*$)/i;
                        // Если совпадения найдены
                        if ( regExp.exec(value) == null) {
                            // Формирование сообщения об ошибке
                            logMsgs[e] = 'Имя должно состоять только из букв русского алфавита!';
                        }
                        // Прерывание выполнения конструкции "switch"
                        break;
                    case 'email':
                        // Формирование регулярного выражения (любые символы кроме руссих букв и пробела) для поиска совпадений
                        var regExp = /(^([a-z0-9]+[-._]{0,1})+@([a-z0-9]+[-._]{0,1})+\.+[A-z]{2,8}$)/i;
                        // Если совпадения найдены
                        if ( regExp.exec(value) == null) {
                            // Формирование сообщения об ошибке
                            logMsgs[e] = 'E-mail указан не верно!';
                        }
                        // Прерывание выполнения конструкции "switch"
                        break;
                    case 'phone':
                        // Формирование регулярного выражения (любые символы кроме руссих букв и пробела) для поиска совпадений
                        var regExp = /(\+7[\s{1}]?[\({1}]?\d{3,6}[\){1}]?[\s{1}]?\d{1,3}[\s\-{1}]?\d{2}[\s\-{1}]?\d{2}\b)/;
                        // Если совпадения найдены
                        if ( regExp.exec(value) == null) {
                            // Формирование сообщения об ошибке
                            logMsgs[e] = 'Номер телефона указан не верно!';
                        }
                        // Прерывание выполнения конструкции "switch"
                        break;
                    case 'message':
                        // Формирование регулярного выражения (любые символы кроме руссих букв и пробела) для поиска совпадений
                        var regExp = /([\<\>]|script|style)/i;
                        // Если совпадения найдены
                        if ( regExp.exec(value) !== null) {
                            // Формирование сообщения об ошибке
                            logMsgs[e] = 'Вводите только текст! HTML-теги недопустимы!';
                        }
                        // Прерывание выполнения конструкции "switch"
                        break;
                    default:
                        // Прерывание выполнения конструкции "switch"
                        break;
                }
            }
            // Если массив сообщений об ошибках не пустой
            if ( logMsgs.length > 0 ) {
                result.type = 'fail';
                result.report = logMsgs;
            }
            // Возвращение результата проверки
            return result;
        }

        // Если содержимое хотя бы одного элемента формы пустое
        if ( isFormEmpty() ) {
            // Вызов функции деактивации кнопок отправки формы, отмены и сброса ее содержимого
            //enableFormActions(false);
            
        }
        
        // Назначение обработчика события отправки формы на сервер
        form.addEventListener("submit", function(event) {
			// Если предварительная проверка данных формы прошла успешно
			if ( checkFormData(this).type == 'success' ) {
				alert ('Данные формы корректны!');
				// Вызов функции проверки пользователя по тесту Тьюринга
				//turingTest(this);
			} else {
				alert ('Данные формы НЕ корректны!');
    			// Отмена действия по умолчанию браузера на событие
                preventDefault(event);
			}
        });
        
        // Назначение обработчиков событий изменения содержимого эелементов формы
        
        
    }
 
    var sendMailForm = new FormExt( document.getElementById('sendMail') ),
        sendReviewForm = new FormExt( document.getElementById('sendReview'));
    

});