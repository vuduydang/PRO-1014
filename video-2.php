<?php
        require_once './commons/constants.php';
        require_once './commons/db.php';
        require_once './commons/helpers.php';
            if (isset($_GET['categories'])) {
                $get_categories=$_GET['categories'];
                $sqlQuery_categories="SELECT * FROM categories WHERE categories ='$get_categories'";
                $categories = executeQuery($sqlQuery_categories, true);
                $sqlQuery_films="SELECT * FROM films WHERE categories like '%$get_categories%'";
                $films = executeQuery($sqlQuery_films, true);
                // $films=$connect->prepare($films);
                // $films=$connect->query($films);
}
            ?>
<!DOCTYPE html>
<html lang="vi">

<!-- Mirrored from clipanime.com/video by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 07 Nov 2019 07:01:16 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<title>Video ClipAnime</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta name="_token" id="token" value="">
    <meta name="_socket" id="socket" value="6001">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Vietnamese, English" />



    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./public/css/home9039.css">

    <meta name="description" content="Trang video anime hot nhất Việt Nam" />
    <meta name="keywords" content="clip anime, nhạc anime, AMV, hài hước, trailer, video anime" />

    <!-- Facebook Metadata /-->
    <meta property="fb:app_id" content="362811147450608" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="video-2.html" />
    <meta property="og:description" content="Trang video anime hot nhất Việt Nam" />
    <meta property="og:title" content="Video ClipAnime" />
    <meta property="og:site_name" content="ClipAnime" />
    <meta property="og:type" content="video.html" />

    <!-- Google+ Metadata /-->
    <meta itemprop="name" content="Video ClipAnime" />
    <meta itemprop="description" content="Trang video anime hot nhất Việt Nam" />
    <meta itemprop="image" content="" />

    <!-- Google webmaster tools verification -->
    <meta name="google-site-verification" content="X6wTJolQe36XUJJeyIxqPMs9YJ0dqJXfDdy1yksGNhA" />
    <!-- Bing verification -->
    <meta name="msvalidate.01" content="C21FDE84CE65ABA807746F89A0D2964C" />

    <link rel="stylesheet" href="css/home9039.css?id=0cadef886044cb02b356">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

    <header>
        <nav class="navbar">
           <div class="navbar-container">
             <div class="navbar-header">
                <div class="navbar-brand">
                   <a class="logo" href="index.html">
                      <img src="assets/img/logo.png" alt="ClipAnime.Com">
                  </a>
              </div>
              <div class="navbar-menu-toggle" id="navbar-toggle">
               <i class="icon-menu"></i>
           </div>
           <div class="navbar-header-user">
               <div class="user-login user-avatar" id="user-avatar">
                   <i class="icon-person"></i>
               </div>
           </div>
       </div>
       <div class="navbar-left" id="navbar-left">

        <div class="navbar-search">
           <div class="search-box">
              <input type="text" name="search-box" placeholder="Tìm kiếm anime/video">
              <i class="icon icon-search"></i>
          </div>
          <div class="search-result" id="search-result">
              <div class="result-body"></div>
              <div class="result-noitem hidden"></div>
              <div class="loading hidden"></div>
          </div>
      </div>

      <!--  MENU -->
<!-- <div class="navbar-menu">
  <ul class="nav">
    <li class="dropdown navbar-menu-item">
      <a class="menu-item" href="?">Phim Mới</a>
      <ul class="toggle">
        <li><a class="menu-item" href="video-2.php">Anime Mới</a></li>
        <li><a class="menu-item" href="video-2.php">Video Mới</a></li>
    </ul>
</li>
<li class="dropdown navbar-menu-item">
  <a class="navbar-menu-item" href="?">Năm</a>
  <ul class="toggle">
    <li><a class="menu-item" href="#">2018</a></li>
    <li><a class="menu-item" href="#">2019</a></li>
</ul>
</li>
<li class="dropdown navbar-menu-item">
  <a class="menu-item" href="?">Thể loại</a>
  <ul class="toggle">
    <li><a class="menu-item" href="#">Hành động</a></li>
    <li><a class="menu-item" href="#">Lãng Mạn</a></li>
    <li><a class="menu-item" href="#">Kinh dị</a></li>
</ul>
</li>
</ul>
</div> -->
<?php include_once"./_share/header.php"; ?>
<link rel="shortcut icon" href="./assets/ico.png" type="image/png" />

<link rel="stylesheet" href="./public/css/home9039.css?id=0cadef886044cb02b356">

<link rel="stylesheet" href="./public/css/style.css">



<div class="navbar-close">
   <i class="icon-close"></i>
