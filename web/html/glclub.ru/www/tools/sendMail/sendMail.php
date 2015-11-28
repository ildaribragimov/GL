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
 * __construct - Конструктор класса
 * __set - Устанавливает и переопределяет свойства класса
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

	/**
	 * Конструктор класса
	 */
	public function __construct() {
    }

	/**
	 * Метод устанавливает и переопределяет свойства класса
	 *
	 * Параметры:
	 * - $name - Имя свойства
	 * - $value - новое значение свойства
	 */
	public function __set($name, $value) {
		$this->$name = array_replace($this->$name, $value);
    }

	/**
	 * Метод проверяет полученные от пользователя данные на корректность и допустимость
	 *
	 * Параметры:
	 * - $data (тип: array) - Ассоциативный массив отправляемых данных, переданных формой
	 *
	 * Возвращаемое значение:
	 * - true/false (тип: boolean) - если проверка прошла успешно (true), иначе (false)
	 */
	private function checkData($data){
		// Создание массива сообщений о результатах проверки данных
		$report = '';
		// Определение начального положения счетчика итераций цикла "foreach"
		$counter = 0;
		// Перебор элементов массива
		foreach ( $data as $key => $value ) {
			// Определение/Сброс переменной текста сообщения о результате проверки данных
			$errorMsg = '';
			// Условие на соответствие значния элемента массива пустому значению
			if ( empty($value['value']) && $value['type'] != "captcha" )
			// Если значение ПУСТОЕ
			{
				// Формирование сообщения об ошибке
				$errorMsg = 'Поле "'.$value['label'].'" не должно быть пустым!';
			} 
			// Если значение НЕ ПУСТОЕ
			else {
				// Проверка переданного значения поля на соответствие присвоенному типу поля
				switch ( $value['type'] ) {
					// Если тип поля "ИМЯ ПОЛЬЗОВАТЕЛЯ"
					case "name":
						// Регулярное вырожение для проверки Имени пользователя
						$regExp = '/(^[а-яА-ЯёЁ\s]*$)/ui';
						// Условие на соответствие значния элемента регулярному выражению
						if ( !filter_var($value['value'], FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => $regExp))) ) {
							// Формирование сообщения об ошибке
							$errorMsg = 'Имя должно состоять только из букв русского алфавита!';
						}
						// Прерывание выполнения конструкции SWITCH
						break;

					// Если тип поля "E-mail"
					case "email":
						// Условие на соответствие значния элемента типу "E-mail"
						if ( !filter_var($value['value'], FILTER_VALIDATE_EMAIL) ) {
							// Формирование сообщения об ошибке
							$errorMsg = 'E-mail указан не верно!';
						};
						// Прерывание выполнения конструкции SWITCH
						break;

					// Если тип поля "Номер телефона"
					case "phone":
						// Регулярное вырожение для проверки номера телефона
						$regExp = '/\+7\s\(\d{3,6}\)\s\d{1,3}\-\d{2}-\d{2}\b/';
						// Условие на соответствие значния элемента регулярному выражению
						if ( !filter_var($value['value'], FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => $regExp))) ) {
							// Формирование сообщения об ошибке
							$errorMsg = 'Номер телефона указан не верно!';
						};
						// Прерывание выполнения конструкции SWITCH
						break;

					// Если тип поля "Текст"
					case "text":
						// Прерывание выполнения конструкции SWITCH
						break;
					
					// Если тип поля не "Captcha"
					case "captcha":
						// Условие на соответствие значния поля не пустому значению
						if ( !empty($value['value']) ) {
							// Удаление (Сброс) содержимого массива
							$report = '';
							// Формирование сообщения об ошибке
							$errorMsg = $this->options['failReport'];
						}
						// Прерывание выполнения конструкции SWITCH
						break;

					// Если тип поля не зарегистрированн/идентифицирован/определен
					// default:
				}
			}
			
			
			// Добавление нового элемента в массив сообщений о результатах проверки данных
			if ( !empty($errorMsg) ) {
				// Добавление нового элемента в массив сообщений о результатах проверки данных
				$report['report'][$counter] = $errorMsg;
			}
			// Увеличение счетчика итераций цикла "foreach" на единицу
			$counter++;
		}
		// Условие на соответствие масиива сообщений о результатах проверки данных пустому значению
		if ( !empty($report) ) {
			// Замена заначений объекта сообщений об результе операции отправки письма на значения массива сообщений о результатах проверки данных
			$this->result = $report;
			// Выход из метода и возврат значения результата проверки данных
			return false;
		}
		// Выход из метода и возврат значения результата проверки данных
		return true;
	}
	
	/**
	 * Метод отправляет письма
	 *
	 * Параметры:
	 * - $data (тип: array) - Ассоциативный массив отправляемых данных, переданных формой
	 */
	public function sendMail($data){
		// Проверка данных пользователя
		if ( $this->checkData($data) ) {
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
		}

		// Вывод сообщения о результате операции отправки письма
		return $this->result;
	}
}
?>