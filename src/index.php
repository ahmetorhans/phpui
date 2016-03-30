

<?php

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";


echo "<h1>Php ui</h1>";



try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=3308", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql= "SELECT * FROM tablo";
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll();
	print_r($result);
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }
