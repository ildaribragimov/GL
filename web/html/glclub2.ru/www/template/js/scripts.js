// Явное указание на режим строгого соответствия современному стандарту
"use strict";
// Исполнение скрипта при готовности DOM-структуры документа
document.addEventListener("DOMContentLoaded", function() {
/**
 * Функция "in_array" 
 * Проверяет присутствует ли значение "needle" в искомом массиве (коллекции) "haystack"
 */
function in_array(c,b){for (var a=0,d=b.length;a<d;a++){if(b[a]==c){return !0;}}return !1;};
/**
 * Функция "array_diff"
 * Вычисляет расхождение массивов (коллекций элементов). Сравнивает массив (коллекцию) с массивом (коллекцией) "filteringArray" и возвращает значения из исходного массива (коллекции), которые отсутствуют в "filteringObject".
 */
function array_diff(b,d){for(var c=[],a=0,e=b.length;a<e;a++){in_array(b[a],d)||c.push(b[a]);}return c;};
/**
 * Функция "getIndex" проверяет присутствует ли значение "needle" в массиве (коллекции) "haystack". Если присутствует, фугкция возвращает в качестве результата ключ найденноо элемента в искомом массиве (коллекции)
 */
function getIndex(c,b){for(var a=0,d=b.length;a<d;a++){if(b[a]==c){return a;}}return !1;};
/**
 * Функция "parent" ищет родителя элемента и возвращает ссылку на него
 */
function parent(a,b){var c=a,d=document.querySelectorAll(b);while(c!=null){c=c.parentNode;var i=getIndex(c,d);if(i!==false){return d[i];}}return false;};
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};
/*
 Ildar Ibragimov 2016
*/
function setSizeFrom(c,a,b){a.width=a.width||null;a.height=a.height||"get";b=b||document.documentElement;var d=a.height?a.height/100*b.clientHeight+"px":null;a=a.width?a.width/100*b.clientWidth+"px":null;for(b=0;b<c.length;b++)a&&(c[b].style.width=a),d&&(c[b].style.height=d)};
/* ==== Решение "disableScroll.js" ========= *
 * ==== Блокировка/Активация прокрутки страницы ==== *
 * ================================================= */
var a={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};function b(d){if(a[d.keyCode]){d.preventDefault();return false;}};function c(){event.preventDefault();return false;};function disableScroll(){if(window.addEventListener){window.addEventListener('DOMMouseScroll',c,false);}window.onwheel=function(d){d.preventDefault();};window.onmousewheel=document.onmousewheel=function(d){d.preventDefault();};window.ontouchmove=function(d){d.preventDefault();};document.onkeydown=b;};function enableScroll(){if(window.removeEventListener){window.removeEventListener('DOMMouseScroll', c, false);}window.onwheel=null;window.onmousewheel=document.onmousewheel=null;window.ontouchmove=null;document.onkeydown=null;};
/* ============================================== *
 * ==== Решение "Плавная прогрутка до якоря" ==== *
 * ============================================== */
function scrollingToAnchor(e,a){a=a||null;var b=e.target.getAttribute("href"),b=document.getElementById(b.match(/[^#].*/));if(null===b)a&&a();else var c=document.documentElement,f=c.clientHeight,g=Math.max(document.body.scrollHeight,c.scrollHeight,document.body.offsetHeight,c.offsetHeight,document.body.clientHeight,c.clientHeight),h=b.offsetTop,k=setInterval(function(){var d=window.pageYOffset,b=g-(d+f),d=h-d,c=2!=Math.abs(d)?d/3:d;0==d||0>=b&&0>=b-c?(clearInterval(k),a&&a()):window.scrollBy(0,c)},1000/75)};
// Плавная прокрутка страницы до якоря, при клике по пункту меню
(function(menu){
    // Назначение обработчика события татча по пунктам меню
    menu.addEventListener('touchend', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
    // Назначение обработчика события клика по пункту меню
    menu.addEventListener('click', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов функции готового решения "плавная прокрутка страницы до якоря"
        scrollingToAnchor(event);
    });
})(document.getElementById("main-menu"));
// Установка высоты элементов слайдера ROOMS относительно области просмотра браузера
(function(elements){
    setSizeFrom(elements, {height:100});
    // Назначение обработчика событию "Изменение размера окна браузера"
    window.addEventListener("resize", function(event){
        // Вызов функции "Установка высоты секции "НОМЕРА"
        setSizeFrom(elements, {height:100});
    });
})(document.querySelectorAll(".rooms, .rooms__item"));// Явное указание на режим строгого соответствия современному стандарту


/**
 * Объект "Всплывающее окно"
 *
 * Свойства объекта:
 * * popup (тип: public) - Объект всплывающего окна
 * * name (тип: string) - Имя всплывающего окна. Будет использовано в значении атрибута ID конструкции
 * * options (тип: object) - Объект параметров всплывающего окна. Содержит слудующие параметры:
 * * * type (тип: string) - Тип всплывающего окна. может принимать значения: "alert", "confirm", "prompt"
 * * * header (тип: string) - Заголовок окна
 * * * data (тип: object) - Объект передаваемых данных для вывода в окне
 * * * navigation (тип: string) - Тип навигационной панели. Может принимать значения: "standart", "minimal".
 *
 * Методы объекта:
 * * createPopup (тип: private) - Создаёт HTML-конструкцию окна
 * * createHeader (тип: private) - Создает HTML-конструкцию заголовка окна
 * * createContlols (тип: private) - Создает HTML-конструкцию панели основной навигации окна
 * * createСontent (тип: private) - Созадет HTML-конструкцию содержательной части окна и вставляет в нее содержимое
 * * open (тип: public) - Открывает всплывающее окно
 * * close (тип: public) - Закрывает всплывающее окно
 * * setСontent (тип: public) - Вставляет с замещением в содержательную часть окна содержимое
 */
function popUp(name, options) {
    // Назначение значения по умолчанию свойству всплывающего окна
    this.popup = null;
    // Сохранение ссылки на объект в переменной
    var self = this;
    // Назначение значений по умолчанию параметрам объекта окна, если они не были переданы в вызове
    options = options || new Object;
    options.type = options.type || "alert";
    options.header = options.header || null;
    options.content = options.content || "<p>Содержимое окна не было передано!</p>";
    options.navigation = options.navigation || "standart";
    /**
     * Метод "createContlols" создает HTML-конструкцию панели основной навигации окна
     *
     * Возвращаемое значение:
     * * controls (тип: object) - HTML-конструкция панели основной навигации окна
     */
    function createContlols(){
        // Создание корневого элемента навигационной панели окна
        var controls = document.createElement('div');
        // Добавление к элементу атрибута "class"
        controls.setAttribute("class", "controls");
        // Создание корневого элемента кнопки "Закрыть"
        var close = document.createElement("a");
        // Добавление к элементу атрибута "class"
        close.setAttribute("class", "close");
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
        close.innerHTML = '<span class="icon -m"></span>';        
        // Вставка в корневой элемент кнопки "Закрыть окно"
        controls.appendChild(close);
        // Возвращение HTML-конструкции созданной панели
        return controls;
    }
    /**
     * Метод "createHeader" создает HTML-конструкцию заголовка окна
     *
     * Возвращаемое значение:
     * * header (тип: object) - HTML-конструкция заголовка окна
     */
    function createHeader(){
        // Создание корневого элемента заголовка окна
        var header = document.createElement('div');
        // Добавление к элементу атрибута "class"
        header.setAttribute("class", "header");        
        // Если Текст заголовка окна был передан при вызове плагина
        if (options.header) {
            // Вставка в корневой элемент блока с заголовком
            header.innerHTML = '<h3 class="title">'+options.header+'</h3>';
        }
        // Вызов метода генерации панели управления окном и втавка его в конец родительского
        header.appendChild(createContlols());
        // Возвращение HTML-конструкции заголовка окна
        return header;
    }
    /**
     * Метод "createСontent" созадет HTML-конструкцию содержательной части окна и вставляет в нее содержимое, полученные при вызове плагина
     *
     * Возвращаемое значение:
     * * content (тип: object) - HTML-конструкция содержательной части окна
     */
    function createСontent(){
        // Создание корневого элемента содержательной части окна
        var content = document.createElement('div');
        // Добавление к элементу атрибута "class"
        content.setAttribute("class", "content");
        // Вызов метода вставки контента в содержательную часть
        content.innerHTML = options.content;
        // Возвращение HTML-конструкции содержательной части окна
        return content;
    }
    /**
     * Метод "createPopup" создаёт HTML-конструкцию окна
     *
     * Возвращаемое значение:
     * * popup (тип: object) - Объект HTML-конструкции окна
     */
    function createPopup(){
        /**
         * Объявление перменных:
         *
         ** htmlTree (тип: object) - HTML-конструкция окна
         ** parentElem (тип: object) - Ссылка на родильский элемент текущего создаваемого элемента
         */
        var htmlTree = ["popup", "wrapper", "centered", "wrapper", "container"],
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
     * Метод "open" открывает всплывающее окно
     */
    this.open = function() {
        // Добавление CSS-класса "opened" корневому элементу окна
        self.popup.classList.add("opened");
    };
    /**
     * Метод "close" закрывает всплывающее окно
     */
    this.close = function() {
        // Удаление CSS-класса "opened" у корневого элемента окна
        self.popup.classList.remove("opened");
    };
    /**
     * Метод "setСontent" вставляет с замещением в содержательную часть окна содержимое, переданное в параметре
     *
     * Возвращаемое значение:
     * * content (тип: object/string) - объект(строка), который необходимо вставить в содержательную часть окна
     */
    this.setContent = function(content){
        // Вставка в корневой элемент данных, полученных при вызове плагина
        self.popup.querySelector(".content").innerHTML = content;
    }
}});