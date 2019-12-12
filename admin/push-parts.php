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
$status 	= isset($_POST['status']) ? $_POST['status'] : "";

// validate
if ($film_id == "" || $name == "" || $file_film == "" || $status == "") {
	echo 'error';
		die();
}

// start
$type = ["video/mp4", "video/ogg", "video/webm"];
$nameFilm = time().$file_film['name'];
if (in_array($file_film['type'], $type)) {
	move_uploaded_file($file_film['tmp_name'], "../videos/". $nameFilm);
}else {
	echo 'Không đúng định dạng video';
	die();
}

$url_0 	= preg_replace('([\s]+)', '-', strip_tags($name)).'.html'; //xóa khoảng trắng
$url 	= strUnicode($url_0); //xóa dấu
$link	= $url.$film_id.".html";

$insert = "INSERT INTO parts VALUES (NULL,'$film_id','$name','$nameFilm','0','$link')";
executeQuery($insert);

$upload = "UPDATE films SET status = '$status' WHERE id = '$film_id'";
executeQuery($upload);
echo 'Thành công !';
die();
