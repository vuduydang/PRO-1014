<?php

session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

$film_id	= isset($_POST['film_id']) ? $_POST['film_id'] : "";
$name 		= isset($_POST['name']) ? $_POST['name'] : "";
$player 	= isset($_POST['player']) ? $_POST['player'] : "";
$file_film 	= isset($_FILES['file']) ? $_FILES['file'] : "";
 dv($file_film); die();
	$type = ["video/mp4"];
	if ($file_film['name'] != "" || in_array($file_film['type'], $type)) {
		move_uploaded_file($file_film['tmp_name'], "../videos/". $name);
	}

$link 		= preg_replace('([\s]+)', '-', strip_tags($name));
$url		= $link.$film_id.".html";

$insert = "INSERT INTO parts VALUES (NULL,'$film_id','$name','$player','$url')";
executeQuery($insert);

echo 'Thành công !';
die();
