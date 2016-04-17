<?php 
/**
 * Описание шаблона вывода секции "Карта проезда"
 */
?>

<section id="map" class="map section section_map section_theme_beige">
	<div class="section__wrapper">
		<!-- Содержимое секции - Начало -->
		<div class="section__content">
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