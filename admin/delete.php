<?php
require("../config.php");
session_start();
if (isset($_SESSION['admin'])==false) {
	header("location: index.php");
}

if (isset($_GET['id'])) {
	$id 	= $_GET['id'];
	$select = "SELECT * FROM films_db WHERE id='$id'";
	$stmt 	= $conn->prepare($select);
	$stmt->execute();
	$list	= $stmt->fetch();

	$del1 = "DELETE FROM films_db WHERE id='$id'";
	$del2 = "DELETE FROM part_films_db WHERE id_film='$id'";
	$stmt 	= $conn->prepare($del1);
	$stmt->execute();
	$stmt 	= $conn->prepare($del2);
	$stmt->execute();
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
// remove_dir($dir);

		unlink("../images/".$list['avatar']);
	if ($stmt->rowCount()>0) {
		header("location: manager.php");
	}else {
		echo '<script>alert("False");</script>';
	}
}