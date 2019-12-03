<header>
    <nav class="navbar">
    	<div class="navbar-container">
			<div class="navbar-header">
				<div class="navbar-brand">
					<a class="logo" href="index.php">
						<img src="assets/logo.png" alt="ClipAnime.Com">
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
				<div class="navbar-menu">
          <ul class="nav">
            <li class="dropdown navbar-menu-item">
              <a class="menu-item" href="index.php">Trang chủ</a>
            </li>
            <li class="dropdown navbar-menu-item">
              <a class="menu-item" href="?">Phim Mới</a>
              <ul class="toggle">
                <li><a class="menu-item" href="anime.html">Anime Mới</a></li>
                <li><a class="menu-item" href="video-2.html">Video Mới</a></li>
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
    <form action="./admin/index.php" method="post" >
        <div class="navbar-form-group">
            <label>Tên đăng nhập</label>
            <input type="text" name="user">
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
            <input class="vuigshe" type="button" name="sigin" value="Đăng nhập">
        </div>
        <!-- <hr>
        <div class="navbar-form-group">
            <a class="social-login" href="https://www.facebook.com/v3.0/dialog/oauth?client_id=196545913738468&amp;redirect_uri=https%3A%2F%2Fclipanime.com%2Fdang-nhap-facebook%2Fcallback&amp;scope=email&amp;response_type=code&amp;state=duIRta4fvKtoBol8WZlKHk3H2R3gCDGxfGVkxnQV">
                <input type="button" class="facebook" value="Đăng nhập với Facebook">
                <i class="icon icon-facebook"></i>
            </a>
        </div>
        <div class="navbar-form-group">
            <a class="social-login" href="https://accounts.google.com/o/oauth2/auth?client_id=753633937173-6ot0fvct80pi5n8t3q06p4ctrc7ip3k8.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fclipanime.com%2Fdang-nhap-google%2Fcallback&amp;scope=openid+profile+email&amp;response_type=code&amp;state=z6Lj3rZQ0lRXIQZTlEYDEX8S6gV66Y5JdsmXydjU">
                <input type="button" class="google" value="Đăng nhập với Google">
                <i class="icon icon-google"></i>
            </a>
        </div> -->
    </form>
</div>

<form action="" method="post">
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
</form>
			</div>
		</div>
    	

    </nav>
</header>