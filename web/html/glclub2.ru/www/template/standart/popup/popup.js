"use strict";
/**
 * Класс "Всплывающее окно"
 *
 * @class
 * @classdesc Генерирует HTML-конструкцию всплывающего окна и вставляет в него переданное содержимое (Заголовок, Содержимое).
 *
 * @param {object} popup - Объект всплывающего окна
 * @param {string} name - Имя всплывающего окна. Будет использовано в значении атрибута ID конструкции
 * @param {object} options - Объект параметров всплывающего окна. Содержит слудующие параметры:
 * @param {string} type - Тип всплывающего окна. может принимать значения: "alert", "confirm", "prompt"
 * @param {string} header - Заголовок окна
 * @param {object} content - Объект передаваемых данных для вывода в окне
 * @param {string} navigation - Тип навигационной панели. Может принимать значения: "standart", "minimal".
 *
 * @method createPopup - Создаёт HTML-конструкцию окна
 * @method createHeader - Создает HTML-конструкцию заголовка окна
 * @method createContlols - Создает HTML-конструкцию панели основной навигации окна
 * @method createСontent - Созадет HTML-конструкцию содержательной части окна и вставляет в нее содержимое
 * @method open - Открывает всплывающее окно
 * @method close - Закрывает всплывающее окно
 * @method setHeader - Вставляет с замещением в заголовок окна содержимое
 * @method setСontent - Вставляет с замещением в содержательную часть окна содержимое
 */
