<?php
session_start();
    $sqlQuery ="SELECT * from categories";
    $categories = executeQuery($sqlQuery, true);

    $sqlQuery ="SELECT * from years";
    $years=executeQuery($sqlQuery, true);
    
    $sqlQuery ="SELECT * from users WHERE id";
    $users=executeQuery($sqlQuery, true);
?>

<head>
    <link rel="stylesheet" href="./public/css/style.css">
    <script type="text/javascript" src="./public/js/jquery.min.js"></script>
    <script type="text/javascript" src="./public/js/jquery-ui.min.js"></script>
    <!-- <script type="text/javascript">const LoginSuccess = 0;</script> -->
</head>
<?php if (empty($_SESSION[AUTH_YF])) { ?>
<header>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-header">
                <div class="navbar-brand">
                    <a class="logo" href="index.php">
                        <img src="assets/logo.png" alt="YFilms.Com">
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
                    <form action="video.php">
                        <div class="search-box">
                            <input type="text" name="search-box" placeholder="Tìm kiếm anime/video">
                            <button><i class="icon icon-search"></i></button>
                        </div>
                    </form>
                    <div class="search-result" id="search-result">
                        <div class="result-body"></div>
                        <div class="result-noitem hidden"></div>
                        <div class="loading hidden"></div>
                    </div>
                </div>

                <!--  MENU -->
                <div class="navbar-menu">
                  <ul class="nav">
                    <li class="dropdown navbar-menu-item">
                      <a class="menu-item" href="index.php">Trang chủ</a>
                    </li>
                    <li class="dropdown navbar-menu-item">
                      <a class="navbar-menu-item" href="#">Năm</a>
                        <ul class="toggle">
                        <?php foreach ($years as $value) : ?>
                            <li><a class="menu-item" href="video.php?search-box=<?=$value['name']?>"><?=$value['name']?></a></li>
                        <?php endforeach ?>
                        </ul>
                    </li>
                <li class="dropdown navbar-menu-item">
                        <a class="menu-item" href="#">Thể loại</a>
                        <ul class="toggle">
                        <?php foreach ($categories as $value): ?>
                            <li><a class="menu-item" href="video.php?search-box=<?=$value['categories']?>"><?php echo $value['categories']?></a></li>
                        <?php endforeach ?>
                        </ul>
                </li>
                  </ul>
                </div>

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
            </div>

            <form action="" method="post">
                <div class="navbar-user-body tab-signup">
                    <div class="navbar-form-group">
                        <label>Tên đăng nhập</label>
                        <input type="text" name="username-1">
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
            </form>
            </div>
        </div>
        

    </nav>
</header>

<?php  }else { 

$auth_yf = $_SESSION[AUTH_YF];

?>
<header>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-header">
                <div class="navbar-brand">
                    <a class="logo" href="index.php">
                        <img src="assets/logo.png" alt="YFilms.Com">
                    </a>
                </div>
                <div class="navbar-menu-toggle" id="navbar-toggle">
                    <i class="icon-menu"></i>
                </div>
                <div class="navbar-header-user">
                    <img class="user-avatar" id="user-avatar" src="./assets/avatars/<?=$auth_yf['avatar']?>"></img>

                    <div class="user-theme" id="user-theme">
                        <i class="icon-sunny"></i>
                    </div>
                </div>
            </div>
            <div class="navbar-left" id="navbar-left">

                <div class="navbar-search">
                    <form action="video.php">
                        <div class="search-box">
                            <input type="text" name="search-box" placeholder="Tìm kiếm anime/video">
                            <button><i class="icon icon-search"></i></button>
                        </div>
                    </form>
                    <div class="search-result" id="search-result">
                        <div class="result-body"></div>
                        <div class="result-noitem hidden"></div>
                        <div class="loading hidden"></div>
                    </div>
                </div>
                
                <!--  MENU -->
                <div class="navbar-menu">
                  <ul class="nav">
                    <li class="dropdown navbar-menu-item">
                      <a class="menu-item" href="index.php">Trang chủ</a>
                    </li>
                    <li class="dropdown navbar-menu-item">
                      <a class="navbar-menu-item" href="#">Năm</a>
                        <ul class="toggle">
                        <?php foreach ($years as $value) : ?>
                            <li><a class="menu-item" href="video.php?search-box=<?=$value['name']?>"><?=$value['name']?></a></li>
                        <?php endforeach ?>
                        </ul>
                    </li>
                <li class="dropdown navbar-menu-item">
                        <a class="menu-item" href="#">Thể loại</a>
                        <ul class="toggle">
                        <?php foreach ($categories as $value): ?>
                            <li><a class="menu-item" href="video.php?search-box=<?=$value['categories']?>"><?php echo $value['categories']?></a></li>
                        <?php endforeach ?>
                        </ul>
                </li>
                  </ul>
                </div>

                <div class="navbar-close">
                    <i class="icon-close"></i>
                </div>
            </div>
            <div class="navbar-right" id="navbar-right">
                <div class="navbar-user navbar-user-header">
                    <div class="user-avatar big-avatar">
                        <img src="./assets/avatars/<?=$auth_yf['avatar']?>"></img>
                        <div class="user-avatar-update"><i class="icon-images"></i></div>
                        <input class="user-avatar-file" id="avatar-upload" type="file" name="avatar_file" accept="image/*">
                    </div>
                    <div class="navbar-user-welcome">
                        <span>Chào Vũ Duy Đăng!</span>
                        <input id="user-id" type="hidden" value="550373">
                        <input id="user-v" type="hidden" value="10">
                        <input id="user-date" type="hidden" value="2019-11-06 23:31:44">
                    </div>
                    <div class="navbar-user-tab">
                        <div class="navbar-user-tab-item navbar-tab-information activated" data-tab="information">Thông tin</div>
                        <div class="navbar-user-tab-item navbar-tab-notification hidden" data-tab="notification">Thông báo</div>

                    </div>
                </div>
                <div class="navbar-user-body tab-information">
                    <div class="navbar-user-content">

                        <div class="user-item">
                            <a href="chang_infouser.php">
                                <i class="icon icon-edit"></i>
                                Sửa thông tin
                            </a>
                        </div>
                        <?php foreach ($users as $value): ?>
                            <div class="user-item">
                            <a href="chang_password.php?id=<?=$value['id']?>">
                                <i class="icon icon-unlock"></i>
                                Đổi mật khẩu
                            </a>
                        </div>
                        <?php endforeach ?>
                        <hr>



                        <div class="logout user-item" id="logout">
                            <i class="icon icon-power"></i>
                            Đăng xuất
                        </div>

                    </div>
                </div>

                <div class="navbar-user-body tab-notification">
                    <div class="notification-list"></div>
                    <div class="notification-none hidden"></div>
                    <div class="notification-more hidden">xem thêm</div>

                </div>



                <div class="loading hidden"></div>
                <div class="navbar-close">
                    <i class="icon-close"></i>
                </div>
            </div>
        </div>
        



        
    </nav>
</header>

<?php } ?>