<?php 
$config["cacheEnable"] = false;
/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$config["styles"] = (object)array(
    0 => "/library/css/normalize.css",

    1 => "/library/css/plugin.popUp.css",
);
// Порядок загрузки JS-скриптов
$config["scripts"] = array(
    0 => "/library/js/Function.in_array.min.js",
    1 => "/library/js/Function.array_diff.min.js",
    2 => "/library/js/Function.getIndex.min.js",
    3 => "/library/js/Function.parent.min.js",

    4 => "/library/js/object.classList.min.js",
    5 => "/library/js/setSizeFrom.min.js",
    6 => "/library/js/disableScroll.min.js",
    7 => "/library/js/scrollingToAnchor.min.js",

    8 => "/library/js/plugin.popUp.js",
);
// Порядок загрузки файлов секций
$config["sections"] = (object)array(
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