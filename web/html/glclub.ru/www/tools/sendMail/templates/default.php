<?php
/**
 * Шаблон стандартного E-mail письма
 */
?>

<html>
	<head>
		<title><?php echo $data['subject']; ?></title>
	</head>
	<body>
		<h1>Здравстувйте, уважаемый управляющий клуба!</h1>
		<table>
			<tr>
				<td>Посетитель по имени <b><?php echo $data["userName"]["value"]; ?></b> написал вам сообщение:</td>
			</tr>
			<tr>
				<td><q><?php echo $data["userMessage"]["value"]; ?></q></td>
			</tr>
			<tr>
				<td>Сообщение было написано <?php echo strftime("%d.%m.%Y в %H:%M"); ?></td>
			</tr>
		</table>
	</body>
</html>