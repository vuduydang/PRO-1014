<?php 
    require_once './commons/constants.php';
    require_once './commons/db.php';
    // require_once './commons/helpers.php';
    $id = isset($_GET['id']) ? $_GET['id'] : "";
    $sqlQuery = "select * from films  where id = $id";
    $films = executeQuery($sqlQuery, true);
    

 ?>

<!DOCTYPE html>
<html lang="vi">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<title>Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên</title>
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

	<meta name="description" content="Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên" />
	<meta name="keywords" content="doraemon,doraemon tap 1" />

	<!-- Facebook Metadata /-->
	<meta property="fb:app_id" content="362811147450608" />
	<meta property="og:image" content="../i.imacdn.com/vg/2015/06/doraemon-tap-1-1435118450.jpg" />
	<meta property="og:url" content="doraemon.php" />
	<meta property="og:description" content="Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên" />
	<meta property="og:title" content="Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên" />
	<meta property="og:site_name" content="ClipAnime" />
	<meta property="og:type" content="video.php" />

	<!-- Google+ Metadata /-->
	<meta itemprop="name" content="Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên" />
	<meta itemprop="description" content="Doraemon Tập 1 - Tập đặc biệt: Ao cá trong phòng học &amp; Cỗ máy thời gian đâu mất rồi &amp; Nhớ lại! ấn tượng ngày đầu tiên" />
	<meta itemprop="image" content="../i.imacdn.com/vg/2015/06/doraemon-tap-1-1435118450.jpg" />

			<!-- Google webmaster tools verification -->
		<meta name="google-site-verification" content="X6wTJolQe36XUJJeyIxqPMs9YJ0dqJXfDdy1yksGNhA" />
		<!-- Bing verification -->
		<meta name="msvalidate.01" content="C21FDE84CE65ABA807746F89A0D2964C" />
	
        <link rel="stylesheet" href="./public/css/film99f8.css?id=57f035621535aaa1179c">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

    <link rel="stylesheet" href="./public/css/style.css">

    

    </head>
