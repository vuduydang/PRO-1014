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
	$list 	= executeQuery($select);
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
	<link rel="icon"href="../assets/ico.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="../public/font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../public/font-awesome/css/all.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/brands.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/regular.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../public/font-awesome/css/solid.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/v4-shims.min.css">
	
</head>
<body>
	<div id="wrap">
			<div class="head">
				<img src="../assets/logo.png">
				<a href="../user/logout.php"><i class="fas fa-sign-out-alt"></i></a>
				<ul>
					<li>
						<i class="far fa-bell"></i>
						<span id="notification">0</span>
					</li>
					<li>
						<img class="avatar" src="../assets/avatars/avatar.jpg">
						<span>xin chào</span>
						<b>- <?php echo $_SESSION[AUTH_YF]['name'];?></b>
					</li>
				</ul>
			</div>
		<section class="container">
			<div class="sidebar">
				<ul>
					<li>
						<a href="dashboard.php"><i class="fas fa-home"></i>Dashboard</a>
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
					 	<label>Tác giả</label>
					 	<input type="text" name="namefilm" value="<?=$list['author']?>" readonly><br>
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
