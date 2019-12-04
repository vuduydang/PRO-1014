<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";




	$user = isset($_POST['username']) ? $_POST['username'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";

    if($user != "" && $password != ""){
    	// lấy dữ liệu từ csdl bảng users dựa vào email
    	$sqlUserQuery = "SELECT * FROM users WHERE username = '$user'";
    	$user = executeQuery($sqlUserQuery);
    	if($user && password_verify($password, $user['password'])){
    		$_SESSION[AUTH_YF] = [
    			"id" => $user['id'],
    			"username" => $user['username'],
    			"name" => $user['name'],
    			"email" => $user['email'],
    			"avatar" => $user['avatar'],
    			"age" => $user['age'],
    			"role_id" => $user['role_id']
    		];

            if (isset($_POST['adm'])) {
                header("location:".BASE_URL."/admin/dashboard.php");
            }
    		echo 'true';
    		die;
    	}
    }

    if (isset($_POST['adm'])) {
        header("location:".BASE_URL."/admin/");
    }

    echo "false";
    die;

	