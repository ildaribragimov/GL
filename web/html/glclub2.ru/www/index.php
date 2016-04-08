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
        <link href="template/css/styles.php" rel="stylesheet" type="text/css">
        <script defer src="template/js/scripts.php" type="text/javascript"></script>
    </head>
    <body>
		<div id="page-wrapper">
			<?php
            include_once "template/signIn.php";
			?>
		</div>
		<?php
		?>
    </body>
</html>