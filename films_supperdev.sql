-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 13, 2019 lúc 09:42 AM
-- Phiên bản máy phục vụ: 10.3.16-MariaDB
-- Phiên bản PHP: 7.3.6

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
(24, 'Sword Art Online', 'SAO', 2019, 'Hành Động,  Khoa Học Viễn Tưởng,  Hài Hước', 'Reki Kawahara', '1576046717sword-art-online-alicization-war-of-underworld25-09-2019_16g07-31.jpg', '1576046717102165l.jpg', 'Sword Art Online là một bộ light novel Nhật Bản được viết bởi Reki Kawahara và được minh họa bởi abec. Bộ truyện lấy bối cảnh tương lai gần và nhiều thế giới VRMMO thực tế ảo. ', 'Hoàn thành', 0, 'Sword-Art-Online.html', 1);

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
(9, 24, 'Tập 1', '1576046901CHƠI TUNG HỨNG ĐÚNG CÁCH.mp4', 0, 'Tap-1.html24.html'),
(10, 24, 'Tập 2', '1576047212CHƠI TUNG HỨNG ĐÚNG CÁCH.mp4', 0, 'Tap-2.html24.html'),
(11, 24, 'đasadas', '1576047336CHƠI TUNG HỨNG ĐÚNG CÁCH.mp4', 0, 'dasadas.html24.html');

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
(4, 24, 28, 'test lại này  :bagia:', '18:46 / 12-12-2019');

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
  `password` varchar(500) NOT NULL,
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
(19, 'vudang123', '$2y$10$29Q.4qUYKUfr9wfH8skyEenJep7UWBfIYP5DsDzregNccQNhY7HRi', 'Vũ Duy Đăng', 'vuduydang2000@gmail.com', 'null.png', 1, '1971-2-2', 1),
(27, 'vudang12', '$2y$10$cy3.6fUlMVGkzn.x70zcYuj8HTswBNbFS42Zl3s1NXnNzKENMqEGm', 'Vũ Duy Đăng', 'vuduydang2000hb@gmail.com', 'null.png', 1, '2000-11-1', 0),
(28, 'vudang', '$2y$10$aM8D2NtstuPjdU9m1fGJUeI39227IbTs0vY3unjzIsSZUM7ybyKHO', 'Vũ Duy Đăng', 'vuduydangs2@gmail.com', 'null.png', 1, '2000-11-11', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `years`
--
ALTER TABLE `years`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
