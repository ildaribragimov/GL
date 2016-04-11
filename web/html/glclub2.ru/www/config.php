<?php 
$config["cacheEnable"] = false;
/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$config["styles"] = (object)array(
    //0 => "/library/css/normalize.css",

    1 => "/template/normalize/html/html.css",
    2 => "/template/template/html/html.css",

    3 => "/template/normalize/body/body.css",
    4 => "/template/standart/body/body.css",
    5 => "/template/template/body/body.css",
    
    6 => "/template/normalize/a/a.css",
    
    7 => "/template/normalize/header/header.css",

    8 => "/template/standart/page-wrapper/page-wrapper.css",
    9 => "/template/template/page-wrapper/page-wrapper.css",

    10 => "/template/normalize/section/section.css",
    11 => "/template/standart/section/section.css",
    12 => "/template/template/section/section.css",
    13 => "/template/standart/section/_no-padding/section_no-padding.css",
    14 => "/template/standart/section/_background/section_background_image.css",
    15 => "/template/theme/section/_color-theme/section_color-theme.css",

    16 => "/template/template/section/__wrapper/section__wrapper.css",
    17 => "/template/standart/section/__content/section__content.css",
    18 => "/template/standart/section/__wrapper/_no-margin/section__wrapper_no-margin.css",

    19 => "/template/template/h/h.css",
    20 => "/template/template/h/_lev/_lev_2.css",
    
    21 => "/template/template/section-about/section-about.css",
    22 => "/template/template/map/__content/map__content.css",
    
    23 => "/library/css/plugin.popUp.css",
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