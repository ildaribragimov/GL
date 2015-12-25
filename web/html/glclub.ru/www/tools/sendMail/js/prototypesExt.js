   /**
 * Библиотека расширений функций прототипов объектов JavaScript (полифилов)
 */

// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/* =============================================================== *
 * ==== Метод "in_array" ========================================= *
 * ==== Проверяет присутствует ли значение "needle" в массиве ==== *
 * =============================================================== */
Array.prototype.in_array = function(needle) {
    // Обход массива, в котором необходимо искать совпадения значений элементов, в цикле
    for(var i = 0, l = this.length; i < l; i++)	{
        // Если значение элемента массива равно искомому значнию
        if(this[i] == needle) {
            // Возвращаение положительного результата
            return true;
        }
    }
    // Возвращаение отрицательного результата
    return false;
}
/* =============================================================== */

/* =============================================================== *
 * ==== Метод "array_diff" ======================================= *
 * ==== Проверяет присутствует ли значение "needle" в массиве ==== *
 * =============================================================== */
Array.prototype.array_diff = function(filteringArray) {
    // Обход массива, в котором необходимо искать совпадения значений элементов, в цикле
    for(var i = 0, l = this.length; i < l; i++)	{
        // Если значение элемента массива равно искомому значнию
        if(this[i] == needle) {
            // Возвращаение положительного результата
            return true;
        }
    }
    // Возвращаение отрицательного результата
    return false;
}
/* =============================================================== */

/*
function array_diff() 
{
    var arr1 = arguments[0], retArr = {};
    var k1 = '', i = 1, k = '', arr = {};
 
    arr1keys:
    for (k1 in arr1) {
	for (i = 1; i < arguments.length; i++) {
	    arr = arguments[i];
	    for (k in arr) {
		if (arr[k] === arr1[k1]) {
		    // If it reaches here, it was found in at least one array, so try next value
		    continue arr1keys; 
		}
	    }
	    retArr[k1] = arr1[k1];
	}
    }        
    return retArr;
}

<form>
  <input type="text" value="1 инпут">
  <input type="text" value="2 инпут">
  <input type="text" value="3 инпут">
  <input type="text" value="4 инпут">
  <button type="submit">Отправить кнопка</button>
  <input type="submit" value="Отправить">
  <input type="reset" value="Сброс">
</form>

<script>
var form = document.forms[0],
    buttons = form.querySelectorAll('[type="button"], [type="submit"], [type="reset"]');
    
    alert('всего кнопок = '+buttons.length);
    alert('всего полей = '+fields.length);
    
</script>

*/