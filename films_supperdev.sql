-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th12 15, 2019 lúc 07:40 PM
-- Phiên bản máy phục vụ: 10.4.10-MariaDB
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `films_supperdev`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categories` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `categories`) VALUES
(1, 'Action'),
(2, 'Hài hước'),
(3, ' Adventure'),
(4, 'Shounen'),
(5, 'Game'),
(6, 'Drama'),
(7, 'Kids'),
(8, 'Fantasy'),
(9, 'Học Đường'),
(10, 'Harem');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `series` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `categories` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `views` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `films`
--

INSERT INTO `films` (`id`, `name`, `series`, `year`, `categories`, `author`, `banner`, `thumbnail`, `content`, `status`, `views`, `url`, `active`) VALUES
(25, 'Sword Art Online', 'SAO', 2019, 'Action, Comedy, Fantasy, Magic, Shounen', 'Reki Kawahara', '1576297082mZ1YbQR.jpg', '1576297082uLaaSM3.jpg', 'Sword art online là một bộ light novel Nhật Bản được viết bởi Tử Linh và được minh họa bởi abec. Bộ truyện lấy bối cảnh tương lai gần và nhiều thế giới VRMMO thực tế ảo.', 'Đang chiếu', 0, 'Sword-Art-Online.html', 1),
(26, 'RADIANT 2ND SEASON', 'RADIANT', 2019, 'Hành Động, Phiêu Lưu, Phép Thuật, Fantasy', 'Dang cap nhat', '157629733999e3652dd05aa33b241251a51df604cc.jpg', '1576297339mZ1YbQR.jpg', 'Radiant là câu chuyện xoay quanh Seth – một người muốn trở thành một pháp sư vĩ đại và một nhóm phù thủy muốn ...\r\n', 'Hoàn thành', 0, 'RADIANT-2ND-SEASON.html', 1),
(27, 'NIJIIRO DAYS', 'NIJIIRO DAYS', 2019, 'Hài Hước, Học Đường, Đời Thường, Romance, Shoujo', 'Dang cap nhat', '1576297551dashda.jpeg', '1576297551JQ1LzoC.jpg', 'Được dịch từ tiếng Anh-Rainbow Days là một bộ truyện tranh shoujo của Nhật Bản được viết và minh họa bởi Minami Mizuno, và được xuất bản trên tạp chí Bessatsu Margaret của Shueisha. Một CD drama đã được phát hành với tập thứ bảy của manga vào tháng 10 năm 2014.', 'Hoàn thành', 0, 'NIJIIRO-DAYS.html', 1),
(28, 'DIABOLIK LOVERS', 'DIABOLIK LOVERS', 2013, 'Học Đường, Harem, Shoujo, Vampire', 'Dang cap nhat', '1576297894diaboliklovers.png', '1576297894dbUtIKc.jpg', 'Diabolik Lovers là một thương hiệu tiểu thuyết hình ảnh Nhật Bản của Rejet. Mục đầu tiên của nó được phát hành vào ngày 11 tháng 10 năm 2012 cho hệ thống PlayStation Portable.', 'Hoàn thành', 0, 'DIABOLIK-LOVERS.html', 1),
(29, 'DIABOLIK LOVERS SS2', 'DIABOLIK LOVERS', 2015, 'Học Đường, Harem, Shoujo, Vampire', 'Dang cap nhat', '1576298020diaboliklovers.png', '1576298020k6Y2Xli.jpg', 'Diabolik Lovers là một thương hiệu tiểu thuyết hình ảnh Nhật Bản của Rejet. Mục đầu tiên của nó được phát hành vào ngày 11 tháng 10 năm 2012 cho hệ thống PlayStation Portable.', 'Đang chiếu', 0, 'DIABOLIK-LOVERS-SS2.html', 1),
(30, 'CHAOS HEAD (BD)', 'CHAOS HEAD', 2019, 'Fantasy, Dementia', ' Mages, Nitroplus', '1576298627download.jpeg', '1576298627fFNWEGY.jpg', 'Chaos;Head là một visual novel phát triển bởi 5pb. và Nitroplus. Đây là game đầu tiên trong loạt Science Adventure, và ban đầu được phát hành cho Microsoft Windows năm 2008; bản nới rộng Xbox 360 tên Chaos;Head Noah phát hành 2009, rồi từ đó được chuyển sang nhiều nền tảng khác', 'Đang chiếu', 0, 'CHAOS-HEAD-(BD).html', 1),
(31, 'SEKAI SEIFUKU: BOURYAKU NO ZVEZDA - SHIN ZVEZDA DAISAKUSEN', 'SEKAI SEIFUKU', 2017, 'Hành Động, Hài Hước, Fantasy', 'Đang cập nhật', '1576299216e431cbb9e37089bb5ae4a212a7e8eda0.jpg', '1576299216eTlex1h.jpg', 'World Conquest Zvezda Plot là một bộ phim truyền hình anime Nhật Bản được sản xuất bởi A-1 Pictures và được đạo diễn bởi Tensai Okamura. Nó được công chiếu trên Tokyo MX, GTV và GYT vào ngày 11 tháng 1 năm 2014.', 'Đang chiếu', 0, 'SEKAI-SEIFUKU:-BOURYAKU-NO-ZVEZDA---SHIN-ZVEZDA-DAISAKUSEN.html', 1),
(32, 'KEKKAISHI', 'KEKKAISHI', 2006, 'Hài Hước, Phiêu Lưu, Shounen, Fantasy', 'Shogakukan', '1576299593kekkaishi-202-04-2018_11g29-45.jpg', '1576299593RHch6am.jpg', 'Kết giới sư là một bộ truyện tranh siêu nhiên Nhật Bản được viết và minh họa bởi Tanabe Yellow. Truyện được đăng định kì trên tạp chí Shōnen Sunday của Shogakukan từ 2003 đến 2011, và được Nhà xuất bản Kim Đồng phát hành ở Việt Nam.', 'Hoàn thành', 0, 'KEKKAISHI.html', 1),
(33, 'CHOUJIN KOUKOUSEI-TACHI WA ISEKAI DEMO YOYUU DE IKINUKU YOU DESU!', 'CHOUJIN KOUKOUSEI', 2019, 'Fantasy', 'Misora Riku', '1576299950eLz14GzHdrGIE9dgu8t5SfZeglH.jpg', '1576299950Oz0v376.jpeg', 'Thần đồng trung học có thể dễ dàng ngay cả ở một thế giới khác là một bộ light novel Nhật Bản được viết bởi Riku Misora ​​và được minh họa bởi Sacraneco. SB Creative đã xuất bản tám tập kể từ năm 2015 dưới dấu ấn GA Bunko của họ.', 'Đang chiếu', 0, 'CHOUJIN-KOUKOUSEI-TACHI-WA-ISEKAI-DEMO-YOYUU-DE-IKINUKU-YOU-DESU!.html', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follows`
--

