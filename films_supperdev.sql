-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 03, 2019 lúc 10:56 AM
-- Phiên bản máy phục vụ: 10.4.8-MariaDB
-- Phiên bản PHP: 7.1.33

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
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `quantity` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `views` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `films`
--

INSERT INTO `films` (`id`, `name`, `series`, `year`, `categories`, `author`, `banner`, `thumbnail`, `content`, `quantity`, `status`, `views`, `url`, `active`) VALUES
(1, 'doraemon', 'tập 3', 1985, 'Hành động', 'Jeffrey Grellman ', 'https://farm4.staticflickr.com/3112/2654908420_78be034148.jpg', 'http://4.bp.blogspot.com/-WutdbHhsR9Y/T6zd0dI2ppI/AAAAAAAADKk/Dilt_9bbO2Q/s1600/Anime-ghinh-nen-mobile_by_namkna-blogspot-com_anime30.jpg', 'Bộ phim kể về một chú mèo máy tên là Doraemon đến từ thế kỉ 22', 0, 'Đang công chiếu', 11, '', 1),
(2, 'doremon tập 2', '', 1965, 'Kimetsu no Yaiba', 'Kimetsu no Yaiba', 'https://www.wb7themes.com/wp-content/uploads/2016/05/Doraemon-v3-theme-s40-320x240-Asha-302-210-205-200-201-C3-00-X2-01.jpg', 'https://i.pinimg.com/564x/59/c7/a5/59c7a5522ba6d0a37a9b72bb5fbe6c05.jpg', '50 tập phim hoạt hình Doremon HTV3 lồng tiếng cho màn hình 240 x 320. Thảo luận trong \'Phim - Ảnh\' bắt đầu bởi MrBe09, 24/8/14.', 0, 'công chiếu', 10, '', 0),
(3, 'chất như nước cất', 'tập 1', 0, 'kinh dị', 'thành long', 'https://tse2.mm.bing.net/th?id=OIP.iCPfirxznZQtWcBE_r7WlgHaEL&pid=Api&P=0&w=314&h=178', 'http://sherly.mobile9.com/download/media/210/doremon_fhm7ds92.jpg', 'kể về chuyến hành trình tìm kho báu huyền thoại One Piece và cuộc phiêu lưu trở thành Vua Hải Tặc - Pirate King của cậu bé Monkey D. Luffy. Để đạt được ước mơ của mình cậu phải đến được tận cùng Đại Hải Trình: vùng biển nguy hiểm và chết chóc nhất thế giới. Chiếc mũ rơm Luffy mang theo bên mình là biểu tượng lịch sử khi nó đã từng thuộc về hai hải tặc vĩ đại: Vua Hải Tặc Gol D. Roger và Tứ Hoàng Shank \"tóc đỏ\".\r\n\r\nLuffy và băng Hải Tặc Mũ Rơm của mình đã băng qua Biển Đông và tiến vào Đại Hải Trình, trải qua nhiều trận đánh khốc liệt và các biến cố kinh hoàng, đánh bại rất nhiều kẻ thù để tiến tới kho báu One Piece. Các nhân vật trong Vua Hải Tặc đều có 1 quá khứ rất đặc biệt và đáng buồn. Ngoài những khả năng đặc biệt trong công việc của mình, bất cứ thành viên nào cũng có khả năng chiến đấu cực tốt. Tính đến thời điểm hiện tại, thủy thủ đoàn chính thức của Luffy gồm 9 người: Thuyền trưởng Monkey D. Luffy, Kiếm sĩ Roronoa Zoro, Hoa tiêu Nami, Xạ thủ Usopp (Sogeking), Đầu bếp Sanji, Bác sĩ Tony Tony Chopper, Nhà khảo cổ Nico Robin, Thợ sửa thuyền Franky, Nhạc công Brook.\r\n\r\nSau 2 năm luyện tập các nhân vật trong băng hải tặc Mũ rơm trở lại mang trong mình hoài bão, tự tin trên con đường chinh phục Kho báu One Piece. Anime Vua hải tặc mang đến nhiều trình tiết gây cấn hơn kèm nhạc phim vua hải tặc sôi động và cuốn hút hơn.\r\nVua Hải Tặc còn ngợi ca tình bạn, tình chiến hữu, sự hi sinh vì bạn bè, phim không chỉ mang lại những tình tiết gay cấn đầy kịch tính, những cuộc chiến đầy thú vị nhưng không kém phần vui nhộn.', 0, '', 0, '', 0),
(4, 'doremon tập 2', '', 1965, 'Kimetsu no Yaiba', 'Kimetsu no Yaiba', 'https://www.wb7themes.com/wp-content/uploads/2016/05/Doraemon-v3-theme-s40-320x240-Asha-302-210-205-200-201-C3-00-X2-01.jpg', 'https://png.pngtree.com/png-clipart/20190118/ourlarge/pngtree-cartoon-cute-image-surprised-surprise-png-image_462278.jpg', '50 tập phim hoạt hình Doremon HTV3 lồng tiếng cho màn hình 240 x 320. Thảo luận trong \'Phim - Ảnh\' bắt đầu bởi MrBe09, 24/8/14.', 0, 'công chiếu', 10, '', 0),
(5, 'doraemon', 'tập 3', 1985, 'Hành động', 'Jeffrey Grellman ', 'http://s2.dmcdn.net/OAEnW/x240-Rfh.jpg', 'https://3.bp.blogspot.com/-iJDgZgMPkcM/U9TDMWLYlII/AAAAAAAAAQU/rMDJWr91xO4/s1600/Yeualo_net-240x320-29.jpg', 'Bộ phim kể về một chú mèo máy tên là Doraemon đến từ thế kỉ 22', 0, 'Đang công chiếu', 11, '', 1),
(6, 'cute phô mai que', 'tập 1', 1988, 'jewru', '', 'https://kenh14cdn.com/thumb_w/600/6a098b4e34/2015/09/02/top-phim-hoat-hinh-co-doanh-thu-ty-do-trong-lich-su_185219493a-51406.jpg', 'https://tse3.mm.bing.net/th?id=OIP.gTlMPKDhc86AUXdgm8dXqgAAAA&pid=Api&P=0&w=300&h=300', 'Hình nền kute, xem ảnh hình nền kute dễ thương nhất năm; Hình nền điện thoại 320×240 được chọn với kích thước chuẩn nét, nhiều chủ đề khác nhau mà bạn có thể tìm và tải như: hình nền điện thoại phong cảnh, nếu yêu thích thiên nhiên thì có thể chọn hình nền điện thoại thiên nhiên đẹp hoang sơ này nhé.', 0, '', 0, '', 0);

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
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `parts`
--

