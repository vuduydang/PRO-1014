<?php 
require_once("../../commons/constants.php");
require_once("../../commons/db.php");
require_once("../../commons/helpers.php");

if (isset($_GET['empty'])) {
	$del = $_GET['id'];
	$sql_xoa = "DELETE FROM reviews WHERE film_id = '$del'";
	executeQuery($sql_xoa);

	echo "<script>history.back()</script>";;
	die();
}
	$del = $_GET['id'];
	$sql_xoa = "DELETE FROM reviews WHERE id = '$del'";
	executeQuery($sql_xoa);

	echo "<script>history.back()</script>";;
 ?>