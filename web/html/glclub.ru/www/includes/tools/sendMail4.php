<?php
	/**
	 * Класс рассылки писем
	 *
	 * Свойства:
	 *
	 * Методы:
	 * sendMail - Отправляет письма. Принимает параметры:
	 * - $data (тип: array) - ассоциативный массив данных переданных формой
	 */
	class Email {
		private $status = array(
			'type' => '',
			'text' => ''
		);

		private function checkData($data){
			if ( isset($_POST) && !empty($_POST) ){
				if ( array_search("", $_POST) === false ){
					$this->status['type'] = 'success';
					return true;
				} else {
					$this->status['type'] = 'fail';
					return false;
				}				
			}
		}

		private function getResult(){
			echo $this->status['type'];
		}

		public function sendMail($data){
			if ($this->checkData($data)) {

			}
			$this->getResult();
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
			// Получение данных пользователя и генерация массива данных для отправки письма
			$data = array(
				'userName' => array(
					'type' => 'name',
					'value' => $_POST['userName']
				),
				'userEmail' => array(
					'type' => 'email',
					'value' => $_POST['userEmail']
				),
				'userMessage' => array(
					'type' => 'text',
					'value' => $_POST['userMessage']
				)
			);

			// Создание экземпляра класса "Email"
			$sendMail = new Email();
			
			// Вызов метода "sendMail" для отправки письма
			$sendMail->sendMail($data);
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