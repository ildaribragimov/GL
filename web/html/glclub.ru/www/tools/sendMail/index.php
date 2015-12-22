<?php
// Подключение бтблиотеки "SendMail", отправляющей письмо с сайта
include "sendMail.php";
?>

<!DOCTYPE html>
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
		<script defer src="js/jquery.document.ready.js"></script>
		<style>
			.captchaCheck {
				position:absolute;
				top:-10000px;
				display:none;
			}
		</style>
		<!--
        <script defer src="js/formsFieldsValidate.js"></script>
        -->
	</head>
    <body>
		<?php
        // Уничтожении переменной "$userData", если она есть
		unset($userData);
        // Если массив переданных формой пользовательских данных не пустой
        // И Если этот массив содержит элемент с ключом "sendMail"
		if ( !empty($_POST) && $_POST['submit'] == 'sendMail' ) {
			// Создание экземпляра класса "Email"
			$sendMail = new Email();
            // Передача индивидеальных параметров формы "Отправить письмо"
            $sendMail->options = array(
                'subject' => 'Письмо с сайта "GL"'
            );                
			// Отправка письма и получение результата отправки
			$result = $sendMail->sendMail();
            // Получение массива системных сообщений
            $resultMsg = $result['result'];
            // Получение массива пользовательских данных
            $userData = $result['userData'];
			// Если операция отправки письма прошла успешно
			if ( $resultMsg['type'] == 'success' ) {
                // Уничтожении переменной "$userData", если она есть
                unset($userData);
			}
			// Вывод результирующего сообщения
			echo '<pre>';
			print_r($resultMsg);
			echo '</pre>';
		}
		?>
		<form name="sendMail" id="sendMail" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="name" placeholder="Имя" type="text" pattern="^[А-Яа-яЁё\s]+$" required="required" value="<?php echo $userData['name']; ?>">
			</div>
			<div>
				<input name="email" placeholder="E-mail" type="email" required="required" value="<?php echo $userData['email']; ?>">
			</div>
			<div>
				<input name="phone" placeholder="+7 (xxx) xxx-xx-xx" type="tel" pattern="+7 ([0-9]{3,6}) [0-9]{1,3}-[0-9]{2}-[0-9]{2}" required="required" value="<?php echo $userData['phone']; ?>">
			</div>
			<div>
				<textarea name="message" placeholder="Напишите сообщение здесь..." rows="3" required="required" ><?php echo $userData['message']; ?></textarea>
			</div>
			<div class="captchaCheck">
				<img class="captchaImg" src="" alt="" title="" >
				<input name="captcha" class="captchaCode" placeholder="Введите код здесь..." type="text" required="required" >
			</div>
			<div>
				<button name="submit" class="rounded" value="sendMail">Отправить</button>
			</div>
		</form>

		<?php
        // Уничтожении переменной "$userData", если она есть
		unset($userData);
        // Если массив переданных формой пользовательских данных не пустой
        // И Если этот массив содержит элемент с ключом "sendReview"
		if ( !empty($_POST) && $_POST['submit'] == 'sendReview' ) {
			// Создание экземпляра класса "Email"
			$sendReview = new Email();
            // Передача индивидеальных параметров формы "Отправить письмо"
            $sendReview->options = array(
                'subject' => 'Новый отзыв от посетителя сайта "GL"'
            );
			// Отправка письма и получение результата отправки
			$result = $sendReview->sendMail();
            // Получение массива системных сообщений
            $resultMsg = $result['result'];
            // Получение массива пользовательских данных
            $userData = $result['userData'];
			// Если операция отправки письма прошла успешно
			if ( $resultMsg['type'] == 'success' ) {
                // Уничтожении переменной "$userData", если она есть
                unset($userData);
			}
			// Вывод результирующего сообщения
			echo '<pre>';
			print_r($resultMsg);
			echo '</pre>';
		}
		?>
		<form name="sendReview" id="sendReview" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="name" placeholder="Имя" type="text" pattern="^[А-Яа-яЁё\s]+$" required="required" value="<?php echo $userData['name']; ?>">
			</div>
			<div>
				<select name="roomNuber" multiple>
					<option disabled value="0">Номера, в которых отдыхали...</option>
					<option value="1">Нью Йорк</option>
					<option value="2">Япония</option>
				</select>
			</div>
			<div>
				<textarea name="message" placeholder="Напишите сообщение здесь..." rows="3" required="required" ><?php echo $userData['message']; ?></textarea>
			</div>
			<div class="captchaCheck">
				<img class="captchaImg" src="" alt="" title="" >
				<input name="captcha" class="captchaCode" placeholder="Введите код здесь..." type="text" required="required" >
			</div>
			<div>
				<button name="submit" class="rounded" value="sendReview">Отправить</button>
			</div>
		</form>
	</body>
</html>