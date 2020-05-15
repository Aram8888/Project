-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 15 2020 г., 15:38
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `project`
--
CREATE DATABASE project;
use project;
-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE `basket` (
  `id` int(11) NOT NULL,
  `img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `size` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id`, `img`, `name`, `size`, `price`) VALUES
(12, '<img src=\"../asset/images/index_images/large_893-original-1520x1015-1_1.png\">', 'Pizza Italiano', 25, 500),
(13, '<img src=\"../asset/images/index_images/large_item_3183489_1.jpg\">', 'Wok with beef', 0, 200),
(14, '<img src=\"../asset/images/index_images/large_sousy_heinz_v_assortimente_1_.png\">', 'Sauces', 0, 25),
(15, '<img src=\"../asset/images/index_images/large_8a8277fab24557114baf4b32704eb9d4_1_.jpg\">', 'Coca-cola', 25, 500);

-- --------------------------------------------------------

--
-- Структура таблицы `drink`
--

CREATE TABLE `drink` (
  `id` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `size` varchar(200) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `drink`
--

INSERT INTO `drink` (`id`, `name`, `img`, `size`, `price`) VALUES
(1, 'Coca-cola', 'large_8a8277fab24557114baf4b32704eb9d4_1_.jpg', '0.5', 50),
(2, 'Coca-cola', 'large_8a8277fab24557114baf4b32704eb9d4_1_.jpg', '1', 80),
(3, 'Coca-cola', 'large_8a8277fab24557114baf4b32704eb9d4_1_.jpg', '1.5', 100);

-- --------------------------------------------------------

--
-- Структура таблицы `pizza`
--

CREATE TABLE `pizza` (
  `id` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `size` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `pizza`
--

INSERT INTO `pizza` (`id`, `name`, `img`, `size`, `price`) VALUES
(1, 'Pizza Italiano', 'large_893-original-1520x1015-1_1.png', 25, 500),
(2, 'Pizza Italiano', 'large_893-original-1520x1015-1_1.png', 30, 550),
(3, 'Pizza Italiano', 'large_893-original-1520x1015-1_1.png', 35, 600),
(4, 'Sausage pizza', 'large_image.png', 25, 600),
(5, 'Sausage pizza', 'large_image.png', 30, 700),
(6, 'Sausage pizza', 'large_image.png', 35, 650),
(7, 'Pizza Assorted', 'large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png', 25, 750),
(8, 'Pizza Assorted', 'large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png', 30, 800),
(9, 'Pizza Assorted', 'large_90d15f22dc95822302e6af16108ef45a_gallerySiteSize.png', 35, 850),
(10, 'French pizza', 'large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png', 25, 600),
(11, 'French pizza', 'large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png', 30, 700),
(12, 'French pizza', 'large_7b0d75cef12148762c9ab3b9865da2c3_100531941.png', 35, 650);

-- --------------------------------------------------------

--
-- Структура таблицы `sauces`
--

CREATE TABLE `sauces` (
  `id` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sauces`
--

INSERT INTO `sauces` (`id`, `name`, `img`, `price`) VALUES
(1, 'sause', 'large_sousy_heinz_v_assortimente_1_.png', 25);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_email` varchar(200) CHARACTER SET utf8 NOT NULL,
  `user_password` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `user_email`, `user_password`) VALUES
(12, 'aaaa@mail.ru', 'aaaa'),
(14, 'aram@mail.ru', 'ssss'),
(15, 'sssss@mail.ru', 'ssss'),
(17, 'ar@mail.ru', 'aaaa');

-- --------------------------------------------------------

--
-- Структура таблицы `wok`
--

CREATE TABLE `wok` (
  `id` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `wok`
--

INSERT INTO `wok` (`id`, `name`, `img`, `price`) VALUES
(1, 'Wok with beef', 'large_item_3183489_1.jpg', 200),
(2, 'Wok with salmon', 'large_острый-лосось.jpg', 350),
(3, 'Wok with chicken', 'large_item_3183489_1.jpg', 270),
(4, 'Wok with mushrooms', 'large_103_1_big.png', 200);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `drink`
--
ALTER TABLE `drink`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sauces`
--
ALTER TABLE `sauces`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wok`
--
ALTER TABLE `wok`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `basket`
--
ALTER TABLE `basket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `drink`
--
ALTER TABLE `drink`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `sauces`
--
ALTER TABLE `sauces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `wok`
--
ALTER TABLE `wok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
