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

	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	
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

				<div class="addfilms">
					<h2>Thêm Tập</h2>
						<div class="left">
					 		<input type="hidden" name="film_id" value="<?=$id?>" readonly><br>
							<div><p>Tên Phim : </p><input type="text" name="name" readonly value="<?=$list['name']?>"></div>
							<div><p>Tác Giả : </p><input type="text" name="author" readonly value="<?=$list['author']?>"></div>
								<p>Tên Tập : </p><input type="text" name="name_part" placeholder="vd: Tập 1 ahihi">
							<div class="col-2">
								<!-- <p>Player : </p><input type="text" name="player" placeholder="vd: Tập 1 ahihi"> -->
								<p>Trạngthái:</p>
								<select name="status">
									<option value="Hoàn thành">Hoàn Thành</option>
									<option value="Đang chiếu">Đang Chiếu</option>
									<option value="Sắp chiếu">Sắp Chiếu</option>
								</select>
							</div>
							<div class="col-2">
								<div class="browser-upload" style="left: 220px;">
									<i class="title-browser-upload">Tải phim lên</i>
									<input type="file" class="file" name="file_film">
									<span class="browser"><i class="fas fa-cloud-upload-alt"></i></span>
								</div>
							</div>
						</div>
						<div class="right">
							<div class="loader"></div>
						</div>
						<div class="button" id="push-part">
							<button>SUBMIT</button>
						</div>
				</div>


			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
