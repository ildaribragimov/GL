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
        <link rel="icon" href="/template/img/favicon.ico" type="image/x-icon">
        <?php
            include_once "template/css/styles.php";
            include_once "template/js/scripts.php";
        ?>
    </head>
    <body>
		<div class="page-wrapper">
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
				include "includes/contacts.php";
                // Вставка секции "Карта проезда"
				include "includes/map.php";
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
			//include "includes/mainMenu.php";
		?>
    </body>
</html>