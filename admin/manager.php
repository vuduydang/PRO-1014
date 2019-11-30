<?php
require("../config.php");
session_start();
if (isset($_SESSION['admin'])==false) {
	header("location: index.php");
}
?>
<?php
$select = "SELECT * FROM films_db";
$stmt 	= $conn->prepare($select);
$stmt->execute();
$lists	= $stmt->fetchALL(PDO::FETCH_ASSOC);

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
				
				<table>
					<tr style="border-bottom: 1px solid #328">
						<td>ID</td>
						<td>TÊN</td>
						<td>NỘI DUNG</td>
						<td>THỂ LOẠI</td>
						<td>NĂM</td>
						<td>THỜI LƯỢNG</td>
						<td>PHẦN</td>
						<td>SÔ TẬP</td>
						<td>LƯỢT XEM</td>
						<td>TÙY CHỈNH</td>
					</tr>
					<?php
						foreach ($lists as $value) {
							$stmt=$conn->prepare("SELECT COUNT(*) FROM part_films_db WHERE id_film = :id");
							$stmt->bindParam('id',$value["id"]);
							$stmt->execute();
							$count = $stmt->fetch();
							$counts = $count[0];
					?>
					<tr>
						<td><?=$value["id"]?></td>
						<td><input type="text" value="<?=$value["name"]?>"></td>
						<td><textarea readonly style="border: none; width: 100%"><?=$value["content"]?></textarea></td>
						<td><input type="text" value="<?=$value["kind"]?>"></td>
						<td><?=$value["year"]?></td>
						<td><?=$value["time"]?></td>
						<td><?=$value["parts"]?></td>
						<td><?=$counts?></td>
						<td><?=$value["views"]?></td>
						<td>
							<a href="addpart.php?id=<?=$value['id']?>"><i class="fas fa-plus"></i></a>
							<a href="edit.php?id=<?=$value['id']?>" target="_blank"><i class="fas fa-edit"></i></a>
							<a href="delete.php?id=<?=$value['id']?>" onclick="alert('Bạn chắc chắn muốn xóa phim này?');"><i class="far fa-trash-alt"></i></a>

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
	