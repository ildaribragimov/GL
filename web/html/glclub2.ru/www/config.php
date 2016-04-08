<?php 
/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$cssLibrary = (object)array(
    0 => "normalize.css",

    1 => "fonts.css",

    2 => "plugin.popUp.css",
);
// Порядок загрузки JS-скриптов
$jsLibrary = (object)array(
    0 => "Function.setSizeFrom.min.js",
    1 => "Function.in_array.min.js",
    2 => "Function.array_diff.min.js",
    3 => "Function.getIndex.min.js",
    4 => "Function.parent.min.js",

    5 => "object.classList.min.js",
    6 => "disableScroll.min.js",
    7 => "scrollingToAnchor.min.js",

    8 => "plugin.popUp.js",
    
    9 => "common.js",
);
// Порядок загрузки файлов секций
$sections = (object)array(
    0 => "rooms",
    1 => "prices",
    2 => "about",
    3 => "reviews",
    4 => "sendReview",
    5 => "reserveRoom",
    6 => "contacts",
    7 => "map",
);
?>