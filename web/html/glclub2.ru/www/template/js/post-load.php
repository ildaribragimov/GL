<?php
// Имя до выходного файла
$outputFileName = "post-load.js";
// Путь до выходного файла
$outputFilePath = "/template/js/";

// Подключение файла опций загрузки
include_once $_SERVER['DOCUMENT_ROOT']."/tools/collector/collector.php";

// Создание экземпляра объекта "Сборщика"
$postLoadJsBundle = new Collector("js-post-load", $config);

$initialString = '"use strict"; window.addEventListener("load", function() {';
$finalString = '});';
// Вызов метода "Создать Сборку" объекта "Сборщика"
$postLoadJsBundle->createBundle($outputFilePath, $outputFileName, $initialString, $finalString);

echo '<script defer src="'.$outputFilePath.$outputFileName.'" type="text/javascript"></script>';
?>