<?php

// error_reporting(0);
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");



	// move_uploaded_file($thumbnail['tmp_name'], "../assets/".$thumbnail['name']);
	// move_uploaded_file($banner['tmp_name'], "../assets/".$banner['name']);
	
	// --------------//
	$name 		= isset($_POST['name']) ? $_POST['name'] : "";
	$categories = isset($_POST['categories']) ? $_POST['categories'] : "";
	$author 	= isset($_POST['author']) ? $_POST['author'] : "";
	$series 	= isset($_POST['series']) ? $_POST['series'] : "";
	$year 		= isset($_POST['year']) ? $_POST['year'] : "";
	$quantity 	= isset($_POST['quantity']) ? $_POST['quantity'] : "";
	$status 	= isset($_POST['status']) ? $_POST['status'] : "";
	$content 	= isset($_POST['content']) ? $_POST['content'] : "";
	$thumbnail 	= isset($_FILES['thumbnail']) ? $_FILES['thumbnail'] : "";
	$banner 	= isset($_FILES['banner']) ? $_FILES['banner'] : "";

	if ($name=="" || $categories=="" || $author=="" || $year=="" || $quantity=="" || $content=="" || $thumbnail=="" || $banner=="") {
		echo "<script>alert('Thiếu thông tin phim rồi, chú ý vào !')</script>";
		echo "<script>window.history.back()</script>";
		die();
	}
	
	if ($thumbnail['name'] != "") {
		$thumbnailName = $thumbnail['name'];
		move_uploaded_file($thumbnail['tmp_name'], "../assets/thumbnails/".$thumbnailName);
	}
	if ($banner['name'] != "") {
		$bannerName = $banner['name'];
		move_uploaded_file($banner['tmp_name'], "../assets/banners/". $bannerName);
	}

	$url_1 	= preg_replace('/([^\pL\.\ ]+)/u', '', strip_tags($name)); //xóa kí tự đặc biệt trong chuỗi
	$url 	= preg_replace('([\s]+)', '-', strip_tags($url_1)).'html'; //xóa khoảng trắng

	$sqlInsert = "INSERT INTO films VALUES ('null','$name','$series','$year','$categories','$author','$bannerName','$thumbnailName','$content','$quantity','$status','0','$url','1')"; 
	executeQuery($sqlInsert);

	header("location: dashboard.php");

	// $creatFolder = "../films/".$folder;
	// $files 		= "../".$link;
	// if ($stmt->rowCount()>0) {
	// 	// mkdir($creatFolder,0777,true); //tạo folder
	// 	// file_put_contents($files,''); //tạo file theo tập phim
	// 	header("location: dashboard.php");
	// }else {
	// 	echo '<script>alert("Thêm Thấi Bại");</script>';
	// }
