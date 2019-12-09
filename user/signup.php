<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";




	$user 		= isset($_POST['username']) ? $_POST['username'] : "";
    $password 	= isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : "";
    $full_name 	= isset($_POST['full_name']) ? $_POST['full_name'] : "";
    $email 		= isset($_POST['email']) ? $_POST['email'] : "";
    $gender 	= isset($_POST['gender']) ? $_POST['gender'] : "";
    $birthdays 	= isset($_POST['birthdays']) ? $_POST['birthdays'] : "";

    $sql_insert = "INSERT INTO users VALUES (null,'$user','$password','$full_name','$email','null','$birthdays',0)";
    $signup 	= executeQuery($sql_insert);
    if ($signup != '') {
    	echo 'false';
    	die();
    }else {
    	echo 'true';
    	die();
    }

	