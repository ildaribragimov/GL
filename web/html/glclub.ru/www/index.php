<!--
Болванка шаблона страницы, на HTML5
-->

<!--
Указываем, что документ написан по спецификации HTML5
-->
<!DOCTYPE html>

<!--
Явно указываем язык основного текста содержимого страниы.
-->
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
        <!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
		<link href="template/css/normalize.css" rel="stylesheet" type="text/css">
		<link href="template/css/fonts.css" rel="stylesheet" type="text/css">
        <link href="template/css/common.css" rel="stylesheet" type="text/css">
    </head>
    <body>
		<?php
			// Вставка секции "О клубе"
			include "includes/section-about.php";
			// Вставка секции "Добавить отзыв"
			//include "includes/section-sendResponce.php";
		?>
        <!-- Подвал страницы - Начало -->
		<!--
        <footer>
			&copy; Copyright Ильдар Ибрагимов
        </footer>
		-->
        <!-- Подвал страницы - Конец -->
		<!--
		<script src="template/js/modulargrid.js" type="text/javascript"></script>
		-->
    </body>
</html>