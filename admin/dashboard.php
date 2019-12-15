<?php
error_reporting(0);
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");


$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

$sqlQuery 	= "SELECT COUNT(*) FROM films";
$countFilms = executeQuery($sqlQuery);

$sqlQuery 	= "SELECT COUNT(*) FROM parts";
$countParts = executeQuery($sqlQuery);

?>


<!-- View -->
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
	
	<script type="text/javascript">
	    if (typeof(Storage) !== "undefined") {
	        sessionStorage.setItem('login', '1');
	        alert("chạy")
	    } else {
	        document.write('Trình duyệt của bạn không hỗ trợ local storage');
	    }
	</script>
</head>
<body>
	<div id="wrap">
			<div class="head">
				<img src="../assets/logo.png">
				<a href="logout.php"><i class="fas fa-sign-out-alt"></i></a>
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
					<li class="active">
						<a href="dashboard.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li>
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
					<li>
						<a href="users.php"><i class="fas fa-chart-line"></i>Quản lý thành viên</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<div class="dashboard">
					<h1>Thống kê phim trên Website</h1>
					<article>
						<i class="fas fa-suitcase"></i>
						<p>Số phim</p>
						<span><?php echo $countFilms[0];?></span>
					</article>
					<article>
						<i class="fas fa-tape"></i>
						<p>Số tập</p>
						<span><?php echo $countParts[0];?></span>
					</article>
				</div>

			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>