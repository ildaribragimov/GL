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
		<script defer src="js/formsFieldsValidate.js" type="text/javascript"></script>
	</head>
    <body>

		<?php
		if ( !empty($_POST) && isset($_POST['sendMail']) ) {
			// Получение данных пользователя и генерация массива данных для отправки письма
			$data = array(
				'userName' => array(
					'type' => 'name',
					'label' => 'Имя пользователя',
					'value' => htmlspecialchars($_POST['name'])
				),
				'userEmail' => array(
					'type' => 'email',
					'label' => 'E-mail пользователя',
					'value' => $_POST['email']
				),
				'userPhone' => array(
					'type' => 'phone',
					'label' => 'Телефон пользователя',
					'value' => $_POST['phone']
				),
				'userMessage' => array(
					'type' => 'text',
					'label' => 'Сообщение пользователя',
					'value' => htmlspecialchars($_POST['message'])
				),
				'captchaCode' => array(
					'type' => 'captcha',
					'label' => 'Код captcha',
					'value' => htmlspecialchars($_POST['captcha'])
				)
			);

			// Создание экземпляра класса "Email"
			$sendMail = new Email();
			// Передача индивидеальных параметров формы
			$sendMail->options = array(
				'subject' => 'Письмо с сайта "GL"'
			);
			// Отправка письма и получение результирующего сообщения
			$resultMessage = $sendMail->sendMail($data);
			
			// Условие на соответствие состояния отправки письма успешному результату
			if ( $resultMessage['type'] == 'success' ) {
				// Перебор элементов массива
				foreach ($data as $key => &$value) {
					// Удаление (Сброс) массива переданных значений
					$value['value'] = '';
				}
				// Уничтожении ссылки на последний элемент массива переданых данных
				unset($value);
			}
			// Вывод результирующего сообщения
			echo '<pre>';
			print_r($resultMessage);
			echo '<pre>';
		}
		?>

		<form name="sendMail" id="sendMail" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="name" placeholder="Имя" type="text" pattern="^[А-Яа-яЁё\s]+$" required="required" value="<?php echo $data['name']['value']; ?>">
			</div>
			<div>
				<input name="email" placeholder="E-mail" type="email" required="required" value="<?php echo $data['email']['value']; ?>">
			</div>
			<div>
				<input name="phone" placeholder="+7 (xxx) xxx-xx-xx" type="tel" pattern="+7 ([0-9]{3,6}) [0-9]{1,3}-[0-9]{2}-[0-9]{2}" required="required" value="<?php echo $data['phone']['value']; ?>">
			</div>
			<div>
				<textarea name="message" placeholder="Напишите сообщение здесь..." rows="3" required="required" ><?php echo $data['message']['value']; ?></textarea>
			</div>
			<div class="captchaCheck">
				<img class="captchaImg" src="" alt="" title="" >
				<input name="captcha" class="captchaCode" placeholder="Введите код здесь..." type="text" required="required" >
			</div>
			<div>
				<button name="sendMail" class="rounded">Отправить</button>
			</div>
		</form>
		<form name="sendReview" id="sendReview" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="name" placeholder="Имя" type="text" pattern="^[А-Яа-яЁё\s]+$" required="required" value="<?php echo $data['name']['value']; ?>">
			</div>
			<div>
				<select name="roomNuber" multiple>
					<option disabled value="0">Номера, в которых отдыхали...</option>
					<option value="1">Нью Йорк</option>
					<option value="2">Япония</option>
				</select>
			</div>
			<div>
				<textarea name="message" placeholder="Напишите сообщение здесь..." rows="3" required="required" ><?php echo $data['message']['value']; ?></textarea>
			</div>
			<div class="captchaCheck">
				<img class="captchaImg" src="" alt="" title="" >
				<input name="captcha" class="captchaCode" placeholder="Введите код здесь..." type="text" required="required" >
			</div>
			<div>
				<button name="sendReview" class="rounded">Отправить</button>
			</div>
		</form>

	</body>
</html>