<body>

    <?php include_once"./_share/header.php"; ?>   
    

    <div class="container" data-id="5076" data-episode-id="117174"
         data-type="" data-is-upcoming="" data-copyrighted=""
         
         data-name="Doraemon" data-episode-min="1" data-episode-max="505">
        <?php foreach ($films as $films): ?>
        <div class="banner">
            <img src="<?php echo $films['banner'] ?>" alt="" style="width: 100%; height: 100%">
        </div>
                                                

        
         
        <div id="infomation" class="player-wrapper">
            <div class="img-thumbnail">
                <img src="<?php echo $films['thumbnail'] ?>" alt="Doraemon Movie 36: Shin Nobita no Nippon Tanjou">
            </div>
            <div class="info">
                <h1 class="film-info-title"><?php echo $films['name'] ?> - <?php echo $films['series'] ?></h1>
                <p>Thể loại: <span><?php echo $films['categories'] ?></span></p>
                <p>Đạo diễn: <span><?php echo $films['author'] ?></span></p>
                <p>Năm xuất bản: <span><?php echo $films['year'] ?></span></p>
                <p>Thời lượng: <span><?php echo $films['quantity'] ?></span></p>
                <p>Lượt xem: <span><?php echo $films['views'] ?></span></p>
                <p>Trạng thái <span><?php echo $films['status'] ?></span></p>
                <a class="click-view" href="./xemphim.php">Xem phim</a>
                <a class="click-follow" href="#follows">Theo dõi</a>
            </div>
            <!-- <div id="player" class="player"></div> -->
            <!-- <iframe width="860" height="475" src="https://www.youtube.com/embed/WBYdp2sOut0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div class="yt">
                <i class="far fa-thumbs-up"></i>78K
                <i style="margin-left: 15px;" class="far fa-thumbs-down"></i>35k
                <i style="margin-left: 15px;" class="fas fa-share-alt"></i>
                <i style="margin:0 40px 0 15px;" class="fas fa-heart"></i>
            </div> -->
            
        </div>
        

        <div class="player-meta">
            
        </div>

        
        

         <div class="film-related video" style="margin-top: -16px;">
            <hr>
            <h3 class="dsp">Liên quan</h3>
            
                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                            <img src="assets/img/1.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Erza vS her mom&#039;s Dragon Form - Fairy Tail Final Season  AMV</div>
                        </a>
                        <div class="film-related-views">725 lượt xem</div>
                    </div>
                </div>
                                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                           <img src="assets/img/4.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Kimetsu no Yaiba「 AMV 」- Louder</div>
                        </a>
                        <div class="film-related-views">1,537 lượt xem</div>
                    </div>
                </div>
                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                           <img src="assets/img/4.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Kimetsu no Yaiba「 AMV 」- Louder</div>
                        </a>
                        <div class="film-related-views">1,537 lượt xem</div>
                    </div>
                </div>
                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                           <img src="assets/img/4.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Kimetsu no Yaiba「 AMV 」- Louder</div>
                        </a>
                        <div class="film-related-views">1,537 lượt xem</div>
                    </div>
                </div>

                                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                            <img src="assets/img/3.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Bungou Stray Dogs Season 3 「 AMV 」- Antidote</div>
                        </a>
                        <div class="film-related-views">432 lượt xem</div>
                    </div>
                </div>
                                <div class="film-related-item">
                    <div class="film-related-thumbnail">
                        <a href="xemphim.php">
                            <img src="assets/img/2.jpg">
                        </a>
                    </div>
                    <div class="film-related-meta">
                        <a href="xemphim.php">
                            <div class="film-related-title">Ｄｒ．ＳＴＯＮＥ「AMV」- Can&#039;t Stop Me Now</div>
                        </a>
                        <div class="film-related-views">476 lượt xem</div>
                    </div>
                </div>
                                
            </div>
                
        
                    <!-- INFO -->
            
                <div class="film-info"><hr>
                    <div class="film-info-subteam">
                        <div class="film-related-title"><h3>Series Phim DORAEMON</h3></div>
                        ///
                </div>
                <hr>
                <div class="film-info-description">
                    <!--  -->
                    <h3><i class="fas fa-film"></i> GIỚI THIỆU PHIM</h3>
                    <?php echo $films['content'] ?>
                </div>
                <?php endforeach ?>

                <hr>

                <!-- BÌNH LUẬN -->
                <div class="player-sidebar-body body-comment hidde">
                    <h3><i class="fas fa-film"></i> BÌNH LUẬN PHIM</h3>
                    <div class="comment-input">
                    <input type="text" name="comment-input" value="" id="comment-input">
                    <span id="comment-emoticon" class="comment-emoticon icon-smile"></span>
                    <div id="emoji-picker" class="emoji-picker hidden">
                        <div class="emoji-picker-header">
                            <div class="emoji-picker-type" data-tab="panda"><img src="assets/img/panda.gif"></div>
                            <div class="emoji-picker-type" data-tab="onion"><img src="assets/img/onion.gif"></div>
                            <div class="emoji-close"><i class="icon-close"></i></div>
                        </div>
                        <div class="emoji-picker-body">
                            <ul class="emoji-list emoji-panda" data-tab="panda"></ul>
                            <ul class="emoji-list emoji-onion hidden" data-tab="onion"></ul>
                        </div>
                    </div>
                </div>
                <div class="comment-list">
                    <input type="button" class="comment-more hidden" value="Xem thêm">
                    <input type="text" name="reply-input" id="reply-input" class="reply-input hidden">
                </div>
                <div class="loading"></div>
                </div>
            </div>



    </div>

    <div class="floating-action">
	<div class="action-item action-toggle"><i class="icon-up"></i></div>
	
</div>    

        
        
    <script type="text/javascript" src="js/vlib581a.js?id=d0a34b993528e375202d"></script>
        
    <script type="text/javascript" src="js/enginee614.js?id=713d724142b81de2a286"></script>
    <script type="text/javascript" src="js/bfilm8ae2.js?id=508bade3ec5ab00fc518"></script>

    		<!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-81129102-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-81129102-2');
        </script>
		<script type="text/javascript" async defer src="../ss.yomedia.vn/js/ads.js"></script>
	    	
</body>
</html>