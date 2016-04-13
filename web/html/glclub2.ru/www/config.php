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
    "/template/standart/link/link.css",
    "/template/standart/link/_inverted/link_inverted.css",
    "/template/standart/link/_block/link_block.css",
    
    "/template/template/p/p.css",
    "/template/template/p/__link/p__link.css",

    "/template/normalize/hr/hr.css",
    
    "/template/normalize/ul/ul.css",

    "/template/standart/list/list.css",
    "/template/template/list/list.css",
    "/template/standart/list/__item/list__item.css",
    "/template/template/list/__item/list__item.css",
    
    "/template/template/footnote/__mark/footnote__mark.css",
    
    "/template/normalize/button/button.css",
    "/template/standart/button/button.css",
    "/template/standart/button/_rounded/button_rounded.css",
    "/template/standart/button/__title/button__title.css",
    "/template/standart/button/__icon/button__icon.css",
    "/template/theme/button/_color-theme/button_color-theme.css",

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
    "/template/template/icon/_arrow-left/icon_arrow-left.css",
    "/template/theme/icon/_arrow-left/icon_arrow-left.css",
    "/template/template/icon/_arrow-right/icon_arrow-right.css",
    "/template/theme/icon/_arrow-right/icon_arrow-right.css",

    "/template/standart/switchers/_radio-buttons/switchers_radio-buttons.css",
    "/template/template/switchers/_radio-buttons/switchers_radio-buttons.css",
    
    "/template/template/arrow/arrow.css",
    "/template/template/arrow/_left/arrow_left.css",
    "/template/template/arrow/_right/arrow_right.css",

    "/template/standart/radio-buttons/_horiz/radio-buttons_horiz.css",
    "/template/standart/radio-buttons/__item/radio-buttons__item.css",
    "/template/template/radio-buttons/__item/radio-buttons__item.css",
    "/template/theme/radio-buttons/__item/radio-buttons__item.css",
    "/template/template/radio-buttons/__item/_active/radio-buttons__item_active.css",
    "/template/theme/radio-buttons/__item/_active/radio-buttons__item_active.css",
    
    "/template/standart/separator/separator.css",
    "/template/template/separator/separator.css",
    "/template/standart/separator/__wrapper/separator__wrapper.css",
    "/template/standart/separator/__content/separator__content.css",
    "/template/standart/separator/__line/separator__line.css",
    "/template/template/separator/__line/separator__line.css",
    "/template/theme/separator/__line/separator__line.css",
    "/template/template/separator/__icon/separator__icon.css",
    "/template/template/header/__separator/header__separator.css",

    "/template/standart/page-wrapper/page-wrapper.css",
    "/template/template/page-wrapper/page-wrapper.css",

    "/template/normalize/section/section.css",
    "/template/standart/section/section.css",
    "/template/template/section/section.css",
    "/template/standart/section/_background/section_background_image.css",
    "/template/theme/section/_color-theme/section_color-theme.css",

    "/template/template/section/__wrapper/section__wrapper.css",
    "/template/standart/section/__content/section__content.css",
    "/template/template/section/__content/section__content.css",
    "/template/template/section/__separator/section__separator.css",
    
    "/template/template/rooms/rooms.css",
    "/template/template/rooms/__item/rooms__item.css",
    "/template/template/rooms/__item/_new-york/rooms__item_new-york.css",
    "/template/template/rooms/__item/_tokyo/rooms__item_tokyo.css",
    "/template/template/rooms/__item-link/rooms__item-link.css",
    "/template/template/rooms/__item-number/rooms__item-number.css",
    
    "/template/template/sticker/sticker.css",
    "/template/template/sticker/__wrapper/sticker__wrapper.css",
    
    "/template/template/progress-bar/progress-bar.css",
    "/template/template/progress-bar/__track/progress-bar__track.css",

    "/template/standart/header/__wrapper/header__wrapper.css",
    "/template/standart/content/__wrapper/content__wrapper.css",
    
    "/template/template/h/h.css",
    "/template/template/h/_lev/h_lev.css",

    "/template/template/price-card/price-card.css",
    "/template/template/price-card/__wrapper/price-card__wrapper.css",
    "/template/template/price-card/__content/price-card__content.css",
    "/template/template/price-card/__h/price-card__h.css",
    "/template/template/price-card/__options/price-card__options.css",
    
    "/template/template/price/price.css",
    "/template/standart/price/__cost/price__cost.css",
    "/template/template/price/__cost/price__cost.css",
    "/template/standart/price/__currency/price__currency.css",
    "/template/template/price/__currency/price__currency.css",
    
    "/template/standart/controls/__wrapper/controls__wrapper.css",
    "/template/standart/controls/__content/controls__content.css",
    "/template/template/controls/__content/controls__content.css",

    "/template/template/reviews/reviews.css",
    "/template/standart/reviews/__wrapper/reviews__wrapper.css",
    "/template/template/reviews/__wrapper/reviews__wrapper.css",
    "/template/template/reviews/__item/reviews__item.css",
    "/template/template/reviews/__item/_active/reviews__item_active.css",
    
    "/template/standart/user/__photo/user__photo.css",
    "/template/template/user/__photo/user__photo.css",
    "/template/standart/user/__photo/_size/user__photo_size.css",
    "/template/template/user/__photo/_size/user__photo_size.css",
    "/template/template/user/__name/user__name.css",
    
    "/template/template/phone-number/phone-number.css",
    "/template/template/phone-number/__link/phone-number__link.css",
    
    "/template/template/section/_about/section_about.css",

    "/template/template/map/__content/map__content.css",

    "/library/css/plugin.popUp.css",
    
    "/template/standart/element/_align/element_align.css",
    "/template/standart/element/_no-padding/element_no-padding.css",
    "/template/standart/element/_no-margin/element_no-margin.css",
    "/template/standart/element/__wrapper/element__wrapper.css",
    "/template/standart/element/__content/element__content.css",
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