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
// $folder1=preg_replace('/([^\pL\.\ ]+)/u', '', strip_tags($list['name'])); //xóa kí tự đặc biệt trong chuỗi
// $folder =preg_replace('([\s]+)', '', strip_tags($folder1));
// $dir = "../films/".$folder;
// function remove_dir($dir = null) {
//   if (is_dir($dir)) {
//     $objects = scandir($dir);

//     foreach ($objects as $object) {
//       if ($object != "." && $object != "..") {
//         if (filetype($dir."/".$object) == "dir") remove_dir($dir."/".$object);
//         else unlink($dir."/".$object);
//       }
//     }
//     reset($objects);
//     rmdir($dir);
//   }
// }

unlink(BASE_URL."/assets/thumbnails/". $listF['thumbnail']);
unlink(BASE_URL."/assets/banners/". $listF['banner']);

foreach ($listP as $value) {
	unlink(BASE_URL."/videos/". $listP['player']);
}
header("location: ../manager.php");