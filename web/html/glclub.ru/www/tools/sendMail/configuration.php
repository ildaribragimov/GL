<?php
/**
 * Объявление констант
 *
 * SITE_NAME - Название сайта
 * SITE_EMAIL - E-mail, используемый для отправки писем с сайта на административные адреса
 * ADMIN_EMAILS - Административные адреса, на которые будут отправляться служебные письма
 * SEND_FROM_SITE - Параметр, указывающий от имени кого будет отправлено E-mail на административные адреса (false - от имени отправителя; true - от имени сайта)
 * REPLY_TO_SITE - Параметр, указывающий кому необходимо отвечать на письмо (false - отвечать отправителю; true - отвечать сайту)
 * TEMPLATE - Шаблон письма по умолчанию
 * SUBJECT - Тема письма по умолчанию
 * SUCCESS_REPORT - Сообщение по умолчанию об успешном результате операции отправки письма
 * FAIL_REPORT - Сообщение по умолчанию об ошибке операции отправки письма
 */
define('SITE_NAME', 'Банный комплекс "GL"');
define('SITE_EMAIL', 'inf-majesty@yandex.ru');
define('ADMIN_EMAILS', 'iibragimov84@gmail.com, rennesance_earth@mail.ru');
define('SEND_FROM_SITE', false);
define('REPLY_TO_SITE', false);
define('TEMPLATE', 'default');
define('SUBJECT', 'You have a mail from your website!');
define('SUCCESS_REPORT', 'Ваше письмо отправлено! Благодарим вас за обращение!');
define('FAIL_REPORT', 'Ошибка отправки письма! Попробуйте позже!');
?>