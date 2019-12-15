<?php
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

if (isset($_GET['id'])) {
	$id 	= $_GET['id'];
	$select = "SELECT * FROM films WHERE id='$id'";
	$list	= executeQuery($select);

}

if (isset($_POST['update'])) {
	extract($_REQUEST);
	$insert = "UPDATE films_db SET content = :content WHERE id = :id";
	$stmt	= $conn->prepare($insert);
	$stmt->bindParam(':id',$id);
	$stmt->bindParam(':content',$contents);
	$stmt->execute();
	if ($stmt->rowCount()>0) {
		echo '<script>close();</script>';
	}else {
		echo '<script>alert("Cập Nhật Thất bại")</script>';
	}
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="UTF-8">
	<title>Sửa nội dung</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="content">
		<article class="addfilms">
			<form action="" method="post" enctype="multipart_formdata">
			 	<legend><h2>Sửa Nội Dung Phim</h2></legend>
			 	<label>Tên Phim</label>
			 	<input type="text" name="namefilm" value="<?=$list['name']?>" readonly><br>
			 	<label>Nội Dung</label>
			 	<textarea name="contents" required style="width: 100%; height: 100px"></textarea><br>

			 	<input type="submit" name="update" value="Cập nhật" style="width: 100px; padding:0; background-color: #328; color: #fff; margin: 16px 200px;">
			</form>
		</article>
	</div>
</body>
</html>