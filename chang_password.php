<?php
require_once './commons/constants.php';
require_once './commons/db.php';
require_once './commons/helpers.php';
      $value = isset($_GET['search-box']) ? $_GET['search-box'] : "";
      $sqlQuery_films="SELECT * FROM films 
                        WHERE 
                        categories like '%$value%' 
                        OR year LIKE '%$value%' 
                        OR author LIKE '%$value%' 
                        OR series LIKE '%$value%'
                        OR name LIKE '%$value%'
                        ";
      $films = executeQuery($sqlQuery_films, true);
      if (!$films) {
          header("location: ./error.php");
      }
      if(isset($_GET['id'])){
        $id=$_GET['id'];
        $sqlQuery="SELECT * from users where id='$id'";
        $users= executeQuery($sqlQuery, true);
      }
?>
<!DOCTYPE html>
<html lang="vi">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <title>ClipAnime Video & Anime Online</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta name="_token" id="token" value="">
    <meta name="_socket" id="socket" value="6001">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Vietnamese, English" />
    

    
       <link rel="shortcut icon" href="./assets/ico.png" type="image/png" />
    
      <link rel="stylesheet" href="./public/css/home9039.css?id=0cadef886044cb02b356">
  
      <link rel="stylesheet" href="./public/css/style.css">
      <link rel="stylesheet" href="./public/css/user8dbe.css">
</head>
<body>

    <?php include_once"./_share/header.php"; ?>
    <div class="container">
    
        <div class="user-page">

        <div class="user-page-header">
            <div class="user-page-logo"></div>
            <div class="user-page-title">
                <h3>ĐỔI MẬT KHẨU</h3>
                Yêu cầu nhập đầy đủ thông tin bên dưới
            </div>
        </div>

        <div class="user-page-body">
                        <form method="POST" action="update_password.php">
                <input type="hidden" name="password" value="">
                    <div class="form-group">
                    <label for="email">Mật khẩu cũ:</label>
                    <input type="password" required name="password" id="password" value=""><br><br>
                    <label for="email">Mật khẩu mới:</label>
                    <input type="password" required name="password_new" id="password" value=""><br><br>
                    <label for="email">Nhập lại mật khẩu mới:</label>
                    <input type="password" required name="enter_password" id="password" value=""><br>
                </div>
                <div class="form-group">
                    <button type="submit">Đổi mật khẩu</button>
                </div>
            </form>
        </div>
    </div>
      
    </div> <!-- /container -->
    <div class="floating-action">
    <div class="action-item action-toggle"><i class="icon-up"></i></div>
    </div>    

    
    <script type="text/javascript" src="../public/js/bfilms.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-81129102-2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-81129102-2');
    </script>
            
</body>
<!-- Mirrored from clipanime.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 07 Nov 2019 07:01:12 GMT -->
</html>