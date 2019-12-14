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
                <h3>ĐỔI THÔNG TIN</h3>
                Yêu cầu nhập đầy dủ thông tin bên dưới
            </div>
        </div>

        <div class="user-page-body">
              <form method="POST" action="update_infouser.php">
                <input type="hidden" name="password" value="">
                <div class="form-group">
                    <div class="navbar-form-group">
                        <label>Tên hiển thị</label>
                        <input type="text" name="full_name">
                        <span class="tip"></span>
                    </div>
                    <div class="navbar-form-group">
                        <label>Giới tính</label>
                        <label class="navbar-form-radio">
                            <input type="radio" name="gender" value="1" checked>
                            <span>Nam</span>
                        </label>
                        <label class="navbar-form-radio">
                            <input type="radio" name="gender" value="0">
                            <span>Nữ</span>
                        </label>
                    </div>
                    <label for="email">Sinh nhật:</label>
                        <div class="navbar-form-group birthday">
                        <div class="navbar-form-select day">
                            <label>Ngày sinh</label>
                            <input type="number" name="birthday" min="1" max="31">
                        </div>
                        <div class="navbar-form-select month">
                        <label>Tháng sinh</label>
                            <input type="number" name="birthmonth" min="1" max="12">
                        </div>
                        <div class="navbar-form-select year">
                        <label>Năm sinh</label>
                            <input type="number" name="birthyear" min="1970" max="2010">
                        </div>
                        <span class="tip"></span>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit">Đổi thông tin</button>
                </div>
            </form>
        </div>
    </div>      
    </div> <!-- /container -->



    <div class="floating-action">
    <div class="action-item action-toggle"><i class="icon-up"></i></div>
    
</div>    

    
<script type="text/javascript" src="./public/js/bfilms.js"></script>


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