<?php
require("../commons/db.php");
session_start();
// if (isset($_SESSION['admin'])==false) {
// 	header("location: index.php");
// }
if (isset($_POST['add'])) {
	
	// --------------//
	extract($_REQUEST);
	if ($_FILES['avatar']['name'] != "") {
		$avatar = time().$_FILES['avatar']['name'];

		move_uploaded_file($_FILES['avatar']['tmp_name'], "../images/".$avatar);
	}else {
		$avatar = "null.png";
	}
$folder1=preg_replace('/([^\pL\.\ ]+)/u', '', strip_tags($namefilm)); //xóa kí tự đặc biệt trong chuỗi
$folder =preg_replace('([\s]+)', '-', strip_tags($folder1)); //xóa khoảng trắng

	$insert 	= "INSERT INTO films_db VALUES 
	(NULL,:name,:avatar,:kind,:year,:time,:content,:parts,'0',:type,:season,:link,'0')";
	$stmt		= $conn->prepare($insert);
	$stmt->bindParam(':name',$namefilm);
	$stmt->bindParam(':avatar',$avatar);
	$stmt->bindParam(':kind',$kinds);
	$stmt->bindParam(':year',$year);
	$stmt->bindParam(':time',$times);
	$stmt->bindParam(':content',$content);
	$stmt->bindParam(':parts',$parts);
	$stmt->bindParam(':type',$types);
	$stmt->bindParam(':season',$season);
	$link = "$folder".$parts."/xemphim.html";
	$stmt->bindParam(':link',$link);
	$stmt->execute();

	// $creatFolder = "../films/".$folder;
	// $files 		= "../".$link;
	if ($stmt->rowCount()>0) {
		// mkdir($creatFolder,0777,true); //tạo folder
		// file_put_contents($files,''); //tạo file theo tập phim
		header("location: dashboard.php");
	}else {
		echo '<script>alert("Thêm Thấi Bại");</script>';
	}
}
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
	<script src="js/nicEdit-latest.js" type="text/javascript"></script>
	<script type="text/javascript">bkLib.onDomLoaded(nicEditors.allTextAreas);</script>
						
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
						<a href="dashboard.php"><i class="fas fa-home"></i>Dashboard</a>
					</li>
					<li class="active">
						<a href="addfilms.php"><i class="fas fa-plus"></i>Thêm Phim</a>
					</li>
					<li>
						<a href="manager.php"><i class="fas fa-chart-line"></i>Quản lý phim</a>
					</li>
				</ul>
			</div>
			<section class="content">
				
				<div class="addfilms">
	<article class="addfilm">
		<form action="addfilms.php" method="post" enctype="multipart/form-data">
			 	<legend>Thêm phim</legend>
			<div class="left">
			 	<label>Tên Phim</label>
			 	<input type="text" name="namefilm" placeholder="tên phim" required><br>
			 	<label>Phần</label>
			 	<input type="number" name="parts" placeholder="vd: 1" required class="row" style="width: 80px;"><br>
			 	<label>Thể loại</label>
			 	<input type="text" name="kinds" placeholder="thể loại" required class="row"><br>
			 	<label>Phim Bộ/Movie</label>
			 	<select name="types" class="row" required>
			 		<option value="0">Phim Bộ</option>
			 		<option value="1">Movie</option>
			 	</select><br>
			 	<label>Mùa</label>
			 	<select name="season" class="row" required>
			 		<option value="0">Mùa Xuân</option>
			 		<option value="1">Mùa Hè</option>
			 		<option value="2">Mùa Thu</option>
			 		<option value="3">Mùa Đông</option>
			 	</select><br>
			 	<label>Năm phát hành</label>
			 	<input type="text" name="year" placeholder="năm sản xuất" required class="row"><br>
			 	<label>Độ dài phim</label>
			 	<input type="text" name="times" placeholder="thời lượng phim" required  style="width: 80px;"><br>
			 	<label>Avatar phim</label>
			 	<input type="file" name="avatar" style="width: 160px;height: 22px; padding:0;">
			</div>
			<div class="right" style="border-left: 1px solid #999">
			 	<label>Nội Dung</label>
			 	<textarea name="content" cols="62" rows="14"></textarea><br>
			</div>
		 	<input type="submit" name="add" value="Thêm Phim" style="width: 100px; padding:0; background-color: #328; color: #fff; margin: 16px 160px;">
		</form>
	</article>

</div>

			</section> <!-- section content -->
		</section> <!--section container-->
	</div>
	<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
