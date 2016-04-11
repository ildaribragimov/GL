<?php 
/**
 * Описание шаблона вывода секции "Карта проезда"
 */
?>

<section id="map" class="section_color-theme_beige section_no-padding">
	<div class="section-wrapper section-wrapper_no-margin">
		<!-- Содержимое секции - Начало -->
		<div class="section__section-content">
            <?php
                // Вставка шаблона вывода карты Google
                //include "includes/googleMap.php";
                // Вставка шаблона вывода карты 2Gis
                include "includes/2GisMap.php";
            ?>
		</div>
		<!-- Содержимое секции - Конец -->
	</div>
</section>