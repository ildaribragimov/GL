<?php 
/**
 * Описание шаблона вывода карты Google
 */
?>
<script src="http://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
<script type="text/javascript">
    DG.then(function () {
        var map;
        // Создание объекта карты
        map = DG.map('2GisMap', {
            center: [55.731273, 52.371354], // Назначаем центр карты
            zoom: 16, // Устанавливаем масштаб карты по умолчанию
            minZoom: 11, // Устанавливаем минимальный масштаб карты
            maxZoom: 18, // Устанавливаем максимальный масштаб карты
            geoclicker:true, // Всключенеи геокликера (всплывающая информация об обэекте при клике по нему)
            showPhotos:false, // Отключение вывода фотографий в балуне
            showBooklet:false // Отключение вывода ссылок на буклеты в балуне
        });

        // Добавление метки на карту
        DG.marker([55.731273, 52.371354]).addTo(map)
            // Добавление балуна на карту
            .bindPopup('<div class="dg-popup__header-title">Банный комплекс "GL"</div>', {minWidth: 250} );
    });
</script>
<div id="2GisMap" class="map-content"></div>