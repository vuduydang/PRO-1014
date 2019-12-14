<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";
date_default_timezone_set('Asia/Ho_Chi_Minh');

	$user_id 	= $_SESSION[AUTH_YF]['id'];
	$id_film 	= $_POST['id'];
	$content 	= $_POST['content'];
	$date	 	= date("H:i / d-m-Y");

    $sql_insert = "INSERT INTO reviews VALUES (null,'$id_film','$user_id','$content','$date')";
    executeQuery($sql_insert);
    die();