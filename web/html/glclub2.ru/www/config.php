<?php 
$config["cacheEnable"] = false;
/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$config["styles"] = array(
    //0 => "/library/css/normalize.css",

    "/template/normalize/html/html.css",
    "/template/template/html/html.css",

    "/template/normalize/body/body.css",
    "/template/standart/body/body.css",
    "/template/template/body/body.css",
    
    "/template/normalize/a/a.css",
    "/template/template/p/p.css",
    "/template/standart/p/__link/p__link.css",
    "/template/template/p/__link/p__link.css",
    "/template/normalize/hr/hr.css",
    
    "/template/standart/collumns/collumns.css",
    "/template/standart/collumns/__col/collumns__col.css",
    "/template/template/collumns/__col/collumns__col.css",
    
    "/template/normalize/header/header.css",
    
    "/template/standart/icon/icon.css",
    "/template/standart/icon/_size/icon_size.css",

    "/template/template/icon/icon.css",
    "/template/template/icon/_cash/icon_cash.css",
    "/template/template/icon/_comment/icon_comment.css",
    "/template/template/icon/_envelope/icon_envelope.css",
    "/template/template/icon/_info/icon_info.css",
    "/template/template/icon/_map/icon_map.css",
    "/template/template/icon/_map-point/icon_map-point.css",
    "/template/template/icon/_phone/icon_phone.css",
    "/template/template/icon/_plane/icon_plane.css",
    "/template/template/icon/_quotes/icon_quotes.css",

    "/template/standart/page-wrapper/page-wrapper.css",
    "/template/template/page-wrapper/page-wrapper.css",

    "/template/normalize/section/section.css",
    "/template/standart/section/section.css",
    "/template/template/section/section.css",
    "/template/standart/section/_no-padding/section_no-padding.css",
    "/template/standart/section/_background/section_background_image.css",
    "/template/theme/section/_color-theme/section_color-theme.css",

    "/template/template/section/__wrapper/section__wrapper.css",
    "/template/standart/section/__content/section__content.css",
    "/template/template/section/__content/section__content.css",
    "/template/standart/section/__wrapper/_no-margin/section__wrapper_no-margin.css",

    "/template/standart/header/__wrapper/header__wrapper.css",
    "/template/standart/content/__wrapper/content__wrapper.css",
    
    "/template/template/h/h.css",
    "/template/template/h/_lev/_lev.css",

    "/template/standart/separator/separator.css",
    "/template/template/separator/separator.css",
    "/template/standart/separator/_align/separator_align.css",
    "/template/standart/separator/__wrapper/separator__wrapper.css",
    "/template/standart/separator/__content/separator__content.css",
    "/template/standart/separator/__line/separator__line.css",
    "/template/template/separator/__line/separator__line.css",
    "/template/theme/separator/__line/separator__line.css",
    "/template/template/separator/__icon/separator__icon.css",
    "/template/template/header/__separator/header__separator.css",

    "/template/standart/controls/_align/controls_align.css",
    "/template/standart/controls/__wrapper/controls__wrapper.css",
    "/template/standart/controls/__content/controls__content.css",
    
    "/template/template/phone-number/phone-number.css",
    "/template/standart/phone-number/__link/phone-number__link.css",
    "/template/template/phone-number/__link/phone-number__link.css",
    
    "/template/template/section/_about/section_about.css",

    "/template/template/map/__content/map__content.css",

    "/library/css/plugin.popUp.css",
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