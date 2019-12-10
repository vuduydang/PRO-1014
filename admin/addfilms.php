<?php
// error_reporting(0);
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
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
	<!-- <script src="js/jquery-ui.min.js" type="text/javascript"></script> -->
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/nicEdit-latest.js" type="text/javascript"></script>
	<!-- <script type="text/javascript">bkLib.onDomLoaded(nicEditors.allTextAreas);</script> -->
						
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
					<li>
						<a href="dashboard.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li class="active">
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản thành viên</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<div class="addfilms">
					<h2>Thêm phim</h2>
					<form action="./push-films.php" method="post" enctype="multipart/form-data">
						<div class="left">
							<div><p>Tên Phim : </p><input type="text" name="name" placeholder="HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY"></div>
							<div><p>Thể Loại : </p><input type="text" name="categories" placeholder="Hành Động, Viễn Tưởng, ..."></div>
							<div><p>Đạo diễn : </p><input type="text" name="author" placeholder="Steve Kloves"></div>
							<div class="col-2">
								<p>Series : </p><input type="text" name="series" placeholder="Harry Potter">
								<p>Năm : </p><input type="text" name="year" placeholder="2001">
							</div>
							<div class="col-2">
								<p>Trạng thái : </p>
								<select name="status">
									<option value="Hoàn thành">Hoàn Thành</option>
									<option value="Đang chiếu">Đang Chiếu</option>
									<option value="Sắp chiếu">Sắp Chiếu</option>
								</select>
							</div>
							<div class="col-2">
								<div class="browser-upload">
									<i class="title-browser-upload">Thumbnail</i>
									<input type="file" class="file" name="thumbnail">
									<span class="browser"><i class="fas fa-cloud-upload-alt"></i></span>
								</div>
								<div class="browser-upload">
									<i class="title-browser-upload">Banner</i>
									<input type="file" class="file" name="banner">
									<span class="browser"><i class="fas fa-cloud-upload-alt"></i></span>
								</div>
							</div>
						</div>
						<div class="right">
							<p>Nội Dung</p>
							<textarea name="content" placeholder="Contnets"></textarea>
						</div>
						<div class="button">
							<button>SUBMIT</button>
						</div>
					</form>
				</div>

			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
