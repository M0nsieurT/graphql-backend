-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.4.20-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour cta
-- DROP DATABASE IF EXISTS `cta`;
-- CREATE DATABASE IF NOT EXISTS `cta` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
-- USE `cta`;

-- Listage de la structure de table cta. card
DROP TABLE IF EXISTS `card`;
CREATE TABLE IF NOT EXISTS `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `power` int(11) NOT NULL,
  `element_id` int(11) NOT NULL,
  `rank_id` int(11) DEFAULT NULL,
  `card_type_id` int(11) NOT NULL DEFAULT 1,
  `max_chain` int(11) NOT NULL DEFAULT 1 COMMENT 'Chains are limited by a chain counter determining the maximum reaction possible',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_card_element` (`element_id`),
  KEY `FK_card_card_rank` (`rank_id`),
  KEY `FK_card_card_type` (`card_type_id`),
  CONSTRAINT `FK_card_card_rank` FOREIGN KEY (`rank_id`) REFERENCES `card_rank` (`id`),
  CONSTRAINT `FK_card_card_type` FOREIGN KEY (`card_type_id`) REFERENCES `card_type` (`id`),
  CONSTRAINT `FK_card_element` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.card : ~154 rows (environ)
DELETE FROM `card`;
INSERT INTO `card` (`id`, `name`, `description`, `power`, `element_id`, `rank_id`, `card_type_id`, `max_chain`) VALUES
	(2, 'Water1', 'Water card1', 250, 1, 1, 1, 1),
	(3, 'Water2', 'Water card2', 1254, 1, 1, 3, 1),
	(4, 'Water3', 'Water card3', 954, 1, 1, 1, 1),
	(5, 'Water4', 'Water card4', 568, 1, 1, 1, 1),
	(6, 'Water5', 'Water card5', 452, 1, 1, 1, 1),
	(7, 'Water6', 'Water card6', 1258, 1, 1, 1, 1),
	(8, 'Water7', 'Water card7', 453, 1, 1, 1, 1),
	(9, 'Water8', 'Water card8', 1850, 1, 1, 1, 1),
	(10, 'Water9', 'Water card9', 752, 1, 1, 1, 1),
	(11, 'Water10', 'Water card10', 763, 1, 1, 1, 1),
	(12, 'Water11', 'Water card11', 824, 1, 1, 1, 1),
	(13, 'Water12', 'Water card12', 963, 1, 1, 1, 1),
	(14, 'Water13', 'Water card13', 947, 1, 1, 1, 1),
	(15, 'Water14', 'Water card14', 789, 1, 1, 1, 1),
	(16, 'Water15', 'Water card15', 998, 1, 1, 1, 1),
	(17, 'Water16', 'Water card16', 458, 1, 1, 1, 1),
	(18, 'Water17', 'Water card17', 1200, 1, 1, 1, 1),
	(19, 'Water18', 'Water card18', 1145, 1, 1, 1, 1),
	(20, 'Water19', 'Water card19', 1456, 1, 1, 1, 1),
	(21, 'Water20', 'Water card20', 1385, 1, 1, 1, 1),
	(22, 'Fire1', 'Fire card1', 250, 5, 1, 1, 1),
	(23, 'Fire2', 'Fire card2', 1254, 5, 1, 3, 1),
	(24, 'Fire3', 'Fire card3', 954, 5, 1, 1, 1),
	(25, 'Fire4', 'Fire card4', 568, 5, 1, 1, 1),
	(26, 'Fire5', 'Fire card5', 452, 5, 1, 1, 1),
	(27, 'Fire6', 'Fire card6', 1258, 5, 1, 1, 1),
	(28, 'Fire7', 'Fire card7', 453, 5, 1, 1, 1),
	(29, 'Fire8', 'Fire card8', 1850, 5, 1, 1, 1),
	(30, 'Fire9', 'Fire card9', 752, 5, 1, 1, 1),
	(31, 'Fire10', 'Fire card10', 763, 5, 1, 1, 1),
	(32, 'Fire11', 'Fire card11', 824, 5, 1, 1, 1),
	(33, 'Fire12', 'Fire card12', 963, 5, 1, 1, 1),
	(34, 'Fire13', 'Fire card13', 947, 5, 1, 1, 1),
	(35, 'Fire14', 'Fire card14', 789, 5, 1, 1, 1),
	(36, 'Fire15', 'Fire card15', 998, 5, 1, 1, 1),
	(37, 'Fire16', 'Fire card16', 458, 5, 1, 1, 1),
	(38, 'Fire17', 'Fire card17', 1200, 5, 1, 1, 1),
	(39, 'Fire18', 'Fire card18', 1145, 5, 1, 1, 1),
	(40, 'Fire19', 'Fire card19', 1456, 5, 1, 1, 1),
	(41, 'Fire20', 'Fire card20', 1385, 5, 1, 1, 1),
	(42, 'Earth1', 'Earth card1', 250, 2, 1, 1, 1),
	(43, 'Earth2', 'Earth card2', 1254, 2, 1, 3, 1),
	(44, 'Earth3', 'Earth card3', 954, 2, 1, 1, 1),
	(45, 'Earth4', 'Earth card4', 568, 2, 1, 1, 1),
	(46, 'Earth5', 'Earth card5', 452, 2, 1, 1, 1),
	(47, 'Earth6', 'Earth card6', 1258, 2, 1, 1, 1),
	(48, 'Earth7', 'Earth card7', 453, 2, 1, 1, 1),
	(49, 'Earth8', 'Earth card8', 1850, 2, 1, 1, 1),
	(50, 'Earth9', 'Earth card9', 752, 2, 1, 1, 1),
	(51, 'Earth10', 'Earth card10', 763, 2, 1, 1, 1),
	(52, 'Earth11', 'Earth card11', 824, 2, 1, 1, 1),
	(53, 'Earth12', 'Earth card12', 963, 2, 1, 1, 1),
	(54, 'Earth13', 'Earth card13', 947, 2, 1, 1, 1),
	(55, 'Earth14', 'Earth card14', 789, 2, 1, 1, 1),
	(56, 'Earth15', 'Earth card15', 998, 2, 1, 1, 1),
	(57, 'Earth16', 'Earth card16', 458, 2, 1, 1, 1),
	(58, 'Earth17', 'Earth card17', 1200, 2, 1, 1, 1),
	(59, 'Earth18', 'Earth card18', 1145, 2, 1, 1, 1),
	(60, 'Earth19', 'Earth card19', 1456, 2, 1, 1, 1),
	(61, 'Earth20', 'Earth card20', 1385, 2, 1, 1, 1),
	(62, 'Wind1', 'Wind card1', 250, 6, 1, 1, 1),
	(63, 'Wind2', 'Wind card2', 1254, 6, 1, 3, 1),
	(64, 'Wind3', 'Wind card3', 954, 6, 1, 1, 1),
	(65, 'Wind4', 'Wind card4', 568, 6, 1, 1, 1),
	(66, 'Wind5', 'Wind card5', 452, 6, 1, 1, 1),
	(67, 'Wind6', 'Wind card6', 1258, 6, 1, 1, 1),
	(68, 'Wind7', 'Wind card7', 453, 6, 1, 1, 1),
	(69, 'Wind8', 'Wind card8', 1850, 6, 1, 1, 1),
	(70, 'Wind9', 'Wind card9', 752, 6, 1, 1, 1),
	(71, 'Wind10', 'Wind card10', 763, 6, 1, 1, 1),
	(72, 'Wind11', 'Wind card11', 824, 6, 1, 1, 1),
	(73, 'Wind12', 'Wind card12', 963, 6, 1, 1, 1),
	(74, 'Wind13', 'Wind card13', 947, 6, 1, 1, 1),
	(75, 'Wind14', 'Wind card14', 789, 6, 1, 1, 1),
	(76, 'Wind15', 'Wind card15', 998, 6, 1, 1, 1),
	(77, 'Wind16', 'Wind card16', 458, 6, 1, 1, 1),
	(78, 'Wind17', 'Wind card17', 1200, 6, 1, 1, 1),
	(79, 'Wind18', 'Wind card18', 1145, 6, 1, 1, 1),
	(80, 'Wind19', 'Wind card19', 1456, 6, 1, 1, 1),
	(81, 'Wind20', 'Wind card20', 1385, 6, 1, 1, 1),
	(82, 'Light1', 'Light card1', 250, 3, 1, 1, 1),
	(83, 'Light2', 'Light card2', 1254, 3, 1, 3, 1),
	(84, 'Light3', 'Light card3', 954, 3, 1, 1, 1),
	(85, 'Light4', 'Light card4', 568, 3, 1, 1, 1),
	(86, 'Light5', 'Light card5', 452, 3, 1, 1, 1),
	(87, 'Light6', 'Light card6', 1258, 3, 1, 1, 1),
	(88, 'Light7', 'Light card7', 453, 3, 1, 1, 1),
	(89, 'Light8', 'Light card8', 1850, 3, 1, 1, 1),
	(90, 'Light9', 'Light card9', 752, 3, 1, 1, 1),
	(91, 'Light10', 'Light card10', 763, 3, 1, 1, 1),
	(92, 'Light11', 'Light card11', 824, 3, 1, 1, 1),
	(93, 'Light12', 'Light card12', 963, 3, 1, 1, 1),
	(94, 'Light13', 'Light card13', 947, 3, 1, 1, 1),
	(95, 'Light14', 'Light card14', 789, 3, 1, 1, 1),
	(96, 'Light15', 'Light card15', 998, 3, 1, 1, 1),
	(97, 'Light16', 'Light card16', 458, 3, 1, 1, 1),
	(98, 'Light17', 'Light card17', 1200, 3, 1, 1, 1),
	(99, 'Light18', 'Light card18', 1145, 3, 1, 1, 1),
	(100, 'Light19', 'Light card19', 1456, 3, 1, 1, 1),
	(101, 'Light20', 'Light card20', 1385, 3, 1, 1, 1),
	(102, 'Darkness1', 'Darkness card1', 250, 4, 1, 1, 1),
	(103, 'Darkness2', 'Darkness card2', 1254, 4, 1, 3, 1),
	(104, 'Darkness3', 'Darkness card3', 954, 4, 1, 1, 1),
	(105, 'Darkness4', 'Darkness card4', 568, 4, 1, 1, 1),
	(106, 'Darkness5', 'Darkness card5', 452, 4, 1, 1, 1),
	(107, 'Darkness6', 'Darkness card6', 1258, 4, 1, 1, 1),
	(108, 'Darkness7', 'Darkness card7', 453, 4, 1, 1, 1),
	(109, 'Darkness8', 'Darkness card8', 1850, 4, 1, 1, 1),
	(110, 'Darkness9', 'Darkness card9', 752, 4, 1, 1, 1),
	(111, 'Darkness10', 'Darkness card10', 763, 4, 1, 1, 1),
	(112, 'Darkness11', 'Darkness card11', 824, 4, 1, 1, 1),
	(113, 'Darkness12', 'Darkness card12', 963, 4, 1, 1, 1),
	(114, 'Darkness13', 'Darkness card13', 947, 4, 1, 1, 1),
	(115, 'Darkness14', 'Darkness card14', 789, 4, 1, 1, 1),
	(116, 'Darkness15', 'Darkness card15', 998, 4, 1, 1, 1),
	(117, 'Darkness16', 'Darkness card16', 458, 4, 1, 1, 1),
	(118, 'Darkness17', 'Darkness card17', 1200, 4, 1, 1, 1),
	(119, 'Darkness18', 'Darkness card18', 1145, 4, 1, 1, 1),
	(120, 'Darkness19', 'Darkness card19', 1456, 4, 1, 1, 1),
	(121, 'Darkness20', 'Darkness card20', 1385, 4, 1, 1, 1),
	(122, 'Wildness1', 'Wildness card1', 250, 7, 1, 1, 1),
	(123, 'Wildness2', 'Wildness card2', 1254, 7, 1, 3, 1),
	(124, 'Wildness3', 'Wildness card3', 954, 7, 1, 1, 1),
	(125, 'Wildness4', 'Wildness card4', 568, 7, 1, 1, 1),
	(126, 'Wildness5', 'Wildness card5', 452, 7, 1, 1, 1),
	(127, 'Wildness6', 'Wildness card6', 1258, 7, 1, 1, 1),
	(128, 'Wildness7', 'Wildness card7', 453, 7, 1, 1, 1),
	(129, 'Wildness8', 'Wildness card8', 1850, 7, 1, 1, 1),
	(130, 'Wildness9', 'Wildness card9', 752, 7, 1, 1, 1),
	(131, 'Wildness10', 'Wildness card10', 763, 7, 1, 1, 1),
	(132, 'Wildness11', 'Wildness card11', 824, 7, 1, 1, 1),
	(133, 'Wildness12', 'Wildness card12', 963, 7, 1, 1, 1),
	(134, 'Wildness13', 'Wildness card13', 947, 7, 1, 1, 1),
	(135, 'Wildness14', 'Wildness card14', 789, 7, 1, 1, 1),
	(136, 'Wildness15', 'Wildness card15', 998, 7, 1, 1, 1),
	(137, 'Wildness16', 'Wildness card16', 458, 7, 1, 1, 1),
	(138, 'Wildness17', 'Wildness card17', 1200, 7, 1, 1, 1),
	(139, 'Wildness18', 'Wildness card18', 1145, 7, 1, 1, 1),
	(140, 'Wildness19', 'Wildness card19', 1456, 7, 1, 1, 1),
	(141, 'Wildness20', 'Wildness card20', 1385, 7, 1, 1, 1),
	(142, 'WaterField1', 'Water field1', 0, 1, 1, 2, 1),
	(143, 'WaterField2', 'Water field2', 0, 1, 1, 2, 1),
	(144, 'FireField1', 'Fire field1', 0, 5, 1, 2, 1),
	(145, 'FireField2', 'Fire field2', 0, 5, 1, 2, 1),
	(146, 'WildnessField1', 'Wildness field1', 0, 7, 1, 2, 1),
	(147, 'WildnessField2', 'Wildness field2', 0, 7, 1, 2, 1),
	(148, 'DarknessField1', 'Darkness field1', 0, 4, 1, 2, 1),
	(149, 'DarknessField2', 'Darkness field2', 0, 4, 1, 2, 1),
	(150, 'WindField1', 'Wind field1', 0, 6, 1, 2, 1),
	(151, 'WindField2', 'Wind field2', 0, 6, 1, 2, 1),
	(152, 'LightField1', 'Light field1', 0, 3, 1, 2, 1),
	(153, 'LightField2', 'Light field2', 0, 3, 1, 2, 1),
	(154, 'EarthField1', 'Earth field1', 0, 2, 1, 2, 1),
	(155, 'EarthField2', 'Earth field2', 0, 2, 1, 2, 1);

