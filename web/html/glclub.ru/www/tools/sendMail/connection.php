<?php
/*
*  This script was writed by Setec Astronomy - setec@freemail.it
*
*  This script is distributed under the GPL License
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
*   GNU General Public License for more details.
*
*  http://www.gnu.org/licenses/gpl.txt
*
*/
define ('DEBUG_OK', true);

class CCheckMail {
	
	var $timeout = 10;

	function execute ($email = "") {
		
		$host = substr (strstr ($email, '@'), 1);
		
		if ( getmxrr ($host, $mxhosts[0], $mxhosts[1]) ) {
			array_multisort ($mxhosts[1], $mxhosts[0]);
		} else {
			$mxhosts[0] = $host;
			$mxhosts[1] = 10;
		}
		
		if ( DEBUG_OK ) {
			print_r ($mxhosts);
		}

		$port = 25;
		$localhost = $_SERVER['HTTP_HOST'];
		$sender = 'info@' . $localhost;

		$result = false;
		$id = 0;
		
		while (!$result && $id < count ($mxhosts[0])) {
			if ( function_exists ("fsockopen") ) {
				if ( DEBUG_OK ) {
					print_r ($id . " -> " . $mxhosts[0][$id]);
				}
		 
				if ( $connection = fsockopen ($mxhosts[0][$id], $port, $errno, $error, $this->timeout) ) {
					fputs ($connection,"HELO $localhost\r\n"); // 250
					$data = fgets ($connection,1024);
					$response = substr ($data,0,1);
					if ( DEBUG_OK ) {
						print_r ($data);
					}
					// 200, 250 etc.
					if ($response == '2') {
						fputs ($connection,"MAIL FROM:<$sender>\r\n");
						$data = fgets($connection,1024);
						$response = substr ($data,0,1);
						if ( DEBUG_OK ) {
							print_r ($data);
						}
						// 200, 250 etc.
						if ($response == '2') {
							fputs ($connection,"RCPT TO:<$email>\r\n");
							$data = fgets($connection,1024);
							$response = substr ($data,0,1);
							if ( DEBUG_OK ) {
								print_r ($data);
							}

							// 200, 250 etc.
							if ($response == '2') {
								fputs ($connection,"data\r\n");
								$data = fgets($connection,1024);
								$response = substr ($data,0,1);
								if ( DEBUG_OK ) {
									print_r ($data);
								}
								// 200, 250 etc.
								if ( $response == '2' ) {
									$result = true;
								}
							}
						}
					}
					fputs ($connection,"QUIT\r\n");
					fclose ($connection);
				}
			} else {
				break;
			}
			
			$id++;
		}
		
		return $result;
	}

}




header('Content-Type: text/html; charset=utf-8');

$str='iibragimov8444@gmail.com';
$alter=new CCheckMail ();

echo '<pre>';
print "E-mail: ".$str." - ".($alter->execute($str)?'существует':'не существует');
echo '</pre>';
?>