</div>
</div>
<div class="navbar-right" id="navbar-right">
    <div class="navbar-user navbar-user-header">
        <div class="user-avatar big-avatar">
            <i class="icon-person"></i>
        </div>
        <div class="navbar-user-welcome">
            <span>Chào khách!</span>
        </div>
        <div class="navbar-user-tab">
            <div class="navbar-user-tab-item navbar-tab-login activated" data-tab="login">Đăng nhập</div>
            <div class="navbar-user-tab-item navbar-tab-signup" data-tab="signup">Đăng ký</div>
        </div>
    </div>

    <div class="navbar-user-body tab-login">
        <div class="navbar-form-group">
            <label>Tên đăng nhập</label>
            <input type="text" name="username">
            <i class="icon icon-person"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label>Mật khẩu</label>
            <input type="password" name="password">
            <i class="icon icon-lock"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label class="navbar-form-checkbox">
                <input type="checkbox" name="remember" checked>
                <span>Ghi nhớ</span>
            </label>
            <a href="quen-mat-khau.html" class="forgot-password">Quên mật khẩu</a>
        </div>
        <div class="navbar-form-group hidden">
            <ul id="form-login-warning"></ul>
        </div>
        <div class="navbar-form-group submit">
            <input class="vuighe" id="login" type="button" name="submit" value="Đăng nhập">
        </div>
        <hr>
        <div class="navbar-form-group">
            <a class="social-login" href="https://www.facebook.com/v3.0/dialog/oauth?client_id=196545913738468&amp;redirect_uri=https%3A%2F%2Fclipanime.com%2Fdang-nhap-facebook%2Fcallback&amp;scope=email&amp;response_type=code&amp;state=KRq1QETYax5qzoVlHxUB4ADTw3u5o1clwT5BsxUe">
                <input type="button" class="facebook" value="Đăng nhập với Facebook">
                <i class="icon icon-facebook"></i>
            </a>
        </div>
        <div class="navbar-form-group">
            <a class="social-login" href="https://accounts.google.com/o/oauth2/auth?client_id=753633937173-6ot0fvct80pi5n8t3q06p4ctrc7ip3k8.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fclipanime.com%2Fdang-nhap-google%2Fcallback&amp;scope=openid+profile+email&amp;response_type=code&amp;state=nlU0PXh7qUcMHPCRh2Xq8LhJxew3hMhTMiiVjPKq">
                <input type="button" class="google" value="Đăng nhập với Google">
                <i class="icon icon-google"></i>
            </a>
        </div>
    </div>

    <div class="navbar-user-body tab-signup">
        <div class="navbar-form-group">
            <label>Tên đăng nhập</label>
            <input type="text" name="username">
            <i class="icon icon-person"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label>Mật khẩu</label>
            <input type="password" name="password">
            <i class="icon icon-lock"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label>Nhập lại mật khẩu</label>
            <input type="password" name="password_confirm">
            <i class="icon icon-lock"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label>Tên hiển thị</label>
            <input type="text" name="full_name">
            <i class="icon icon-comment"></i>
            <span class="tip"></span>
        </div>
        <div class="navbar-form-group">
            <label>Email</label>
            <input type="text" name="email">
            <i class="icon icon-email"></i>
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
        <div class="navbar-form-group hidden">
            <ul id="form-signup-warning"></ul>
        </div>
        <div class="navbar-form-group submit">
            <input class="vuighe" id="signup" type="button" name="submit" value="Đăng ký">
        </div>
    </div>
    <div class="loading hidden"></div>
    <div class="navbar-close">
       <i class="icon-close"></i>
   </div>
</div>
</div>





</nav>
</header>

<div class="container">
  <?php foreach ($films as $film): ?>
    <section class="tray video-page">
      <div class="tray-title">
        <a href="javascript:void(0)"><i class="icon icon-right"></i></a>
      </div>
      <div class="tray-content">
        <div class="video-item">
          <a href="video/176994.html">
            <img class="video-item-thumbnail" src="./assets/img/<?php echo $film['thumbnail']?>" data-src="https://i.imacdn.com/ca/2019/06/23/3c2294ad27249435_76fc90c131fea8a4_15937156124805933.jpg" alt="">
            <div class="video-item-title"><a><?php echo $film['name']?></a></div>
            <div class="video-item-duration"><?php echo $film['author']?></div>
            <div class="video-item-play-button">
              <i class="icon-play"></i>
            </div>
          </a>
          <div class="video-item-views"><?php echo $film['views'] ?></div>
        </div>  
      </div>
    <?php endforeach ?>
      <div class="loading hidden"></div>
      <div class="tray-more">xem thêm</div>
    </section>  







</div> <!-- /container -->



<div class="floating-action">
	<div class="action-item action-toggle"><i class="icon-up"></i></div>
	
</div>    


<script type="text/javascript" src="js/blist7a34.js?id=3981eb50381dfa03b036"></script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-81129102-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-81129102-2');
</script>
<div id="balloon">


    <script type="text/javascript">
       var _avlVar = _avlVar || [];
       _avlVar.push(["844e3b44c6ca44368dd07b5871b5dea9","[yo_page_url]","[width]","[height]"]);
   </script>
   <script type="text/javascript" src="../ss.yomedia.vn/js/yomedia-sdk30f4.js?v=3" id="s-844e3b44c6ca44368dd07b5871b5dea9"></script>
</div>
<script type="text/javascript" async defer src="../ss.yomedia.vn/js/ads.js"></script>

</body>

<!-- Mirrored from clipanime.com/video by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 07 Nov 2019 07:01:21 GMT -->
</html>