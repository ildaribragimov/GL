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