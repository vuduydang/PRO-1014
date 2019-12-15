<?php
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");
$password 		= isset($_POST['old_password']) ? $_POST['old_password'] : "";
$password_new	= isset($_POST['password_new']) ? $_POST['password_new'] : "";
$password_confirm	= isset($_POST['password_confirm']) ? $_POST['password_confirm'] : "";

//check validate
if ($password == "") {
	echo "<script>alert('Yêu cầu nhập mật khẩu cũ !')</script>";
	echo "<script>window.history.back()</script>";
}elseif($password_new != $password_confirm){
	echo "<script>alert('Confirm Password False !')</script>";
	echo "<script>window.history.back()</script>";
	die();
}

$id 	= $_SESSION[AUTH_YF]['id'];
$sqlQuery ="SELECT * from users where id = '$id'";
$user 	=executeQuery($sqlQuery);


if ($password_new != $password_confirm) {
	echo "<script>alert('mật khẩu mới của bạn không khớp !')</script>";
	echo "<script>window.history.back()</script>";
}
if ($user && password_verify($password, $user['password'])) {
	$password 	= password_hash($password_new, PASSWORD_DEFAULT) ;
    $update 	= "UPDATE users SET password = '$password' WHERE id = '$id'";
    executeQuery($update);
	echo "<script>alert('Đổi mật khẩu thành công !')</script>";
    header("location: ../");
}else{
	echo "<script>alert('Mật khẩu hiện tại của bạn không đúng !')</script>";
	echo "<script>window.history.back()</script>";
	die();
}




?>
