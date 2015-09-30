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
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
        <!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <link href="template/css/common.css" rel="stylesheet" type="text/css">
    </head>
    <body>
		<?php
			include "includes/section-sendResponce.php";
		?>
        <!-- Подвал страницы - Начало -->
        <footer>
			&copy; Copyright Ильдар Ибрагимов
        </footer>
        <!-- Подвал страницы - Конец -->
    </body>
</html>