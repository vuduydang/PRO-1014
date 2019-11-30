<?php
require("../commons/db.php");
session_start();
// if (isset($_SESSION['admin'])==false) {
// 	header("location: index.php");
// }

if (isset($_GET['id'])) {
	$id 	= $_GET['id'];
	$select = "SELECT * FROM films_db WHERE id='$id'";
	$stmt 	= $conn->prepare($select);
	$stmt->execute();
	$list	= $stmt->fetch();
}
if (isset($_POST['addpart'])) {
	extract($_REQUEST);

	$link =preg_replace('([\s]+)', '-', strip_tags($namefilm));
	$url		= $link."/$namepart".$id.".html";

	$insert = "INSERT INTO part_films_db VALUES (NULL,:id,:namepart,:season,:player,:url,'0')";
	$stmt	= $conn->prepare($insert);
	$stmt->bindParam(':id',$id);
	$stmt->bindParam(':namepart',$namepart);
	$stmt->bindParam(':season',$season);
	$stmt->bindParam(':player',$player);
	$stmt->bindParam(':url',$url);
	$stmt->execute();
	if ($stmt->rowCount()>0) {
		header("location:manager.php");
	}else {
		echo '<script>alert("Thêm Thất bại")</script>';
	}
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="UTF-8">
	<title>Quản lý</title>
	<link rel="icon"href="../images/logo.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/vue.js"></script>
	<link rel="stylesheet" href="../font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../font-awesome/css/all.min.css">
	<link rel="stylesheet" href="../font-awesome/css/brands.min.css">
	<link rel="stylesheet" href="../font-awesome/css/regular.min.css">
	<link rel="stylesheet" href="../font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../font-awesome/css/solid.min.css">
	<link rel="stylesheet" href="../font-awesome/css/v4-shims.min.css">
</head>
<body>
	<div id="wrap">
			<div class="head">
				<img src="../images/logo.png">
				<a href="logout.php">logout</a>
				<ul>
					<li>
						<i class="far fa-bell"></i>
						<span id="notification">0</span>
					</li>
					<li>
						<img class="avatar" src="../images/avatar.jpg">
						<span>xin chào</span>
						<b><?php echo $_SESSION['admin'];?></b>
					</li>
				</ul>
			</div>
		<section class="container">
			<div class="sidebar">
				<ul>
					<li>
						<a href="quanly.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li>
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li class="active">
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<article class="addpart">
					<form action="" method="post" enctype="multipart/form-data">
					 	<legend>Thêm Tập</legend>
					 	<input type="hidden" name="id" value="<?=$id?>" readonly><br>
					 	<label>Tên Phim</label>
					 	<input type="text" name="namefilm" value="<?=$list['name']?>" readonly><br>
					 	<label>Mùa</label>
					 	<select name="season" class="row" required>
					 		<option value="0">Mùa Xuân</option>
					 		<option value="1">Mùa Hè</option>
					 		<option value="2">Mùa Thu</option>
					 		<option value="3">Mùa Đông</option>
					 	</select><br>
					 	<label>Tên tập</label>
					 	<input type="text" name="namepart" placeholder="tên tập" required><br>
					 	<label>Player</label>
					 	<textarea name="player" cols="60" rows="12"></textarea><br>

					 	<input type="submit" name="addpart" value="Thêm Tập" style="width: 100px; padding:0; background-color: #328; color: #fff; margin: 16px 200px;">
						</form>
				</article>


			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
