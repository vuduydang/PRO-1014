<?php
session_start();
require_once("../../commons/constants.php");
require_once("../../commons/db.php");
require_once("../../commons/helpers.php");

$empty 	= $_GET['empty'];
$id 	= $_GET['id'];

if ($empty == 'cate') {
	delCate($id);
}elseif ($empty == 'year') {
	delYear($id);
}


function delCate($id){
	$sql = "DELETE FROM categories WHERE id = '$id'";
	executeQuery($sql);
	return true;
}
function delYear($id){
	$sql = "DELETE FROM years WHERE id = '$id'";
	executeQuery($sql);
	return true;
}

?>
<script type="text/javascript">
	window.history.back();
</script>