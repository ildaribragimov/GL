// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Плагин создания "Всплывающего окна"
 *
 * Свойства объекта:
 * * name (тип: string) - Имя всплывающего окна. Будет использовано в значении атрибута ID конструкции
 * * type (тип: string) - Тип всплывающего окна. может принимать значения: "alert", "confirm", "prompt"
 * * options (тип: object) - Объект параметров всплывающего окна. Содержит слудующие параметры:
 * * * header (тип: string) - Заголовок окна
 * * * navigation (тип: string) - Тип навигационной панели. Может принимать значения: "standart", "minimal".
 * * data (тип: object) - Объект передаваемых данных для вывода в окне
 *
 * Методы объекта:
 * * show - Метод разворачивает панель
 * * hide - Метод сворачивает панель
 */
function popUp(name, options) {
    // Назначение значений по умолчанию параметрам параметрам всплывающего окна, если они не были переданы в вызове
    options = options || new Object;
    options.type = options.type || "alert";
    options.header = options.header || null;
    options.data = options.data || "Данные не были переданы!";
    options.navigation = options.navigation || "standart";
    /**
     * Объявление перменных:
     *
     ** htmlTree (тип: object) - HTML-конструкция всплывающего окна
     ** parentElem (тип: object) - Ссылка на родильский элемент текущего создаваемого элемента
     */
    var htmlTree = ["popupWindow", "wrapper", "content"],
        parentElem = null;
    // Построение HTML-конструкции всплывающего окна в цикле
    for (var t = 0; t < htmlTree.length; t++) {
        // Создание нового тега "div"
        var elem = document.createElement('div');
        // Если текущий элемент - первый
        if ( t == 0 ) {
            // Создание переменной и присвоение ей ссылки на корневой HTML-элемент конструкции всплывающего окна
            var popup = elem;
        }
        // Добавление к элементу атрибута "class"
        elem.setAttribute("class", htmlTree[t]);
        // Если создаваемый эелемент имеет родителя
        if ( parentElem ) {
            // Вставляем текущий элемент в конец родительского
            parentElem.appendChild(elem);
        }
        // Назначаем текущий элемент в качестве родительс кого для следующего элемента
        parentElem = elem;
    }
    // Добавление к корневому элементу атрибута "id" со значением "name"
    popup.setAttribute("id", name);
    // Вставляем HTML-конструкцию всплывающего окна в конец элемента "body"
    document.querySelector("body").appendChild(popup);
}

// Создание экземпляра объекта "Всплывающее окно" с ID 
var googleMap = new popUp("googleMap", {navigation:"minimal"});

console.log(document.querySelector("#googleMap").innerHTML );