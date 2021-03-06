<?php
session_start();
require_once("../commons/constants.php");
require_once("../commons/db.php");
require_once("../commons/helpers.php");

$session = isset($_SESSION[AUTH_YF]) ? $_SESSION[AUTH_YF] : "";
if (empty($_SESSION[AUTH_YF]) || $session['role_id'] != 1) {
	header("location:".BASE_URL."/admin/");
}

$select = "SELECT * FROM films ORDER BY id DESC";
 $lists = executeQuery($select, true);
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
					<li class="active">
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
					<li>
						<a href="categories.php"><i class="fas fa-chart-line"></i>Danh mục & Comment</a>
					</li>
					<li>
						<a href="users.php"><i class="fas fa-chart-line"></i>Quản thành viên</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<table class="manager">
					<tr style="border-bottom: 1px solid #328">
						<th width="60">ID</th>
						<th width="300">TÊN</th>
						<th width="260">THỂ LOẠI</th>
						<th width="100">NĂM</th>
						<th width="100">THỜI LƯỢNG</th>
						<th width="100">LƯỢT XEM</th>
						<th width="100">TÙY CHỈNH</th>
					</tr>
					<?php
						foreach ($lists as $value) {
							$id 	= $value['id'];
							$count 	= "SELECT COUNT(*) FROM parts WHERE film_id = '$id'";
							$counts = executeQuery($count)[0];
					?>
					<tr>
						<td><?=$value["id"]?></td>
						<td><?=$value["name"]?> </td>
						<td><?=$value["categories"]?></td>
						<td><?=$value["year"]?></td>
						<td><?=$counts?> /
							<?php if ($value['status']=='Hoàn thành') {
								echo $counts;
							}else{echo "??";} ?>
						</td>
						<td><?=$value["views"]?></td>
						<td>
							<a href="addpart.php?id=<?=$value['id']?>"><i class="fas fa-plus"></i></a>
							<a href="edit.php?id=<?=$value['id']?>" target="_blank"><i class="fas fa-edit"></i></a>
							<a href="./router/delete.php?id=<?=$value['id']?>" onclick="confirm('Bạn chắc chắn muốn xóa phim này?')==true;"><i class="far fa-trash-alt"></i></a>

						</td>
					</tr>
					<?php } ?>
				</table>


			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
	