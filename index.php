<?php 
    require_once './commons/constants.php';
    require_once './commons/db.php';
    require_once './commons/helpers.php';
    $sqlQuery_new= "select * from films order by id desc limit 6 ";
    $films_new = executeQuery($sqlQuery_new, true);

    $sqlQuery_all = "SELECT * FROM films limit 12";
    $films_all= executeQuery($sqlQuery_all, true);

    $sqlQuery_hot="SELECT * FROM films order by views desc limit 6";
    $films_hot= executeQuery($sqlQuery_hot, true);

    $sqlQuery_part_new ="SELECT * FROM parts order by film_id desc limit 6";
    $films_part_new= executeQuery($sqlQuery_part_new, true);

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
    <script data-ad-client="ca-pub-2698344071802520" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Vietnamese, English" />
    

    
       <link rel="shortcut icon" href="./assets/ico.png" type="image/png" />
    
      <link rel="stylesheet" href="./public/css/home9039.css?id=0cadef886044cb02b356">
  
      <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v5.0&appId=2415585875377184&autoLogAppEvents=1"></script>

    <?php include_once"./_share/header.php"; ?>
    
    <div class="container">

        <div class="banner-masthead">
          <script type="text/javascript">
            var _avlVar = _avlVar || [];
            _avlVar.push(["685a2cbb1c3448729f4a578af4a29f25","[yo_page_url]","[width]","[height]"]);
          </script>
          <script type="text/javascript" src="../ss.yomedia.vn/js/yomedia-sdk30f4.js?v=3" id="s-685a2cbb1c3448729f4a578af4a29f25"></script>
        </div>
                      
      

      <div class="column-left">
        <!-- Latest episodes -->



         

        <section class="tray episode">
            <div class="tray-title">
              <a href="tap-moi-nhat.php">Phim mới <i class="icon icon-right"></i></a>
            </div>

            <?php foreach ($films_new as $value): ?>
            <div class="tray-content index">
                  <div class="tray-item">
                        <a href="info.php?id=<?=$value['id']?>">
                            <img class="tray-item-thumbnail" src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>" >
                            <div class="tray-item-description">
                                <div class="tray-item-title"><?php echo $value['name'] ?></div>
                                <div class="tray-item-meta-info">
                                    <span class="tray-episode-name"><?php echo $value['series'] ?></span>
                                    <span class="tray-episode-views"><?php echo $value['views'] ?>lượt xem</span>
                                </div>
                            </div>
                        </a>
                  </div> 
            </div>
              <?php endforeach ?>
        </section>


        
        <!-- END latest episodes -->

        
                          
        <section class="tray">
            <div class="tray-title">
              <a href="video.php">Tập mới <i class="icon icon-right"></i></a>
            </div>
            <div class="tray-content">

              <?php foreach ($films_part_new as $value) : ?>
                <div class="video-item">
                    <a href="xemphim.php?url=<?=$value['url']?>">
                      <video class="video-item-thumbnail" src="./videos/<?=$value['player']?>#t=5"></video>
                        <div class="video-item-title"><?php echo $value['name'] ?></div>
                        <div class="video-item-duration"><?php echo $value['name'] ?></div>
                        <div class="video-item-play-button">
                          <i class="icon-play"></i>
                        </div>
                    </a>
                    <div class="video-item-views">Lượt xem : <?php echo $value['views'] ?></div>
                </div>
              <?php endforeach?>
            </div>
        </section>

        

        <!-- Picked films -->
        

        

        
        <!-- END ranking films -->

        
        <section class="tray all">
            <div class="tray-title">
              <a href="anime.php">TẤT CẢ ANIME<i class="icon icon-right"></i></a>
            </div>
            <?php foreach ($films_all as $value) : ?>
            <div class="tray-content">
                <div class="tray-item">
                  <a href="info.php?id=<?=$value['id']?>">
                      <img class="tray-item-thumbnail" src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>" alt="">
                      <div class="tray-item-description">
                        <div class="tray-item-title"><?php echo $value['name'] ?></div>
                          <div class="tray-item-meta-info">
                              <div class="tray-film-views"><?php echo $value['views'] ?> lượt xem</div>
                              <!-- <div class="tray-film-likes">1,807 thích</div> -->
                          </div>
                        </div>
                  </a>
                </div>                                       
            </div>
          <?php endforeach ?>
            
        </section>
      </div>

      <div class="column-right">
        <div class="video-hot">
          <div class="fb-page" data-href="https://www.facebook.com/movieostfilms/" data-tabs="272" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/movieostfilms/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/movieostfilms/">Movie + OST Films</a></blockquote></div>
        </div>

        <div class="anime-hot">
          <div class="tray-title">Anime HOT</div>
            <?php foreach ($films_hot as $value): ?>
              <div class="anime-hot-item">
              <a href="info.php?id=<?=$value['id']?>">
              <img class="anime-hot-thumbnail"  src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>">
              <div class="video-hot-title"><?php echo $value['name'] ?></div>
            </a>
            <span class="anime-hot-views"><?php echo $value['views'] ?> lượt xem</span>
            <span class="anime-hot-update"><?=$value['status']?></span>
          </div>
            <?php endforeach ?>
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