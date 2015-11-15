<?php
// Подключение файла конфигурации класса "SendMail"
include "configuration.php";
?>

<?php
/**
 * Класс рассылки писем
 *
 * Свойства:
 * options (тип: array) - Массив опций отправки писем
 * result (тип: array) - Объект сообщений об результе операции отправки письма
 *
 * Методы:
 * setOptions - Переопределяет опции по умолчанию
 * setResult - Генерация содержимого объекта сообщений об результатах операции отправки письма
 * getResult - Возвращает объект сообщений об результатах операции отправки письма
 * sendMail - Отправляет письма
 */
class Email {
	/**
	 * Опции отправки письма
	 */
	private $options = array(
		'siteName' => SITE_NAME,
		'siteEmail' => SITE_EMAIL,
		'adminEmails' => ADMIN_EMAILS,
		'sendFromSite' => SEND_FROM_SITE,
		'replyToSite' => REPLY_TO_SITE,
		'template' => TEMPLATE,
		'subject' => SUBJECT,
		'successReport' => SUCCESS_REPORT,
		'failReport' => FAIL_REPORT
	);

	/**
	 * Объект сообщений об результе операции отправки письма
	 */
	private $result = array(
		'type' => 'fail',
		'report' => FAIL_REPORT
	);

	public function __construct() {
		//$this->options = array_replace($this->options, $userOptions);
		//$this->result['report'] = $this->options['failReport'];
    }
	
	public function __set($name, $value) {
		$this->$name = array_replace($this->$name, $value);
    }


	/**
	 * Метод переопределяет опции отправки письма
	 *
	 * Параметры:
	 * - $userOptions (тип: array) - Ассоциативный массив переопределяемых параметров опций отправки письма
	 
	public function setOptions($userOptions){
		// Переопределение опций новым массивом после слияния путём замещения при совпадении имен ключей элементов
		$this->options = array_replace($this->options, $userOptions);
	}*/

	/**
	 * Метод генерирует содержимое объекта сообщений об результатах операции отправки письма
	 *
	 * Параметры:
	 * - $result (тип: array) - Ассоциативный массив сообщений об результе операции отправки письма
	 
	private function setResult($result){
		// Замещение содержимого объекта результата операции отправки письма на новое содержимое
		$this->result = array_replace($this->result, $result);
	}*/

	/**
	 * Метод возвращает объект сообщений об результатах операции отправки письма
	 *
	 * Возвращаемое значение: 
	 * $this->result (тип: array) - Ассоциативный массив сообщений об результе операции отправки письма
	 */
	public function getResult(){
		// Возврат ассоциативного массива сообщений об результе операции отправки письма
		return $this->result;
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
	 * Метод отправляет письма
	 *
	 * Параметры:
	 * - $data (тип: array) - Ассоциативный массив отправляемых данных, переданных формой
	 */
	public function sendMail($data){
		// Проверка данных пользователя
		$this->checkData($data);

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
		// Добавление заголовка "От имени кого"
		if ( $this->options['sendFromSite'] ) {
			// Добавление заголовка "От имени кого отправленно письмо"
			$headers .= "From: =?utf-8?B?".base64_encode($this->options['siteName'])."?= <".$this->options['siteEmail'].">\r\n";
		} else {
			// Добавление заголовка "От имени кого отправленно письмо"
			$headers .= "From: =?utf-8?B?".base64_encode($data["userName"]["value"])."?= <".$data["userEmail"]["value"].">\r\n";
			// Добавление заголовка "Кто отправил письмо"
			$headers .= "Sender: =?utf-8?B?".base64_encode($this->options['siteName'])."?= <".$this->options['siteEmail'].">\r\n";
		}
		// Добавление заголовка "Кому ответить"
		$headers .= ( $this->options['replyToSite'] )
			? "Reply-To: =?utf-8?B?".base64_encode($this->options['siteName'])."?= <".$this->options['siteEmail'].">\r\n"
			: "Reply-To: =?utf-8?B?".base64_encode($data["userName"]["value"])."?= <".$data["userEmail"]["value"].">\r\n";

		/**
		 * Проверка состояния отправки
		 */
		if ( mail($this->options['adminEmails'], $subject, $message, $headers) ) {
			$this->result = array(
				'type' => 'success',
				'report' => $this->options['successReport']
			);
		}

		// Вывод сообщения о результате операции отправки письма
		return $this->result;
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

			$sendMail->options = array(
				'template'=>'newMail',
				'subject' => 'Письмо с сайта "GL"'
			);
			
			// Вызов метода "sendMail" для отправки письма
			$resultMessage = $sendMail->sendMail($data);
			
			echo '<pre>';
			print_r($resultMessage);
			echo '<pre>';
		}
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