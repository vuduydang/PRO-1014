<?php 
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");
	if(isset($_GET['id'])){
		$maxoa = $_GET['id'];
		$sql_xoa = "select * from reviews where film_id = '$maxoa'";
		$kq_xoa = $connect->query($sql_xoa)->fetch();

		$sql = "delete from reviews where film_id = '$maxoa'";
		$kq = $connect->prepare($sql);
		if($kq->execute()){
			header("Location:detail-Comment.php?film_id=".$kq_xoa['film_id']);
		}else{
			echo "Lỗi";
		}
	}
 ?>