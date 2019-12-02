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
	<article class="addpart">
		<form action="" method="post" enctype="multipart_formdata">
		 	<legend>Sửa Nội Dung Phim</legend>
		 	<label>Tên Phim</label>
		 	<input type="text" name="namefilm" value="<?=$list['name']?>" readonly><br>
		 	<label>Nội Dung</label>
		 	<textarea name="contents" required style="width: 100%; height: 100px"></textarea><br>

		 	<input type="submit" name="update" value="Cập nhật" style="width: 100px; padding:0; background-color: #328; color: #fff; margin: 16px 200px;">
			</form>
	</article>
</body>
</html>