function popUp(name, options) {
    /**
     * Свойство, содержащее объект всплывающего окна
     * @public
     */
    this.popup = null;
    /**
     * @property {object} self - Ссылка на текущий объект
     * @private
     */
    var self = this;
    /**
     * Назначение значений по умолчанию параметрам объекта окна, если они не были переданы в вызове
     *
     * @property {object} options - Объект параметров всплывающего окна, переданных при генерации
     * @property {string} [options.type = "alert"] - Тип всплывающего окна
     * @property {string} [options.header = null] - Заголовок окна
     * @property {string} [options.content = "<p>Содержимое окна не было передано!</p>"] - Объект передаваемых данных для вывода в окне
     * @property {string} [options.navigation = "standart"] - Тип навигационной панели
     */
    options = options || new Object;
    options.type = options.type || "alert";
    options.header = options.header || null;
    options.content = options.content || "<p>Содержимое окна не было передано!</p>";
    options.navigation = options.navigation || "standart";
    /**
     * Метод "createContlols"
     *
     * @description Cоздает HTML-конструкцию панели основной навигации окна
     * @private
     *
     * @return {object} controls - HTML-конструкция панели основной навигации окна
     */
    function createContlols(){
        /**
         * @property {object} controls - Корневой элемент навигационной панели окна
         */
        var controls = document.createElement('div');
        // Добавление к элементу атрибута "class"
        controls.setAttribute("class", "popup__window-controls");
        /**
         * @property {object} close - Корневой элемент кнопки "Закрыть"
         */
        var close = document.createElement("a");
        // Добавление к элементу атрибута "class"
        close.setAttribute("class", "link link_block");
        // Добавление к элементу атрибута "href"
        close.setAttribute("href", "/");
        // Добавление к элементу атрибута "target"
        close.setAttribute("target", "_self");
        // Назначение обработчика события "клик" по кнопке
        close.addEventListener("click", function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // вызов метода "Закрыть окно"
            self.close();
        });
        // Вставка текстового содержимого в элемент кнопки "Закрыть"
        close.innerHTML = '<span class="icon icon_size_x32 icon_close-button popup__window-controls_close"></span>';        
        // Вставка в корневой элемент кнопки "Закрыть окно"
        controls.appendChild(close);
        // Возвращение HTML-конструкции созданной панели
        return controls;
    }
    /**
     * Метод "createHeader"
     *
     * @description Cоздает HTML-конструкцию заголовка окна
     * @private
     *
     * @return {object} header - HTML-конструкция заголовка окна
     */
    function createHeader(){
        /**
         * @property {object} header - Корневой элемент заголовка окна
         */
        var header = document.createElement('div');
        // Добавление к элементу атрибута "class"
        header.setAttribute("class", "popup__window-header");        
        // Если Текст заголовка окна был передан при вызове плагина
        if (options.header) {
            // Вставка в корневой элемент блока с заголовком
            header.innerHTML = '<h3 class="h h_lev_3">'+options.header+'</h3>';
        }
        // Вызов метода генерации панели управления окном и втавка его в конец родительского
        header.appendChild(createContlols());
        // Возвращение HTML-конструкции заголовка окна
        return header;
    }
    /**
     * Метод "createСontent"
     *
     * @description Cозадет HTML-конструкцию содержательной части окна и вставляет в нее содержимое, полученные при вызове плагина
     * @private
     *
     * @return {object} content - HTML-конструкция содержательной части окна
     */
    function createСontent(){
        /**
         * @property {object} content - Корневой элемент содержательной части окна
         */
        var content = document.createElement('div');
        // Добавление к элементу атрибута "class"
        content.setAttribute("class", "popup__window-content");
        // Вызов метода вставки контента в содержательную часть
        content.innerHTML = options.content;
        // Возвращение HTML-конструкции содержательной части окна
        return content;
    }
    /**
     * Метод "createСontent"
     *
     * @description Cоздаёт HTML-конструкцию окна
     * @private
     *
     * @return {object} popup - Объект HTML-конструкции окна
     */
    function createPopup(){
        /**
         * @property {object} htmlTree - HTML-конструкция окна
         * @property {object} parentElem - Ссылка на родильский элемент текущего создаваемого элемента
         */
        var htmlTree = ["popup", "popup__wrapper", "popup__content"],
            parentElem = null;
        // Построение HTML-конструкции всплывающего окна в цикле
        for (var t = 0; t < htmlTree.length; t++) {
            // Создание нового тега "div"
            var elem = document.createElement('div');
            // Если текущий элемент - первый:
            if ( t == 0 ) {
                // Создание переменной и присвоение ей ссылки на корневой HTML-элемент конструкции окна
                var popup = elem;
            }
            // Добавление к элементу атрибута "class"
            elem.setAttribute("class", htmlTree[t]);
            // Если создаваемый эелемент имеет родителя
            if (parentElem) {
                // Вставляем текущий элемент в конец родительского
                parentElem.appendChild(elem);
            }
            // Назначаем текущий элемент в качестве родительс кого для следующего элемента
            parentElem = elem;
            // Если текущий элемент - последний:
            if (t == htmlTree.length-1) {
                // Вызов метода генерации заголовочной панели окна и втавка его в конец родительского
                parentElem.appendChild(createHeader());
                // Вызов метода генерации HTML-конструкции содержимого окна и вставки полученных данных
                parentElem.appendChild(createСontent());
            }
        }
        // Добавление к корневому элементу атрибута "id" со значением "name"
        popup.setAttribute("id", name);
        // Возвращаемый объект созданного окна
        return popup;
    }
    // Создание HTML-конструкции всплывающего окна
    this.popup = createPopup();
    // Вставка HTML-конструкции окна в конец элемента "body"
    document.querySelector("body").appendChild(this.popup);
    /**
     * Метод "open"
     *
     * @description Открывает всплывающее окно (Добавляет CSS-класс "opened" корневому элементу окна)
     * @public
     *
     * @return void
     */
    this.open = function() {
        self.popup.classList.add("popup_open");
    };
    /**
     * Метод "close"
     *
     * @description Закрывает всплывающее окно (Удаляет CSS-класс "opened" у корневого элемента окна)
     * @public
     *
     * @return void
     */
    this.close = function() {
        self.popup.classList.remove("popup_open");
    };
    /**
     * Метод "setHeader"
     *
     * @description Вставляет с замещением в заголовок окна содержимое, переданное в параметре
     * @public
     *
     * @param {object/string} header - Объект(строка), который необходимо вставить в заголовок окна
     *
     * @return void
     */
    this.setHeader = function(header){
        self.popup.querySelector(".popup__window-header .h").innerHTML = content;
    };
    /**
     * Метод "setСontent"
     *
     * @description Вставляет с замещением в содержательную часть окна содержимое, переданное в параметре
     * @public
     *
     * @param {object/string} content - Объект(строка), который необходимо вставить в содержательную часть окна
     *
     * @return void
     */
    this.setContent = function(content){
        self.popup.querySelector(".popup__window-content").innerHTML = content;
    };
}