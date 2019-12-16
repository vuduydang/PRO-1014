<?php
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

// show danh mục
$select = "SELECT * FROM categories";
$categories = executeQuery($select, true);
// show thể loại
$select = "SELECT * FROM years";
$years 	= executeQuery($select, true);
// Thống kê comment
$select = "SELECT * FROM films LIMIT 10";
$lists 	= executeQuery($select, true);


extract($_REQUEST);
if (isset($_POST['adddm'])) {
	$sql	= "INSERT INTO categories VALUES (null,'$cate')";
	executeQuery($sql);
	header("location: ./categories.php");
}
if (isset($_POST['addloai'])) {
	$sql	= "INSERT INTO years VALUES (null,'$year')";
	executeQuery($sql);
	header("location: ./categories.php");
}


?>
<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="UTF-8">
	<title>Năm & Thể Loại</title>
	<link rel="icon"href="../assets/ico.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="../public/font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../public/font-awesome/css/all.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/brands.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/regular.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/svg-with-js.css">
	<link rel="stylesheet" href="../public/font-awesome/css/solid.min.css">
	<link rel="stylesheet" href="../public/font-awesome/css/v4-shims.min.css">

	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
	<div id="wrap">
			<div class="head">
				<img src="../assets/logo.png">
				<a href="../"><i class="fas fa-sign-out-alt"></i></a>
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
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
					<li class="active">
						<a href="categories.php"><i class="fas fa-chart-line"></i>Danh mục & Comment</a>
					</li>
					<li>
						<a href="users.php"><i class="fas fa-chart-line"></i>Quản thành viên</a>
					</li>
				</ul>
			</div>
			<section class="content">
				<article class="category">
					<h4>Thể Loại</h4>
					<ul>
						<li>
							<form action="" method="post" autocomplete="off">
								<input type="text" name="cate" required placeholder="thêm thể loại">
								<button name="adddm">Thêm</button>
							</form>
						</li>
					<?php
						foreach ($categories as $value) {
					?>
						<li name="cate"><span><?=$value['categories']?></span><a href="./router/del-cate.php?empty=cate&id=<?=$value['id']?>"><i class="fas fa-times"></i></a></li>
					<?php } ?>
						<li><a href="#"><i class="fas fa-chevron-circle-down"></i></a></li>
					</ul>
				</article>
				<article class="category">
					<h4>Năm</h4>
					<ul>
						<li>
							<form action="" method="post" autocomplete="off">
								<input type="text" name="year" required placeholder="thêm năm">
								<button name="addloai">Thêm</button>
							</form>
						</li>
					<?php
						foreach ($years as $value) {
					?>
						<li name="year"><span><?=$value['name']?></span><a href="./router/del-cate.php?empty=year&id=<?=$value['id']?>"><i class="fas fa-times"></i></a></li>
					<?php } ?>
						<li><a href="#"><i class="fas fa-chevron-circle-down"></i></a></li>
					</ul>
				</article>
				<article class="reviews">
					<table>
						<tr style="border-bottom: 1px solid #328">
							<th>ID</th>
							<th width="200">TÊN PHIM</th>
							<th>ẢNH NHỎ</th>
							<th width="80">TỔNG COMMENT</th>
							<th width="150">COMMENT CUỐI</th>
							<th>Chi Tiết</th>
						</tr>
						<?php
							foreach ($lists as $value) {
								$id 	= $value['id'];
								$count 	= "SELECT COUNT(*) FROM reviews WHERE film_id = '$id'";
								$counts = executeQuery($count)[0];

								$select	= "SELECT * FROM reviews WHERE film_id = '$id'";
								$date	= executeQuery($select)['date'];
						?>
						<tr>
							<td><?=$value["id"]?></td>
							<td><?=$value["name"]?> </td>
							<td><img width="60" src="../assets/thumbnails/<?=$value["thumbnail"]?>"></td>
							<td><?=$counts?></td>
							<td><?=$date?></td>
							<td>
								<a href="detail-Comment.php?id=<?=$value['id']?>"><i class="fas fa-plus"></i></a>
							</td>
						</tr>
						<?php } ?>
					</table>
				</article>
			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>