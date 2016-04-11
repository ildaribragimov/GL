<?php 
/**
 * Описание шаблона вывода секции "Карта проезда"
 */
?>

<section id="map" class="-beige">
	<div class="section-wrapper">
		<!-- Содержимое секции - Начало -->
		<div class="section-content">
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