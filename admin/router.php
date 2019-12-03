<?php

error_reporting(0);
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

if (isset($_POST['add'])) {
	$thumbnail = $_FILES['thumbnail'];
	$banner = $_FILES['banner'];

	move_uploaded_file($thumbnail['tmp_name'], "../assets/".$thumbnail['name']);
	move_uploaded_file($banner['tmp_name'], "../assets/".$banner['name']);
	var_dump($thumbnail, $banner);die;
	
	// --------------//
	$user = isset($_POST['user']) ? $_POST['user'] : "";
	
	if ($_FILES['avatar']['name'] != "") {
		$avatar = time().$_FILES['avatar']['name'];

		move_uploaded_file($_FILES['avatar']['tmp_name'], "../assets/".$avatar);
	}else {
		$avatar = "null.png";
	}
$folder1=preg_replace('/([^\pL\.\ ]+)/u', '', strip_tags($namefilm)); //xóa kí tự đặc biệt trong chuỗi
$folder =preg_replace('([\s]+)', '-', strip_tags($folder1)); //xóa khoảng trắng

	

	// $creatFolder = "../films/".$folder;
	// $files 		= "../".$link;
	if ($stmt->rowCount()>0) {
		// mkdir($creatFolder,0777,true); //tạo folder
		// file_put_contents($files,''); //tạo file theo tập phim
		header("location: dashboard.php");
	}else {
		echo '<script>alert("Thêm Thấi Bại");</script>';
	}
}