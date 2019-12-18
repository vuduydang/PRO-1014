<?php

// error_reporting(0);
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");
$id 		= isset($_POST['id']) ? $_POST['id'] : "";
$role_id 		= isset($_POST['role_id']) ? $_POST['role_id'] : "";

$sqlInsert = "UPDATE users SET role_id='$role_id' where id='$id'";
executeQuery($sqlInsert);
	header("location: users.php"); 
?>