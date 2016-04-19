<?php 
// Путь к корневой директории сайта
$config["root"] = $_SERVER['DOCUMENT_ROOT'];

// Параметр включения/выключения кэша
$config["cacheEnable"] = false;

/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$config["css"] = array(
    "/template/normalize/normalize.css",
    "/template/normalize/html/html.css",
    "/template/normalize/body/body.css",
    "/template/normalize/nav/nav.css",
    "/template/normalize/menu/menu.css",
    "/template/normalize/a/a.css",
    "/template/normalize/hr/hr.css",
    "/template/normalize/ul/ul.css",
    "/template/normalize/button/button.css",
    "/template/normalize/header/header.css",
    "/template/normalize/section/section.css",

    "/template/standart/standart.css",
    "/template/standart/body/body.css",
    "/template/standart/link/link.css",
    "/template/standart/link/_block/link_block.css",
    "/template/standart/link/_inverted/link_inverted.css",    
    "/template/standart/list/list.css",
    "/template/standart/button/button.css",
    "/template/standart/button/_rounded/button_rounded.css",
    "/template/standart/button/__title/button__title.css",
    "/template/standart/button/__icon/button__icon.css",
    "/template/standart/collumns/collumns.css",
    "/template/standart/collumns/__col/collumns__col.css",
    "/template/standart/icon/icon.css",
    "/template/standart/icon/_size/icon_size.css",
    "/template/standart/switchers/_radio-buttons/switchers_radio-buttons.css",
    "/template/standart/radio-buttons/_horiz/radio-buttons_horiz.css",
    "/template/standart/radio-buttons/__item/radio-buttons__item.css",
    "/template/standart/separator/separator.css",
    "/template/standart/separator/__wrapper/separator__wrapper.css",
    "/template/standart/separator/__content/separator__content.css",
    "/template/standart/separator/__line/separator__line.css",
    "/template/standart/page/__wrapper/page__wrapper.css",
    "/template/standart/section/section.css",
    "/template/standart/section/__wrapper/section__wrapper.css",
    "/template/standart/section/__header/section__header.css",
    "/template/standart/section/__content/section__content.css",
    "/template/standart/header/__wrapper/header__wrapper.css",
    "/template/standart/content/__wrapper/content__wrapper.css",
    "/template/standart/price/__cost/price__cost.css",
    "/template/standart/price/__currency/price__currency.css",
    "/template/standart/controls/__wrapper/controls__wrapper.css",
    "/template/standart/controls/__content/controls__content.css",
    "/template/standart/reviews/__wrapper/reviews__wrapper.css",
    "/template/standart/user/__photo/user__photo.css",
    "/template/standart/user/__photo/_size/user__photo_size.css",
    "/template/standart/top-pannel/top-pannel.css",
    "/template/standart/top-pannel/__wrapper/top-pannel__wrapper.css",
    "/template/standart/top-pannel/__logo/top-pannel__logo.css",
    "/template/standart/top-pannel/__menu/top-pannel__menu.css",
    "/template/standart/top-pannel/__burger-button/top-pannel__burger-button.css",
    "/template/standart/burger-button/__icon/burger-button__icon.css",
    "/template/standart/menu/menu.css",
    "/template/standart/menu/_main/menu_main.css",
    "/template/standart/menu/__items/menu__items.css",
    "/template/standart/menu/__item/menu__item.css",
    "/template/standart/popup/popup.css",
    "/template/standart/popup/_open/popup_open.css",
    "/template/standart/popup/__wrapper/popup__wrapper.css",
    "/template/standart/popup/__content/popup__content.css",
    "/template/standart/popup/__window-controls/popup__window-controls.css",

    "/template/template/template.css",
    "/template/css/fonts.css",
    "/template/template/html/html.css",
    "/template/template/body/body.css",
    "/template/template/p/p.css",
    "/template/template/p/__link/p__link.css",
    "/template/template/list/list.css",
    "/template/template/list/__item/list__item.css",
    "/template/template/footnote/__mark/footnote__mark.css",
    "/template/template/collumns/__col/collumns__col.css",
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
    "/template/template/icon/_radio-button/icon_radio-button.css",
    "/template/template/icon/_arrow-left/icon_arrow-left.css",
    "/template/template/icon/_logo-big/icon_logo-big.css",
    "/template/template/icon/_logo-medium/icon_logo-medium.css",
    "/template/template/icon/_social-vk/icon_social-vk.css",
    "/template/template/icon/_arrow-right/icon_arrow-right.css",
    "/template/template/icon/_close-button/icon_close-button.css",
    "/template/template/switchers/_arrows/switchers_arrows.css",
    "/template/template/switchers/_radio-buttons/switchers_radio-buttons.css",
    "/template/template/switchers/__wrapper/switchers__wrapper.css",
    "/template/template/switchers/__content/switchers__content.css",
    "/template/template/arrow/arrow.css",
    "/template/template/arrow/_left/arrow_left.css",
    "/template/template/arrow/_right/arrow_right.css",
    "/template/template/arrow/__wrapper/arrow__wrapper.css",
    "/template/template/radio-buttons/radio-buttons.css",
    "/template/template/radio-buttons/__item/radio-buttons__item.css",
    "/template/template/separator/separator.css",
    "/template/template/separator/__wrapper/separator__wrapper.css",
    "/template/template/separator/__content/separator__content.css",
    "/template/template/separator/__line/separator__line.css",
    "/template/template/separator/__icon/separator__icon.css",
    "/template/template/header/__separator/header__separator.css",
    "/template/template/page/__wrapper/page__wrapper.css",
    "/template/template/section/section.css",
    "/template/template/section/__wrapper/section__wrapper.css",
    "/template/template/section/__content/section__content.css",
    "/template/template/section/__separator/section__separator.css",
    "/template/template/content/__wrapper/content__wrapper.css",
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
    "/template/template/logo/_big/logo_big.css",
    "/template/template/logo/__wrapper/logo__wrapper.css",
    "/template/template/h/h.css",
    "/template/template/h/_lev/h_lev.css",
    "/template/template/price-card/price-card.css",
    "/template/template/price-card/__wrapper/price-card__wrapper.css",
    "/template/template/price-card/__content/price-card__content.css",
    "/template/template/price-card/__h/price-card__h.css",
    "/template/template/price-card/__options/price-card__options.css",
    "/template/template/price/price.css",
    "/template/template/price/__cost/price__cost.css",    
    "/template/template/price/__currency/price__currency.css",
    "/template/template/controls/_feedback/controls_feedback.css",
    "/template/template/controls/__wrapper/controls__wrapper.css",
    "/template/template/controls/__content/controls__content.css",
    "/template/template/reviews/reviews.css",
    "/template/template/reviews/__wrapper/reviews__wrapper.css",
    "/template/template/reviews/__item/reviews__item.css",
    "/template/template/reviews/__item/_active/reviews__item_active.css",
    "/template/template/user/__photo/user__photo.css",
    "/template/template/user/__photo/_size/user__photo_size.css",
    "/template/template/user/__name/user__name.css",
    "/template/template/phone-number/phone-number.css",
    "/template/template/phone-number/__link/phone-number__link.css",
    "/template/template/section/_about/section_about.css",
    "/template/template/section/_rooms/section_rooms.css",
    "/template/template/section/_map/section_map.css",
    "/template/template/map/__content/map__content.css",
    "/template/template/top-pannel/top-pannel.css",
    "/template/template/top-pannel/__wrapper/top-pannel__wrapper.css",
    "/template/template/top-pannel/__logo/top-pannel__logo.css",
    "/template/template/top-pannel/__link/top-pannel__link.css",    
    "/template/template/top-pannel/__burger-button/top-pannel__burger-button.css",    
    "/template/template/burger-button/__wrapper/burger-button__wrapper.css",
    "/template/template/menu/_social-links/menu_social-links.css",
    "/template/template/menu/_main/menu_main.css",
    "/template/template/menu/__items/menu__items.css",
    "/template/template/menu/__item/menu__item.css",
    "/template/template/menu/__link/menu__link.css",
    "/template/template/menu/__wrapper/menu__wrapper.css",
    "/template/template/menu/__content/menu__content.css",
    "/template/template/menu/__link/menu__link.css",
    "/template/template/popup/__window-header/popup__window-header.css",
    "/template/template/popup/__window-content/popup__window-content.css",

    "/template/theme/theme.css",
    "/template/theme/button/_theme/button_theme.css",
    "/template/theme/switchers/switchers.css",
    "/template/theme/separator/separator.css",    
    "/template/theme/separator/__line/separator__line.css",
    "/template/theme/section/_theme/section_theme.css",
);

// Порядок загрузки JS-скриптов
$config["js"] = array(
    "/library/js/Function.in_array.min.js",
    "/library/js/Function.array_diff.min.js",
    "/library/js/Function.getIndex.min.js",
    "/library/js/Function.parent.min.js",

    "/library/js/object.classList.min.js",
    "/library/js/setSizeFrom.min.js",
    "/library/js/disableScroll.min.js",
    "/library/js/scrollingToAnchor.min.js",
    "/library/js/slidePannel.min.js",

    "/template/template/top-pannel/top-pannel.js",
    "/template/template/menu/menu.js",
    "/template/template/rooms/rooms.js",
    
    //"/library/js/plugin.popUp.js",
);

// Порядок загрузки JS-пост-скриптов
$config["js-post-load"] = array(
    "/library/js/plugin.popUp.js",
    "/template/template/button/button.js"
);

// Порядок загрузки файлов секций
$config["sections"] = array(
    "rooms",
    "prices",
    "about",
    "reviews",
    "sendReview",
    "reserveRoom",
    "contacts",
    "map",
);
?>