/**
 * Библиотека кросс-браузерных решений стандартных свойств, методов и операторов JavaScript
 *
 * Поддерживаемые браузеры6
 * * IE 8-
 */

// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/* ==== Решение "preventDefault.js"========================== *
 * ==== Отмена действия по умолчанию браузера на событие ==== *
 * ========================================================== */
function preventDefault(event) { event = event || window.event; event.preventDefault ? event.preventDefault() : event.returnValue = false; }
/* ========================================================== */


/* ==== Решение "fixEvent.js"================================================================================= *
 * ==== Добавление свойств стандартных свойств (target, currentTarget, relatedTarget, pageX/pageY, which) ==== *
 * =========================================================================================================== */
function fixEvent(e) { e.currentTarget = this; e.target = e.srcElement; if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement; if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement; if (e.pageX == null && e.clientX != null) {
        var html = document.documentElement; var body = document.body; e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0); e.pageX -= html.clientLeft || 0; e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0); e.pageY -= html.clientTop || 0; } if (!e.which && e.button) { e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0)); } return e; }
/* =========================================================================================================== */


/* ==== eventListener.polyfill.js" =========================================================================== *
 * ==== Добавление поддержки для IE 8- методов "addEventListener", "removeEventListener", "dispatchEvent" ==== *
 * =========================================================================================================== */
!window.addEventListener&&function(e,t,n,r,i,s,o){e[r]=t[r]=n[r]=function(e,t){var n=this;o.unshift([n,e,t,function(e){e.currentTarget=n,e.preventDefault=function(){e.returnValue=!1},e.stopPropagation=function(){e.cancelBubble=!0},e.target=e.srcElement||n,t.call(n,e)}]),this.attachEvent("on"+e,o[0][3])},e[i]=t[i]=n[i]=function(e,t){for(var n=0,r;r=o[n];++n)if(r[0]==this&&r[1]==e&&r[2]==t)return this.detachEvent("on"+e,o.splice(n,1)[0][3])},e[s]=t[s]=n[s]=function(e){return this.fireEvent("on"+e.type,e)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[]);
 /* =========================================================================================================== */


/* ==== classList.polyfill.js" ================================ *
 * ==== Добавление поддержки для IE 8- методов "classList" ==== *
 * ============================================================ */
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};
/* ============================================================ */


/* ==== Решение "getComputedStyle.polyfill.js" ====================== *
 * ==== Добавление поддержки для IE 8- метода "getComputedStyle" ==== *
 * ================================================================== */
if (!window.getComputedStyle) { window.getComputedStyle = function(el, pseudo) { this.el = el; this.getPropertyValue = function(prop) { var re = /(\-([a-z]){1})/g; if (prop == 'float') prop = 'styleFloat'; if (re.test(prop)) { prop = prop.replace(re, function () { return arguments[2].toUpperCase(); }); } return el.currentStyle[prop] ? el.currentStyle[prop] : null; }; return this; }; }
/* ================================================================== */