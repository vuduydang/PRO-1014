<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";




	$username 		= isset($_POST['username']) ? $_POST['username'] : "";
    $password 	= isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : "";
    $full_name 	= isset($_POST['full_name']) ? $_POST['full_name'] : "";
    $email 		= isset($_POST['email']) ? $_POST['email'] : "";
    $gender 	= isset($_POST['gender']) ? $_POST['gender'] : "";
    $birthdays 	= isset($_POST['birthdays']) ? $_POST['birthdays'] : "";

    $select = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
    $query  = executeQuery($select);

    if (!$query) {
        $sql_insert = "INSERT INTO users VALUES (null,'$username','$password','$full_name','$email','null.png','$gender','$birthdays',0)";
        $signup     = executeQuery($sql_insert);

        echo 'Đăng ký thành công.';die();
    }
    echo 'Username hoặc Email đã được sử dụng.'; die();


	