INSERT INTO `parts` (`id`, `film_id`, `name`, `player`, `url`) VALUES
(1, 3, 'pokemon - tập 1', '', 'pokemon - tập 1'),
(2, 3, 'pokemon - tập 2', '', 'pokemon - tập 2'),
(3, 3, 'pokemon - tập 3', '', 'pokemon - tập 3'),
(4, 3, 'pokemon - tập 4', '', 'pokemon - tập 4'),
(5, 3, 'pokemon - tập 5', '', 'pokemon - tập 5'),
(6, 3, 'pokemon - tập 6', '', 'pokemon - tập 6'),
(7, 3, 'pokemon - tập 7', '', 'pokemon - tập 7'),
(8, 3, 'pokemon - tập 7', '', 'pokemon - tập 7'),
(9, 1, 'anime - tập 1', '', 'anime - tập 1'),
(10, 1, 'anime - tập 2', '', 'anime - tập 2'),
(11, 1, 'anime - tập 3', '', 'anime - tập 3'),
(12, 2, 'doremon - tập 1', '', 'doremon - tập 1'),
(13, 2, 'doremon - tập 2', '', 'doremon - tập 2'),
(14, 4, 'tom & jerry tập 1', '', 'tom & jerry tập 1'),
(15, 4, 'tom & jerry tập 2', '', 'tom & jerry tập 2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `age` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `avatar`, `age`, `role_id`) VALUES
(1, 'nguyenvana', '123456', 'nguyễn văn a', 'haivdph@gmail.com', '', '19', 0),
(2, 'nguyenvanb', '123123', 'nguyễn văn b', 'bbb@gmail.com', '', '19', 0),
(3, 'admin', '$2y$10$QYr7SvXdOguZz3dlnPxO.u0Y0Ffj6nNErwm168unZkzPoWRxR7..e', 'admin', 'haivdph07968@gmail.com', '', '', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `years`
--

CREATE TABLE `years` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `years`
--
ALTER TABLE `years`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
