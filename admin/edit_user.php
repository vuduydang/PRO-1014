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
    $id     = $_GET['id'];
    $select = "SELECT * FROM users WHERE id='$id'";
    $list   = executeQuery($select);
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
                    <li>
                        <a href="categories.php"><i class="fas fa-chart-line"></i>Danh mục & Comment</a>
                    </li>
                    <li class="active">
                        <a href="users.php"><i class="fas fa-chart-line"></i>Quản lý thành viên</a>
                    </li>
                </ul>
            </div>
            <section class="content">

                <form action="chang_user.php" method="post" enctype="multipart/form-data">
                    <div class="addfilms">
                    <h2>Sửa thông tin</h2>
                        <div class="left">
                            <input type="hidden" name="id" value="<?=$id?>" readonly><br>
                            <div><p>Tên Người Dùng : </p><input type="text" name="name" readonly value="<?=$list['name']?>"></div>
                            <div><p>Phân Quyền : </p><input type="text" name="role_id" readonly value="<?=$list['role_id']?>"></div>
                            <div class="col-2">
                                <br>
                                <tr>
                                    <td><input type="radio" name="role_id" value="-1" style="float: left;"><p>Khóa</p></td><br>
                                    <td><input type="radio" name="role_id" value="0" style="float: left;"><p>Thành Viên</p></td><br>
                                    <td><input type="radio" name="role_id" value="1" style="float: left;"><p>Quản trị viên</p></td><br>
                                </tr>
                            </div>
                        </div>
                        <div class="right"></div>
                        <div class="button" id="push-part">
                            <button type="submit" name="chang_user">SUBMIT</button>
                        </div>
                </div>
                </form>
            
                <div class="loader"></div>

            </section> <!-- section content -->
        </section> <!--section container-->
    </div>
    <script type="text/javascript" src="js/admin.js"></script>
</body>
</html>
