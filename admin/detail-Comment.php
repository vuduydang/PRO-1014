<?php
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

$id = $_GET['id'];
// Thống kê comment
$select = "SELECT * FROM reviews WHERE film_id = '$id'";
$lists 	= executeQuery($select, true);


// extract($_REQUEST);
// if (isset($_POST['adddm'])) {
// 	$sql	= "INSERT INTO categories VALUES (null,'$cate')";
// 	executeQuery($sql);
// 	header("location: ./categories.php");
// }
// if (isset($_POST['addloai'])) {
// 	$sql	= "INSERT INTO years VALUES (null,'$year')";
// 	executeQuery($sql);
// 	header("location: ./categories.php");
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
				<article class="reviews">
					<table style="margin: auto;">
						<tr style="border-bottom: 1px solid #328">
							<th>ID</th>
							<th width="200">TÊN USER</th>
							<th>NỘI DUNG</th>
							<th width="160">THỜI GIAN</th>
							<th>DEL</th>
						</tr>
						<?php
							foreach ($lists as $value) {
								$id 	= $value['user_id'];
								$ifo 	= "SELECT * FROM users WHERE id = '$id'";
								$ifos = executeQuery($ifo);
						?>
						<tr>
							<td><?=$value["user_id"]?></td>
							<td><?=$ifos['name']?></td>
							<td><?=$value["content"]?> </td>
							<td><?=$value["date"]?></td>
							<td><a href="delete_comment.php?id=<?php echo $value['id'] ?>" onclick="return confirm('Bạn có thực sự muốn xóa không ?')">x</a></td>
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