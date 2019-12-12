<?php
session_start();
require_once("./commons/constants.php");
require_once("./commons/db.php");
require_once("./commons/helpers.php");
$password 		= isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : "";
$password_new		= isset($_POST['password_new']) ? password_hash($_POST['password_new'], PASSWORD_DEFAULT) : "";
$enter_password		= isset($_POST['enter_password']) ? password_hash($_POST['enter_password'], PASSWORD_DEFAULT) : "";

$sqlQuery ="SELECT * from users where id = '$id'";
$users=executeQuery($sqlQuery, true);

if ($users['password'] != $password) {
    echo "<script>alert('Mật khẩu hiện tại của bạn không đúng !')</script>";
	echo "<script>window.history.back()</script>";
	die();
}elseif ($password_new != $enter_password) {
	echo "<script>alert('mật khẩu mới của bạn không khớp !')</script>";
	echo "<script>window.history.back()</script>";
}else{
	$chang="UPDATE users SET password = $password_new where id = '$id'";
	$chang->execute();
	if ($chang->execute()) {
		alert('Đổi mật khẩu thành công !');
	}
}
?>
