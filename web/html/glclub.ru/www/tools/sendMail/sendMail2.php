<?php
	/**
	 * Скрипт отправки писем сайта
	 */
	 
	/**
	 * Объявление переменных:
	 *
	 * $userName (тип: string) - Имя отправителя
	 * $userEmail (тип: string) - E-mail оправителя
	 * $userMessage (тип: string) - Текст сообщения отправителя
	 *
	 * $to (тип: string) - Получатель письма. Адреса нескольких получателей должны быть разделены ",". Например:
	 * - user@example.com
	 * - user@example.com, anotheruser@example.com
	 * - User <user@example.com>
	 * - User <user@example.com>, Another User <anotheruser@example.com>
	 * $subject (тип: string) - Тема отправляемого письма.
	 * $message (тип: string) - Отправляемое сообщение.
	 */
	$userName = $_POST['userName'];
	$userEmail = $_POST['userEmail'];
	$userMessage = $_POST['userMessage'];
	$to = 'iibragimov84@gmail.com, inf-majesty@yandex.ru, rennesance_earth@mail.ru';
	$subject = 'Письмо с сайта "GL"';
	$message = null;

	// Проверка пользовательских данных, переданных формой

	/*
	function checkData($_POST){
		
	}*/
	$access = (!isset($userName)) ? false : true;

	/**
	 * Генерация данных для отправки письма
	 */
	 
	 
	$subject = '=?utf-8?b?'.base64_encode($subject).'?=';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<h1>Здравстувйте, уважаемый управляющий клуба!</h1>
				<table>
					<tr>
						<td>Посетитель по имени <b>'.$userName.'</b> написал вам сообщение:</td>
					</tr>
					<tr>
						<td><q>'.$userMessage.'</q></td>
					</tr>
					<tr>
						<td>Сообщение было написано '.strftime("%d.%m.%Y в %H:%M").'</td>
					</tr>
				</table>
			</body>
		</html>';
	
	
	//$message = '<h1>Здравстувйте, уважаемый управляющий клуба!</h1>';
	//$message .= '<p>Посетитель по имени <b>'.$userName.'</b> написал вам сообщение:<br><br> <q>'.$userMessage.'</q>';
	//$message .= '<p>Сообщение было написано '.date("d.m.Y H:i").'</p>';
	//$message .= '<p>Сообщение было написано '.strftime("%d.%m.%Y в %H:%M").'</p>';
	//$headers  = 'MIME-Version: 1.0 \r\n';
	$headers = "Content-type: text/html; charset=utf-8 \r\n ";
	$headers .= "From: <robot@glclub.ru> \r\n ";
	$headers .= "Reply-To: =?utf-8?B?".base64_encode($userName)."?= <".$userEmail.">";


	/**
	 * Проверка состояния отправки
	 */
	if ($access) {
		if (mail($to, $subject, $message)) {
			$status = 'Ваше письмо отправленно!';
		} else {
			$status = 'Письмо не отправлено! Попробуйте еще раз!';
		}
	}
?>
<!DOCTYPE html>
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
	</head>
    <body>
		<?php
			/**
			 * Вывод резульата оправки письма с сайта
			 */
			echo $status;
			/*
			echo '<pre>';
			print_r($_POST);
			echo '</pre>';
			*/
		?>
		<form id="sendMail" name="sendMail" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="userName" placeholder="Имя" type="text" required="required" >
			</div>
			<div>
				<input name="userEmail" placeholder="E-mail" type="text" required="required" >
			</div>
			<div>
				<textarea name="userMessage" placeholder="Напишите сообщение здесь..." rows="3" required="required" ></textarea>
			</div>
			<div>
				<button class="rounded">Отправить</button>
			</div>
		</form>
	</body>
</html>