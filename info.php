<?php 
    require_once './commons/constants.php';
    require_once './commons/db.php';
    require_once './commons/helpers.php';

    $id = isset($_GET['id']) ? $_GET['id'] : "";
    if ($id=="") {
        header("location: ./");
    }

    $sqlQuery   = "SELECT * FROM reviews WHERE film_id = '$id'";
    $reviews    = executeQuery($sqlQuery, true);

    $sqlQuery   = "select * from films  where id = $id";
    $films      = executeQuery($sqlQuery);

    $sr         = $films['series'];
    $sqlQuery   = "SELECT * FROM films WHERE series LIKE '%$sr%'";
    $series     = executeQuery($sqlQuery, true);

    $sqlQuery   = "select * from parts  where film_id = $id";
    $parts      = executeQuery($sqlQuery, true);
    
    $quantity   = count($parts);
 ?>

<!DOCTYPE html>
<html lang="vi">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<title><?=$films['name']?> - YFilms</title>
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
	
        <link rel="stylesheet" href="./public/css/film99f8.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

    <link rel="stylesheet" href="./public/css/style.css">

    

    </head>
<body>

    <?php include_once"./_share/header.php"; ?>   
    

    <div class="container" data-id="5076" data-episode-id="117174"
         data-type="" data-is-upcoming="" data-copyrighted=""
         
         data-name="Doraemon" data-episode-min="1" data-episode-max="505">
        <div class="banner">
            <img src="./assets/banners/<?=$films['banner'] ?>" alt="" style="width: 100%; height: 100%">
        </div>
                                                

        
         
        <div id="infomation" class="player-wrapper">
            <div class="img-thumbnail">
                <img width="310" height="410" src="./assets/thumbnails/<?php echo $films['thumbnail'] ?>">
            </div>
            <div class="info">
                <h1 class="film-info-title"><?php echo $films['name'] ?> - <?php echo $films['series'] ?></h1>
                <p>Thể loại: <span><?php echo $films['categories'] ?></span></p>
                <p>Đạo Diễn: <span><?php echo $films['author'] ?></span></p>
                <p>Năm xuất bản: <span><?php echo $films['year'] ?></span></p>
                <p>Tập: <span><?=$quantity?>/??</span></p>
                <p>Lượt xem: <span><?php echo $films['views'] ?></span></p>
                <p>Trạng thái <span><?php echo $films['status'] ?></span></p>
                <?php foreach ($parts as $value): ?>
                    <a class="click-view" href="./xemphim.php?id=<?=$value['film_id']?>">Xem phim</a>
                <?php endforeach ?>
                <a class="click-follow" href="#follows">Theo dõi</a>
            </div>
            
        </div>
        

        <div class="player-meta">
            
        </div>

        
        

         <div class="film-related video" >
            <hr>
            <h3 class="dsp">Danh sách tập</h3>
            <div id="list-parts" >
                <?php foreach ($parts as  $value) : ?>
                    <div class="film-related-item">
                        <div class="film-related-thumbnail">
                            <a href="xemphim.php?id=<?=$value['film_id']?>">
                                <video class="video-item-thumbnail" src="./videos/video1.mp4#t=0.1"></video>
                            </a>
                        </div>
                        <div class="film-related-meta">
                            <a href="xemphim.php?id=<?=$value['film_id']?>">
                                <div class="film-related-title"><?php echo $value['name'] ?></div>
                            </a>
                            <div class="film-related-views">Lượt xem : <?php echo $value['views'] ?></div>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
                
        
            <!-- INFO -->
    
        <div class="film-info"><hr>
            <div class="film-info-subteam">
                <div class="film-related-title"><h3>Series <?=$films['series']?></h3></div>
                <ul>
                    <?php foreach ($series as $value) : 
                            if ($value['id']==$id) {
                                continue;   
                            }
                        ?>
                        <li> - <a href="info.php?id=<?=$value['id']?>"><?=$value['name']?></a></li>
                    <?php endforeach ?>
                </ul>
            </div>
            <hr>
            <div class="film-info-description">
                <!--  -->
                <h3><i class="fas fa-film"></i> GIỚI THIỆU PHIM</h3>
                <?php echo $films['content'] ?>
            </div>

            <hr>

            <!-- BÌNH LUẬN -->
            <div class="player-sidebar-body body-comment hidde">
                <h3><i class="fas fa-film"></i> BÌNH LUẬN PHIM</h3>
                <div class="comment-input">
                    <input type="hidden" name="id" value="<?=$id?>" id="id_film">
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
                    <?php foreach ($reviews as $value) : 
                            $id   = $value['user_id'];
                            $user = executeQuery("SELECT * FROM users WHERE id = '$id'");
                    ?>
                    <div data-id="981415" class="comment-item">
                        <div class="author-avatar"><img src="./assets/avatars/<?=$user['avatar']?>"></div>
                        <div class="comment-item-body">
                            <div class="author-name"><?=$user['name']?></div>
                            <div class="comment-content"><?=$value['content']?></div>
                        </div>
                    </div>
                <?php endforeach ?>
                    <input type="button" class="comment-more hidden" value="Xem thêm">
                    <input type="text" name="reply-input" id="reply-input" class="reply-input hidden">
                </div>
                <!-- <div class="loading"></div> -->
            </div>
        </div>
    </div>

    <div class="floating-action">
	<div class="action-item action-toggle"><i class="icon-up"></i></div>
	
    </div>    

        
        
    <script type="text/javascript" src="./public/js/vlib581a.js?id=d0a34b993528e375202d"></script>
        
    <script type="text/javascript" src="./public/js/enginee614.js?id=713d724142b81de2a286"></script>
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
</html>