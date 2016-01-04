<!--
Указываем, что документ написан по спецификации HTML5
-->
<!DOCTYPE html>

<!--
Явно указываем язык основного текста содержимого страниы.
-->
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
        <!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script defer src="template/js/prototypesExt.js" type="text/javascript"></script>

        <script defer src="template/js/helpers/object.classList.min.js" type="text/javascript"></script>
        <script defer src="template/js/helpers/Object.getIndex.polyfill.min.js" type="text/javascript"></script>
        <script defer src="template/js/helpers/Object.parent.polyfill.min.js" type="text/javascript"></script>
        
		<link href="template/css/normalize.css" rel="stylesheet" type="text/css">
		<link href="template/css/fonts.css" rel="stylesheet" type="text/css">
        <link href="template/css/common.css" rel="stylesheet" type="text/css">
        
		<script defer src="template/js/common.js" type="text/javascript"></script>		
    </head>
    <body>
		<div id="page-wrapper">
			<?php
				// Вставка секции "Номера"
				include "includes/rooms.php";
				// Вставка секции "Цены"
				include "includes/prices.php";
				// Вставка секции "О клубе"
				include "includes/about.php";
				// Вставка секции "Отзывы"
				include "includes/reviews.php";
				// Вставка секции "Добавить отзыв"
				include "includes/sendReview.php";
				// Вставка секции "Контакты"
				include "includes/contacts.php";
			?>
			<!-- Подвал страницы - Начало -->
			<!--
			<footer>
				&copy; Copyright Ильдар Ибрагимов
			</footer>
			-->
			<!-- Подвал страницы - Конец -->
		</div>
		<?php
			// Вставка верхней пенели навигации
			include "includes/topPannel.php";
			// Вставка главного меню
			include "includes/mainMenu.php";
			// Вставка всплывающего окна "Google-карта"
			include "includes/popupWindow-map.php";
		?>
		<!--
		<script src="template/js/modulargrid.js" type="text/javascript"></script>
		-->
    </body>
</html>