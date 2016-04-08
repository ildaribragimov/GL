<?php 
/**
 * Описание шаблона вывода карты Google
 */
?>

<script src="http://maps.api.2gis.ru/2.0/loader.js?pkg=full&version=v2.2.2"></script>
<script type="text/javascript">
    // Инициализация карты 2Gis
    DG.then(function () {
        /**
         * Объявление переменных:
         *
         * * latlng (тип: object) - Географические координаты месторасположения компании (ораганизации)
         * * map (тип: object) - Объект карты 2Gis
         * * baloon (тип: object) - Объект балуна
         * * marker (тип: object) - Объект маркера
         */
        var latlng = DG.latLng(55.731273, 52.371354),
            map = null,
            baloon = null,
            marker = null;

        // Создание экземпляра объекта карты
        map = DG.map('2GisMap', {
            center: latlng, // Центр карты
            zoom: 16, // Масштаб карты по умолчанию
            minZoom: 11, // Минимальный масштаб карты
            maxZoom: 18, // Максимальный масштаб карты
            geoclicker:true, // Всключение геокликера (всплывающая информация об обэекте при клике по нему)
            showPhotos:false, // Отключение вывода фотографий в балуне
            showBooklet:false // Отключение вывода ссылок на буклеты в балуне
        });

        // Создание всплывающего балуна
        baloon = DG.popup({
            minWidth: 250 // Минимальная ширина балуна
        })
        .setLatLng(latlng) // Координаты точки всплытия балуна
        .setHeaderContent('<div class="dg-popup__header-title">GL, Оздоровительный комплекс</div>') // Заголовок балуна
        .setContent('<address class="dg-firm-card__address dg-firm-card__icon">37-й комплекс, 4<span class="dg-firm-card__comment">— цокольный этаж</span></address><div class="dg-firm-card__phone dg-firm-card__icon"><span class="dg-firm-card__phone-num">+7‒963‒122‒55‒08</span></div><div class="dg-firm-card__schedule dg-schedule dg-schedule_open_true dg-schedule_works-everyday_true"><div class="dg-schedule__today"><div class="dg-schedule__today-inner">Круглосуточно</div></div></div>') // Содержимое балуна
        .setFooterContent('<footer class="dg-popup__footer-buttons"><div class="dg-popup__footer-button-wrapper"><a class="dg-popup__button_name_goto dg-popup__footer-button dg-popup__footer-icon-button" href="http://2gis.ru/nabchelny/center/52.371343374252326,55.73171969430898/zoom/16/routeTab/rsType/bus/to/52.3720407485962,55.731393475114416╎37-%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%2C%204" target="_blank">Проехать сюда</a></div></footer>') // footer балуна
        ;
        
        // Создание метки на карте
        marker = DG.marker([55.731273, 52.371354])
            // Добавление метки на карту
            .addTo(map)
            // Добавление балуна на карту
            .bindPopup(baloon);
    });
</script>
<div id="2GisMap" class="map-content"></div>