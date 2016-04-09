<?php
// Объявление перменной пути к корневой директории сайта
$_root = $_SERVER['DOCUMENT_ROOT'];
// Имя генерируемого файла JS-скрипта
$_filename = "styles.css";
// Путь до генерируемого файла JS-скрипта
$_filePath = "/template/css/";

// Подключение файла опций загрузки
include_once $_root."/config.php";

function getCSSFilesContent($path, $files) {
    $fileContent = '';
    
    foreach ($files as $value) {
        // получает содержимое файла в строку
        $file = $path.$value;
        $handle = fopen($file, "r");
        $fileContent .= fread($handle, filesize($file));
        fclose($handle);
    }
    
    return $fileContent;
}

function getCSSFileContent($file) {
    // Проверяем наличие указанного файла
    if (file_exists($file)) {
        // Получаем содержимое файла в виде строки
        return file_get_contents($file);
    }
    return false;
}

function compareCSSVersions($ver1, $ver2) {
    return md5($ver1) == md5($ver2);
}

if ( !file_exists($_root.$_filePath.$_filename) || !$config["cacheEnable"] ) {
    $_NewFileContent = getCSSFilesContent($_root, $config["styles"]);
    if ( !compareCSSVersions(getCSSFileContent($_root.$_filePath.$_filename), $_NewFileContent) ) {
        // открываем файл, если файл не существует, делается попытка создать его
        $file = fopen($_root.$_filePath.$_filename, "w");
        // записываем в файл текст
        fwrite($file, $_NewFileContent);
        // закрываем файл
        fclose($file);        
    }
}

echo '<link href="'.$_filePath.$_filename.'" rel="stylesheet" type="text/css">';
?>
