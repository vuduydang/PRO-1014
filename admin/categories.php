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
$select = "SELECT * FROM films";
$lists 	= executeQuery($select, true);


// extract($_REQUEST);
// if (isset($_POST['adddm'])) {
// 	$sql	= "INSERT INTO danh_muc(name) VALUES ('$danhmuc')";
// 	$stmt	=$conn -> prepare($sql);
// 	$stmt->execute();
// 	header("location: phanloai.php");
// }
// if (isset($_POST['addloai'])) {
// 	$sql	= "INSERT INTO loai_sp(name) VALUES ('$loai')";
// 	$stmt	=$conn -> prepare($sql);
// 	$stmt->execute();
// 	header("location: phanloai.php");
// }
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
				<a class="logo" href="../"><img class="logo" src="../images/logo.png"></a>
				<a href="../logout.php">logout</a>
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
						<a href="dashboard.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li>
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li class="active">
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
					<li class="active">
						<a href="manager.php"><i class="fas fa-chart-line"></i>Danh mục</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản thành viên</a>
					</li>
				</ul>
			</div>
			<section class="content">
				<article class="category">
					<h4>Thể Loại</h4>
					<ul>
						<li>
							<form action="" method="post">
								<input type="text" name="danhmuc" required placeholder="thêm danh mục">
								<button name="adddm">Thêm</button>
							</form>
						</li>
					<?php
						foreach ($categories as $value) {
					?>
						<li name="cate"><span><?=$value['categories']?></span><a href="#"><i class="fas fa-times"></i></a></li>
					<?php } ?>
					</ul>
				</article>
				<article class="category">
					<h4>Năm</h4>
					<ul>
						<li>
							<form action="" method="post">
								<input type="text" name="loai" required placeholder="thêm thể loại">
								<button name="addloai">Thêm</button>
							</form>
						</li>
					<?php
						foreach ($years as $value) {
					?>
						<li name="year"><span><?=$value['name']?></span><a href="#"><i class="fas fa-times"></i></a></li>
					<?php } ?>
					</ul>
				</article>
				<article class="reviews">
					<table>
						<tr style="border-bottom: 1px solid #328">
							<th>ID</th>
							<th width="200">TÊN PHIM</th>
							<th>ẢNH NHỎ</th>
							<th width="80">TỔNG COMMENT</th>
							<th>COMMENT CUỐI</th>
							<th>TÙY CHỈNH</th>
						</tr>
						<?php
							foreach ($lists as $value) {
								$id 	= $value['id'];
								$count 	= "SELECT COUNT(*) FROM reviews WHERE film_id = '$id'";
								$counts = executeQuery($count)[0];
						?>
						<tr>
							<td><?=$value["id"]?></td>
							<td><?=$value["name"]?> </td>
							<td><img width="60" src="../assets/thumbnails/<?=$value["thumbnail"]?>"></td>
							<td><?=$counts?></td>
							<td><?=$value[""]?></td>
							<td>
								<a href="addpart.php?id=<?=$value['id']?>"><i class="fas fa-plus"></i></a>
								<a href="edit.php?id=<?=$value['id']?>" target="_blank"><i class="fas fa-edit"></i></a>
								<a href="delete.php?id=<?=$value['id']?>" onclick="alert('Bạn chắc chắn muốn xóa phim này?');"><i class="far fa-trash-alt"></i></a>

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