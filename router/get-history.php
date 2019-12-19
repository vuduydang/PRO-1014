<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";

$user = $_POST['user'];
$part = $_POST['part'];
$empty = isset($_POST['empty']) ? $_POST['empty'] : false;

$select = "SELECT * FROM historys WHERE user_id = '$user'";
$query 	= executeQuery($select);

if ($query) {
	echo $query['part_id'];

	if ($empty == 'true') {
		$update = "UPDATE historys SET part_id = '$part' WHERE user_id = '$user'";
		executeQuery($update);
	}
	die();
}elseif($user != ""){
	$sql_insert = "INSERT INTO historys VALUES (null,'$user','$part')";
    executeQuery($sql_insert);
    echo 'true'; die();
}