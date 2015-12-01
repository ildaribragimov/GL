<?php
//
$timeout = 10;
// Назначние порта
$port = 25;
// Получение имени хоста (например glclub.ru)
$localhost = $_SERVER['HTTP_HOST'];
// Указание адреса отправителя тестового сообщения на указанный пользователем e-mail для проверки его существования
$sender = 'info@' . $localhost;
// Статус проверки по умолчанию
$result = false;
// ?
$id = 0;

$host = $localhost;


if (getmxrr ($host, $mxhosts[0], $mxhosts[1]) == true)  array_multisort ($mxhosts[1], $mxhosts[0]);
    else { $mxhosts[0] = $host;
       $mxhosts[1] = 10;
     }
    if (DEBUG_OK) print_r ($mxhosts);

if ($connection = fsockopen ($mxhosts[0][$id], $port, $errno, $error, $this->timeout)) {
	fputs ($connection,"HELO $localhost\r\n"); // 250
	$data = fgets ($connection,1024);
	$response = substr ($data,0,1);
	if (DEBUG_OK) print_r ($data);
	// 200, 250 etc.
	if ($response == '2') {
		fputs ($connection,"MAIL FROM:<$sender>\r\n");
		$data = fgets($connection,1024);
		$response = substr ($data,0,1);
		if (DEBUG_OK) print_r ($data);
		// 200, 250 etc.
		if ($response == '2') {
			fputs ($connection,"RCPT TO:<$email>\r\n");
			$data = fgets($connection,1024);
			$response = substr ($data,0,1);
			if (DEBUG_OK) print_r ($data);
			// 200, 250 etc.
			if ($response == '2') {
				fputs ($connection,"data\r\n");
				$data = fgets($connection,1024);
				$response = substr ($data,0,1);
				if (DEBUG_OK) print_r ($data);
				// 200, 250 etc.
				if ($response == '2') {
					$result = true;
				}
			}
		}
	}
	fputs ($connection,"QUIT\r\n");
    fclose ($connection);
	if ($result) return true;
}
$id++;

?>
