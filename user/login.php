<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";

if (isset($_SESSION[AUTH_YF])) {
	header("location:".BASE_URL."/admin/dashboard.php");
}
if (isset($_POST['sigin'])) {
	$user = isset($_POST['username']) ? $_POST['username'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";

    if($user != "" && $password != ""){
    	// lấy dữ liệu từ csdl bảng users dựa vào email
    	$sqlUserQuery = "SELECT * FROM users WHERE username = '$user' OR email = '$email'";
    	$user = executeQuery($sqlUserQuery);
    	if($user && password_verify($password, $user['password'])){
    		$_SESSION[AUTH_YF] = [
    			"id" => $user['id'],
    			"username" => $user['username'],
    			"name" => $user['name'],
    			"phone" => $user['phone'],
    			"email" => $user['email'],
    			"avatar" => $user['avatar'],
    			"age" => $user['age'],
    			"role_id" => $user['role_id']
    		];
    		header('location: ' . BASE_URL . '/admin/dashboard.php');
    		die;
    	}
    }
    header('location: ' . BASE_URL . 'login.php?msg=Email/Mật khẩu không đúng');
    die;

	$select		= "SELECT * FROM admin_db WHERE ad_name=:adname AND ad_password=:adpassword";
	$stmt		= $conn->prepare($select);
	$stmt->bindParam(':adname', $adname );
	$stmt->bindParam(':adpassword', $adpassword);
	$stmt->execute();
	$admin		= $stmt->fetch();
	if ($stmt->rowCount()>0) {
		$_SESSION['admin'] = $admin['ad_name'];
		header("location: quanly.php");
	}else {
		echo '<script>alert("Sai Username or Password")</script>';
	}
}
?>