-- Listage de la structure de table cta. card_rank
CREATE TABLE IF NOT EXISTS `card_rank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` tinytext NOT NULL,
  `name` tinytext NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.card_rank : ~4 rows (environ)
DELETE FROM `card_rank`;
INSERT INTO `card_rank` (`id`, `code`, `name`) VALUES
	(1, 'c', ''),
	(2, 'b', ''),
	(3, 'a', ''),
	(4, 's', '');

-- Listage de la structure de table cta. card_type
CREATE TABLE IF NOT EXISTS `card_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.card_type : ~3 rows (environ)
DELETE FROM `card_type`;
INSERT INTO `card_type` (`id`, `name`) VALUES
	(1, 'battle'),
	(2, 'field'),
	(3, 'leader');

-- Listage de la structure de table cta. element
CREATE TABLE IF NOT EXISTS `element` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.element : ~7 rows (environ)
DELETE FROM `element`;
INSERT INTO `element` (`id`, `name`) VALUES
	(1, 'water'),
	(2, 'earth'),
	(3, 'light'),
	(4, 'darkness'),
	(5, 'fire'),
	(6, 'wind'),
	(7, 'wildness');

-- Listage de la structure de table cta. element_affinity
CREATE TABLE IF NOT EXISTS `element_affinity` (
  `element_id` int(11) NOT NULL,
  `affinity_element` int(11) NOT NULL,
  `affinity_type` int(11) NOT NULL,
  UNIQUE KEY `element_id_affinity_element` (`element_id`,`affinity_element`),
  KEY `FK_element_affinity_element_2` (`affinity_element`),
  CONSTRAINT `FK_element_affinity_element` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`),
  CONSTRAINT `FK_element_affinity_element_2` FOREIGN KEY (`affinity_element`) REFERENCES `element` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.element_affinity : ~28 rows (environ)
