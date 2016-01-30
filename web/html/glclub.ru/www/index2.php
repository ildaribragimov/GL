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
        <?php
            $gitPath = "http://raw.githubusercontent.com/ildaribragimov/Design_Patterns/master/www/libraries/JavaScript/";
        ?>
        <!-- Подключение полифиллов работы с массивами (объяктами) -->
        <script defer src="<?php echo $gitPath."prototypesExt.js";?>" type="text/javascript"></script>
        <!-- Подключение готового решения "Блокировка прокрутки страницы" -->
        <script defer src="<?php echo $gitPath."Actions/disableScroll/standart/disableScroll.min.js";?>" type="text/javascript"></script>
        <!-- Подключние готового решения "Плавная прокрутка до якоря" -->
         <script defer src="<?php echo $gitPath."Actions/scrollingToAnchor/standart/scrollingToAnchor.js";?>" type="text/javascript"></script>
        <!-- Подключение поддержки метода "classList" для браузера IE 9 -->
        <script defer src="<?php echo $gitPath."Browsers_Supports/IE9-/classList/object.classList.min.js";?>" type="text/javascript"></script>
        <!-- Подключение полифилла "getIndex" для получения обеспечения работы полифилла поиска родителя -->
        <script defer src="<?php echo $gitPath."Prop%26Meth_Extensions/object.getIndex/Object.getIndex.polyfill.min.js";?>" type="text/javascript"></script>
        <!-- Подключание полифилла "Поиск родителя по селектору" -->
        <script defer src="<?php echo $gitPath."Prop%26Meth_Extensions/object.parent/Object.parent.polyfill.min.js";?>" type="text/javascript"></script>
        
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
				// Вставка секции "Забронировать номер"
				include "includes/reserveRoom.php";
                // Вставка секции "Отправить пиьмо"
				include "includes/sendMail.php";
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