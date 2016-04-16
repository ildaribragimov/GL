<?php
// Объявление перменной пути к корневой директории сайта
$_root = $_SERVER['DOCUMENT_ROOT']."/";
// Имя генерируемого файла JS-скрипта
$_filename = "scripts.js";
// Путь до генерируемого файла JS-скрипта
$_filePath = "template/js/";

// Подключение файла опций загрузки
include_once $_root."config.php";

function getJSFilesContent($path, $files) {
    $fileContent = '// Явное указание на режим строгого соответствия современному стандарту
"use strict";
// Исполнение скрипта при готовности DOM-структуры документа
document.addEventListener("DOMContentLoaded", function() {';
    
    foreach ($files as $value) {
        // получает содержимое файла в строку
        $file = $path.$value;
        $handle = fopen($file, "r");
        $fileContent .= str_replace('"use strict";', '', fread($handle, filesize($file)) );
        fclose($handle);
    }
    $fileContent .= '});';
    
    return $fileContent;
}

function getJSFileContent($file) {
    // Проверяем наличие указанного файла
    if (file_exists($file)) {
        // Получаем содержимое файла в виде строки
        return file_get_contents($file);
    }
    return false;
}

function compareJSVersions($ver1, $ver2) {
    return md5($ver1) == md5($ver2);
}

if ( !file_exists($_root.$_filePath.$_filename) || !$config["cacheEnable"] ) {
    $_NewFileContent = getJSFilesContent($_root, $config["scripts"]);
    if ( !compareJSVersions(getJSFileContent($_root.$_filePath.$_filename), $_NewFileContent) ) {
        // открываем файл, если файл не существует, делается попытка создать его
        $file = fopen($_root.$_filePath.$_filename, "w");
        // записываем в файл текст
        fwrite($file, $_NewFileContent);
        // закрываем файл
        fclose($file);        
    }
}

echo '<script defer src="'.$_filePath.$_filename.'" type="text/javascript"></script>';
?>