DELETE FROM `element_affinity`;
INSERT INTO `element_affinity` (`element_id`, `affinity_element`, `affinity_type`) VALUES
	(1, 2, 1),
	(1, 3, 1),
	(1, 4, 2),
	(1, 5, 2),
	(2, 1, 1),
	(2, 4, 2),
	(2, 6, 1),
	(2, 7, 2),
	(3, 1, 1),
	(3, 5, 2),
	(3, 6, 2),
	(3, 7, 1),
	(4, 1, 2),
	(4, 2, 2),
	(4, 5, 1),
	(4, 7, 1),
	(5, 1, 2),
	(5, 3, 2),
	(5, 4, 1),
	(5, 6, 1),
	(6, 2, 1),
	(6, 3, 2),
	(6, 5, 1),
	(6, 7, 2),
	(7, 2, 2),
	(7, 3, 1),
	(7, 4, 1),
	(7, 6, 2);

-- Listage de la structure de table cta. element_weakness
CREATE TABLE IF NOT EXISTS `element_weakness` (
  `element_id` int(11) NOT NULL,
  `weakness_element_id` int(11) NOT NULL,
  `coef` float NOT NULL,
  UNIQUE KEY `Index 3` (`element_id`,`weakness_element_id`) USING BTREE,
  KEY `FK_element_weakness_element` (`weakness_element_id`),
  CONSTRAINT `FK__element` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`),
  CONSTRAINT `FK_element_weakness_element` FOREIGN KEY (`weakness_element_id`) REFERENCES `element` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.element_weakness : ~14 rows (environ)
DELETE FROM `element_weakness`;
INSERT INTO `element_weakness` (`element_id`, `weakness_element_id`, `coef`) VALUES
	(1, 4, 0.2),
	(1, 7, 0.2),
	(2, 3, 0.2),
	(2, 7, 0.2),
	(3, 4, 0.2),
	(3, 5, 0.2),
	(4, 2, 0.2),
	(4, 6, 0.2),
	(5, 1, 0.2),
	(5, 2, 0.2),
	(6, 1, 0.2),
	(6, 3, 0.2),
	(7, 5, 0.2),
	(7, 6, 0.2);

-- Listage de la structure de table cta. player
CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.player : ~3 rows (environ)
DELETE FROM `player`;
INSERT INTO `player` (`id`, `name`) VALUES
	(1, 'Matthieu'),
	(2, 'Julien'),
	(3, 'Default');

-- Listage de la structure de table cta. player_card
CREATE TABLE IF NOT EXISTS `player_card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `card_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_player_card_card` (`card_id`),
  KEY `FK_player_card_player` (`player_id`),
  CONSTRAINT `FK_player_card_card` FOREIGN KEY (`card_id`) REFERENCES `card` (`id`),
  CONSTRAINT `FK_player_card_player` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.player_card : ~154 rows (environ)
DELETE FROM `player_card`;
INSERT INTO `player_card` (`id`, `name`, `card_id`, `player_id`) VALUES
	(2, 'Water', 2, 3),
	(3, 'Water', 3, 3),
	(4, 'Water', 4, 3),
	(5, 'Water', 5, 3),
	(6, 'Water', 6, 3),
	(7, 'Water', 7, 3),
	(8, 'Water', 8, 3),
	(9, 'Water', 9, 3),
	(10, 'Water', 10, 3),
	(11, 'Water', 11, 3),
	(12, 'Water', 12, 3),
	(13, 'Water', 13, 3),
	(14, 'Water', 14, 3),
	(15, 'Water', 15, 3),
	(16, 'Water', 16, 3),
	(17, 'Water', 17, 3),
	(18, 'Water', 18, 3),
	(19, 'Water', 19, 3),
	(20, 'Water', 20, 3),
	(21, 'Water', 21, 3),
	(22, 'Fire', 22, 3),
	(23, 'Fire', 23, 3),
	(24, 'Fire', 24, 3),
	(25, 'Fire', 25, 3),
	(26, 'Fire', 26, 3),
	(27, 'Fire', 27, 3),
	(28, 'Fire', 28, 3),
	(29, 'Fire', 29, 3),
	(30, 'Fire', 30, 3),
	(31, 'Fire', 31, 3),
	(32, 'Fire', 32, 3),
	(33, 'Fire', 33, 3),
	(34, 'Fire', 34, 3),
	(35, 'Fire', 35, 3),
	(36, 'Fire', 36, 3),
	(37, 'Fire', 37, 3),
	(38, 'Fire', 38, 3),
	(39, 'Fire', 39, 3),
	(40, 'Fire', 40, 3),
	(41, 'Fire', 41, 3),
	(42, 'Earth', 42, 3),
	(43, 'Earth', 43, 3),
	(44, 'Earth', 44, 3),
	(45, 'Earth', 45, 3),
	(46, 'Earth', 46, 3),
	(47, 'Earth', 47, 3),
	(48, 'Earth', 48, 3),
	(49, 'Earth', 49, 3),
	(50, 'Earth', 50, 3),
	(51, 'Earth', 51, 3),
	(52, 'Earth', 52, 3),
	(53, 'Earth', 53, 3),
	(54, 'Earth', 54, 3),
	(55, 'Earth', 55, 3),
	(56, 'Earth', 56, 3),
	(57, 'Earth', 57, 3),
	(58, 'Earth', 58, 3),
	(59, 'Earth', 59, 3),
	(60, 'Earth', 60, 3),
	(61, 'Earth', 61, 3),
	(62, 'Wind', 62, 3),
	(63, 'Wind', 63, 3),
	(64, 'Wind', 64, 3),
	(65, 'Wind', 65, 3),
	(66, 'Wind', 66, 3),
	(67, 'Wind', 67, 3),
	(68, 'Wind', 68, 3),
	(69, 'Wind', 69, 3),
	(70, 'Wind', 70, 3),
	(71, 'Wind', 71, 3),
	(72, 'Wind', 72, 3),
	(73, 'Wind', 73, 3),
	(74, 'Wind', 74, 3),
	(75, 'Wind', 75, 3),
	(76, 'Wind', 76, 3),
	(77, 'Wind', 77, 3),
	(78, 'Wind', 78, 3),
	(79, 'Wind', 79, 3),
	(80, 'Wind', 80, 3),
	(81, 'Wind', 81, 3),
	(82, 'Light', 82, 3),
	(83, 'Light', 83, 3),
	(84, 'Light', 84, 3),
	(85, 'Light', 85, 3),
	(86, 'Light', 86, 3),
	(87, 'Light', 87, 3),
	(88, 'Light', 88, 3),
	(89, 'Light', 89, 3),
	(90, 'Light', 90, 3),
	(91, 'Light', 91, 3),
	(92, 'Light', 92, 3),
	(93, 'Light', 93, 3),
	(94, 'Light', 94, 3),
	(95, 'Light', 95, 3),
	(96, 'Light', 96, 3),
	(97, 'Light', 97, 3),
	(98, 'Light', 98, 3),
	(99, 'Light', 99, 3),
	(100, 'Light', 100, 3),
	(101, 'Light', 101, 3),
	(102, 'Darkness', 102, 3),
	(103, 'Darkness', 103, 3),
	(104, 'Darkness', 104, 3),
	(105, 'Darkness', 105, 3),
	(106, 'Darkness', 106, 3),
	(107, 'Darkness', 107, 3),
	(108, 'Darkness', 108, 3),
	(109, 'Darkness', 109, 3),
	(110, 'Darkness', 110, 3),
	(111, 'Darkness', 111, 3),
	(112, 'Darkness', 112, 3),
	(113, 'Darkness', 113, 3),
	(114, 'Darkness', 114, 3),
	(115, 'Darkness', 115, 3),
	(116, 'Darkness', 116, 3),
	(117, 'Darkness', 117, 3),
	(118, 'Darkness', 118, 3),
	(119, 'Darkness', 119, 3),
	(120, 'Darkness', 120, 3),
	(121, 'Darkness', 121, 3),
	(122, 'Wildness', 122, 3),
	(123, 'Wildness', 123, 3),
	(124, 'Wildness', 124, 3),
	(125, 'Wildness', 125, 3),
	(126, 'Wildness', 126, 3),
	(127, 'Wildness', 127, 3),
	(128, 'Wildness', 128, 3),
	(129, 'Wildness', 129, 3),
	(130, 'Wildness', 130, 3),
	(131, 'Wildness', 131, 3),
	(132, 'Wildness', 132, 3),
	(133, 'Wildness', 133, 3),
	(134, 'Wildness', 134, 3),
	(135, 'Wildness', 135, 3),
	(136, 'Wildness', 136, 3),
	(137, 'Wildness', 137, 3),
	(138, 'Wildness', 138, 3),
	(139, 'Wildness', 139, 3),
	(140, 'Wildness', 140, 3),
	(141, 'Wildness', 141, 3),
	(142, 'Water', 142, 3),
	(143, 'Water', 143, 3),
	(144, 'Fire', 144, 3),
	(145, 'Fire', 145, 3),
	(146, 'Earth', 154, 3),
	(147, 'Earth', 155, 3),
	(148, 'Wind', 150, 3),
	(149, 'Wind', 151, 3),
	(150, 'Darkness', 148, 3),
	(151, 'Darkness', 149, 3),
	(152, 'Light', 152, 3),
	(153, 'Light', 153, 3),
	(154, 'Wildness', 147, 3),
	(155, 'Wildness', 146, 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