CREATE TABLE `follows` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `historys`
--

CREATE TABLE `historys` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `part_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parts`
--

CREATE TABLE `parts` (
  `id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `player` varchar(255) NOT NULL,
  `views` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `parts`
--

INSERT INTO `parts` (`id`, `film_id`, `name`, `player`, `views`, `url`) VALUES
(15, 25, 'Tập 1: Sword Art Online', '1576339922【MAD】夏に去りし君を想フ【かぐや様は告らせたい】.mp4', 0, 'Tap-1:-Sword-Art-Online.html25.html'),
(16, 26, 'Tập 1: RADIANT 2ND SEASON', '1576339975hotori morie.mp4', 0, 'Tap-1:-RADIANT-2ND-SEASON.html26.html'),
(17, 25, 'Tập 2: Sword Art Online', '1576340957【MAD】夏に去りし君を想フ【かぐや様は告らせたい】.mp4', 0, 'Tap-1:-Sword-Art-Online25.html'),
(18, 27, 'Tập 1: NIJIIRO DAYS', '1576434216hotori morie.mp4', 0, 'Tap-1:-NIJIIRO-DAYS27.html');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `film_id`, `user_id`, `content`, `date`) VALUES
(1, 24, 28, 'hyhyhaha', '0000-00-00'),
(2, 24, 28, 'hyhyhahagg', '00:30 / 2019-12-12'),
(3, 24, 28, 'vuduyddanwg', '18:45 / 12-12-2019'),
(4, 24, 28, 'test lại này  :bagia:', '18:46 / 12-12-2019'),
(5, 25, 28, 'tessst cuoois', '23:51 / 14-12-2019'),
(6, 30, 28, 'Thử comment phát xem sao', '23:54 / 14-12-2019'),
(7, 25, 28, 'thử comment phát', '23:59 / 14-12-2019'),
(8, 30, 28, ' :xitmau:', '00:25 / 15-12-2019');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `status`, `name`) VALUES
(1, -1, 'đã khóa'),
(2, 0, 'thành viên'),
(3, 1, 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `systems`
--

CREATE TABLE `systems` (
  `logo` varchar(255) NOT NULL,
  `id_player` varchar(300) NOT NULL,
  `message` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `fanpage` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `introduce` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `gender` int(11) NOT NULL COMMENT '0=nu/1=nam',
  `age` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `avatar`, `gender`, `age`, `role_id`) VALUES
(3, 'admin', '$2y$10$QYr7SvXdOguZz3dlnPxO.u0Y0Ffj6nNErwm168unZkzPoWRxR7..e', 'admin', 'haivdph07968@gmail.com', 'null.png', 0, '2000-11-19', 1),
(28, 'vudang', '$2y$10$aM8D2NtstuPjdU9m1fGJUeI39227IbTs0vY3unjzIsSZUM7ybyKHO', 'Vũ Duy Đăng', 'vuduydangs2@gmail.com', 'null.png', 1, '2000-11-11', 0),
(31, 'tktest', '$2y$10$A4FLAlMe.UHGO6v1LtdeIux4Bq5.WKI2hhHPE1VOWIFF39mVWnKVy', 'Ngaos Ngaos', 'ngaongao@gmail.com', 'null.png', 0, '1999-11-12', 0),
(32, 'namnt', '$2y$10$7s.uC5ombtmayMxWy7ah9.weOKx2tNJ4ZFdEOcG60tPj2iWNZwFJm', 'Trung Nam', 'namnv@gmail.com', 'null.png', 1, '2000-06-01', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `years`
--

CREATE TABLE `years` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `years`
--

INSERT INTO `years` (`id`, `name`) VALUES
(1, '2009'),
(2, '2010'),
(3, '2011'),
(4, '2012'),
(5, '2013'),
(6, '2014'),
(7, '2015'),
(8, '2016'),
(9, '2017'),
(10, '2018'),
(11, '2019');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `historys`
--
ALTER TABLE `historys`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `years`
--
ALTER TABLE `years`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `follows`
--
ALTER TABLE `follows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `historys`
--
ALTER TABLE `historys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `parts`
--
ALTER TABLE `parts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `years`
--
ALTER TABLE `years`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
