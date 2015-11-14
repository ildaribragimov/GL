<?php
// Подключение файла конфигурации класса "SendMail"
include "configuration.php";
?>

<?php
/**
 * Класс рассылки писем
 *
 * Свойства:
 * options (тип: array) - массив опций отправки писем
 *
 * Методы:
 * setOptions - Переопределяет опции по умолчанию
 * sendMail - Отправляет письма.
 */
class Email {
	
	/**
	 * Опции отправки письма
	 */
	public $options = array(
		'siteName' => SITE_NAME,
		'siteEmail' => SITE_EMAIL,
		'adminEmails' => ADMIN_EMAILS,
		'sendFromSite' => SEND_FROM_SITE,
		'replyToSite' => REPLY_TO_SITE,
		'template' => TEMPLATE,
		'subject' => SUBJECT
	);
	
	/**
	 * 
	 */
	public $result = array(
		'type' => '',
		'report' => ''
	);

	/**
	 * Метод переопределяет опции отправки письма
	 *
	 * Параметры:
	 * - $userOptions (тип: array) - Ассоциативный массив переопределяемых параметров опций отправки письма
	 */
	public function setOptions($userOptions){
		// Переопределение опций новым массивом после слияния путём замещения при совпадении имен ключей элементов
		$this->options = array_replace($this->options, $userOptions);
	}

	/**
	 * Метод проверяет полученные от пользователя данные на корректность и допустимость
	 *
	 * Параметры:
	 * - $data (тип: array) - Ассоциативный массив отправляемых данных, переданных формой
	 */
	private function checkData($data){
		
	}

	/**
	 *
	 */
	private function getResult(){
		
	}
	
	/**
	 * Метод отправляет письма
	 *
	 * Параметры:
	 * - $data (тип: array) - Ассоциативный массив отправляемых данных, переданных формой
	 */
	public function sendMail($data){
		// Проверка данных пользователя
		//$this->checkData($data);

		/**
		 * Генерация данных для отправки письма
		 */
		// Генерация темы письма
		$subject = '=?utf-8?b?'.base64_encode($this->options['subject']).'?=';
		// Генерация текста(тела) письма
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<h1>Здравстувйте, уважаемый управляющий клуба!</h1>
					<table>
						<tr>
							<td>Посетитель по имени <b>'.$data["userName"]["value"].'</b> написал вам сообщение:</td>
						</tr>
						<tr>
							<td><q>'.$data["userMessage"]["value"].'</q></td>
						</tr>
						<tr>
							<td>Сообщение было написано '.strftime("%d.%m.%Y в %H:%M").'</td>
						</tr>
					</table>
				</body>
			</html>';
		
		// Добавление заголовка "MIME-Version"
		$headers  = "MIME-Version: 1.0\r\n";
		// Добавление заголовка "Тип пиьсма" и "Кодировка"
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		// Добавление заголовка "От кого"
		$headers .= ( $this->options['sendFromSite'] )
			? "From: =?utf-8?B?".base64_encode($this->options['siteName'])."?= <".$this->options['siteEmail'].">\r\n"
			: "From: =?utf-8?B?".base64_encode($data["userName"]["value"])."?= <".$data["userEmail"]["value"].">\r\n";
		// Добавление заголовка "Кому ответить"
		$headers .= ( $this->options['replyToSite'] )
			? "Reply-To: =?utf-8?B?".base64_encode($this->options['siteName'])."?= <".$this->options['siteEmail'].">\r\n"
			: "Reply-To: =?utf-8?B?".base64_encode($data["userName"]["value"])."?= <".$data["userEmail"]["value"].">\r\n";

		/**
		 * Проверка состояния отправки
		 */
		
			if ( mail($this->options['adminEmails'], $subject, $message, $headers) ) {
				echo 'Ваше письмо отправленно!';
			} else {
				echo 'Письмо не отправлено! Попробуйте еще раз!';
			}
		
		return true;

		// Вывод сообщения о результате операции отправки письма
		//$this->getResult();
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
		if ( !empty($_POST) && isset($_POST['sendMail']) ) {
			// Получение данных пользователя и генерация массива данных для отправки письма
			$data = array(
				'userName' => array(
					'type' => 'name',
					'value' => htmlspecialchars($_POST['userName'])
				),
				'userEmail' => array(
					'type' => 'email',
					'value' => $_POST['userEmail']
				),
				'userMessage' => array(
					'type' => 'text',
					'value' => htmlspecialchars($_POST['userMessage'])
				)
			);

			// Создание экземпляра класса "Email"
			$sendMail = new Email();

			$sendMail->setOptions(array(
				'template'=>'newMail',
				'subject' => 'Письмо с сайта "GL"'
			));
			
			// Вызов метода "sendMail" для отправки письма
			if ( $sendMail->sendMail($data) ) {
				echo 'Success';
			} else {
				echo 'Fail';
			}
		}
		
		$e = new Email();
		$u = new Email();
		
		$e->setOptions( array(
			'template'=>'newMail',
			'subject' => 'Письмо с сайта "GL"'
			)
		);
		$u->setOptions( array(
			'template'=>'newReview',
			'subject' => 'Новый отзыв о сауне'
			)
		);
		
		echo '<pre>';
		print_r($e->options);
		echo '</pre>';

		echo '<pre>';
		print_r($u->options);
		echo '</pre>';
		
		
		?>
		<form id="sendMail" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post" accept-charset="utf-8" autocomplete="on" novalidate>
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
				<button name="sendMail" class="rounded">Отправить</button>
			</div>
		</form>
	</body>
</html>