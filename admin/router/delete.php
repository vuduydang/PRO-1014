<?php
session_start();
require_once("../../commons/constants.php");
require_once("../../commons/db.php");
require_once("../../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

	$id 	= $_GET['id'];
	$select = "SELECT * FROM films WHERE id='$id'";
	$listF	= executeQuery($select);

	$id_film= $listF['id'];
	$select = "SELECT * FROM parts WHERE film_id='$id_film'";
	$listP	= executeQuery($select, true);
	
	$del1 = "DELETE FROM films WHERE id='$id'";
	$del2 = "DELETE FROM parts WHERE film_id='$id'";
	executeQuery($del1);
	executeQuery($del2);


unlink("../../assets/thumbnails/". $listF['thumbnail']);
unlink("../../assets/banners/". $listF['banner']);

foreach ($listP as $value) {
	unlink("../../videos/". $listP['player']);
}
header("location: ../manager.php");