<?php
/**
 * Объявление констант
 *
 * SITE_NAME - Нозвание сайта
 * SITE_EMAIL - E-mail, используемый для отправки писем с сайта на административные адреса
 * ADMIN_EMAILS - Административные адреса, на которые будут отправляться служебные письма
 * HEADER_SEND_FROM_SITE - Параметр, указывающий от имени кого будет отправлено E-mail на административные адреса (false - от имени отправителя; true - от имени сайта)
 * HEADER_REPLY_TO - Параметр, указывающий кому необходимо отвечать на письмо (false - отвечать отправителю; true - отвечать сайту)
 */
define('SITE_NAME', 'Банный комплекс "GL"');
define('SITE_EMAIL', 'robot@glclub.ru');
define('ADMIN_EMAILS', 'iibragimov84@gmail.com, inf-majesty@yandex.ru, rennesance_earth@mail.ru');
define('HEADER_SEND_FROM_SITE', false);
define('HEADER_REPLY_TO_SITE', false);
?>