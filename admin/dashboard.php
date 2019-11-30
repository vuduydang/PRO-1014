<?php
error_reporting(0);
?>


<!-- View -->
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
					<li class="active">
						<a href="quanly.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li>
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<div class="dashboard">
					<h1>Thống kê phim trên Website</h1>
					<article>
						<i class="fas fa-suitcase"></i>
						<p>Số phim</p>
						<span><?php echo $countFilms;?></span>
					</article>
					<article>
						<i class="fas fa-tape"></i>
						<p>Số tập</p>
						<span><?php echo $countParts;?></span>
					</article>
				</div>

			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>