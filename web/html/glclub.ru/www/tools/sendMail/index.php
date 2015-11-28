<?php
// Подключение компонента "SendMail", отправляющего письма с сайта
include "sendMail.php";
?>

<!DOCTYPE html>
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="utf-8">
        <title>Типовой шаблон страницы на HTML5 - html5.tpl</title>
		<style>
			.captchaCheck {
				position:absolute;
				top:-10000px;
				display:none;
			}
		</style>
	</head>
    <body>

		<?php
		if ( !empty($_POST) && isset($_POST['sendMail']) ) {
			// Получение данных пользователя и генерация массива данных для отправки письма
			$data = array(
				'userName' => array(
					'type' => 'name',
					'label' => 'Имя пользователя',
					'value' => htmlspecialchars($_POST['userName'])
				),
				'userEmail' => array(
					'type' => 'email',
					'label' => 'E-mail пользователя',
					'value' => $_POST['userEmail']
				),
				'userPhone' => array(
					'type' => 'phone',
					'label' => 'Телефон пользователя',
					'value' => $_POST['userPhone']
				),
				'userMessage' => array(
					'type' => 'text',
					'label' => 'Сообщение пользователя',
					'value' => htmlspecialchars($_POST['userMessage'])
				),
				'captchaCode' => array(
					'type' => 'captcha',
					'label' => 'Код captcha',
					'value' => htmlspecialchars($_POST['captchaCode'])
				)
			);

			// Создание экземпляра класса "Email"
			$sendMail = new Email();
			// Передача индивидеальных параметров формы
			$sendMail->options = array(
				'template'=>'newMail',
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

		<form id="sendMail" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
			<div>
				<input name="userName" placeholder="Имя" type="text" pattern="^[А-Яа-яЁё\s]+$" required="required" value="<?php echo $data['userName']['value']; ?>">
			</div>
			<div>
				<input name="userEmail" placeholder="E-mail" type="text" required="required" value="<?php echo $data['userEmail']['value']; ?>">
			</div>
			<div>
				<input name="userPhone" placeholder="+7 (xxx) xxx-xx-xx" type="text" pattern="+7 ([0-9]{3,6}) [0-9]{1,3}-[0-9]{2}-[0-9]{2}" required="required" value="<?php echo $data['userPhone']['value']; ?>">
			</div>
			<div>
				<textarea name="userMessage" placeholder="Напишите сообщение здесь..." rows="3" required="required" ><?php echo $data['userMessage']['value']; ?></textarea>
			</div>
			<div class="captchaCheck">
				<img class="captchaImg" src="" alt="" title="" >
				<input name="captchaCode" placeholder="Введите код здесь..." type="text" required="required" >
			</div>
			<div>
				<button name="sendMail" class="rounded">Отправить</button>
			</div>
		</form>
	</body>
</html>