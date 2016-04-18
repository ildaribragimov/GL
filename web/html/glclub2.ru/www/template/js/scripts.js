"use strict"; document.addEventListener("DOMContentLoaded", function() {
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
/**
 * Класс выезжающей панели навигации
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function slidePannel(e){function a(b,c){c=c||null;for(var a="show"==b?!0:!1,d=0;d<e.length;d++)document.querySelector(e[d]).classList.toggle("slide-pannel_open",a);f.enable=a;c&&c()}this.enable=!1;var f=this;this.show=function(b){a("show",b)};this.hide=function(b){a("hide",b)}};
// Создание экземпляра объекта "Выезжающей панели главного меню"
var slideMenuPannel = new slidePannel([".page-wrapper", ".burger-button"]);

// Открытие/Скрытие главного меню на мобильных устройствах, при клике по кнопке "burger-button"
(function(burgerButton){
    // Назначение обработчика события татча по пунктам меню
    burgerButton.addEventListener('touchend', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
    // Назначение обработчика события клика по пункту меню
    burgerButton.addEventListener('click', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Проверка состояния главного меню
        (slideMenuPannel.enable == true)
            // Вызов метода "Сворачивания панели", если панель развернута
            ? slideMenuPannel.hide(enableScroll)
            // Вызов метода "Разворачивания панели", если панель свернута
            : slideMenuPannel.show(disableScroll);
    });
})(document.querySelector('.top-pannel__burger-button'));

// Назначение обработчика событию "Изменение размера окна браузера"
window.addEventListener("resize", function(event){
    // Сворачивание панели навигации, при условиях: Ширина "Области просмотра браузера" > 960px; Панель навигации развернута.
    if ( document.documentElement.clientWidth > 960 && slideMenuPannel.enable == true ) slideMenuPannel.hide(enableScroll);
});

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
        scrollingToAnchor(event, function(){
            // Сворачивание панели навигации, если она развернута
            if ( slideMenuPannel.enable == true ) { slideMenuPannel.hide(enableScroll); }
        });
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
})(document.querySelectorAll(".rooms, .rooms__item"));});