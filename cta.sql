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
DROP DATABASE IF EXISTS `cta`;
CREATE DATABASE IF NOT EXISTS `cta` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cta`;

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
  CONSTRAINT `FK_card_card_rank` FOREIGN KEY (`rank_id`) REFERENCES `card_rank` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_card_card_type` FOREIGN KEY (`card_type_id`) REFERENCES `card_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_card_element` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.card : ~0 rows (environ)
DELETE FROM `card`;
INSERT INTO `card` (`id`, `name`, `description`, `power`, `element_id`, `rank_id`, `card_type_id`, `max_chain`) VALUES
	(1, 'toto', 'a useless card', 100, 4, NULL, 1, 1);

-- Listage de la structure de table cta. card_rank
DROP TABLE IF EXISTS `card_rank`;
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
DROP TABLE IF EXISTS `card_type`;
CREATE TABLE IF NOT EXISTS `card_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.card_type : ~2 rows (environ)
DELETE FROM `card_type`;
INSERT INTO `card_type` (`id`, `name`) VALUES
	(1, 'battle'),
	(2, 'field');

-- Listage de la structure de table cta. element
DROP TABLE IF EXISTS `element`;
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

-- Listage de la structure de table cta. element_weakness
DROP TABLE IF EXISTS `element_weakness`;
CREATE TABLE IF NOT EXISTS `element_weakness` (
  `element_id` int(11) NOT NULL,
  `weakness_element_id` int(11) NOT NULL,
  `coef` float NOT NULL,
  UNIQUE KEY `Index 3` (`element_id`,`weakness_element_id`) USING BTREE,
  KEY `FK_element_weakness_element` (`weakness_element_id`),
  CONSTRAINT `FK__element` FOREIGN KEY (`element_id`) REFERENCES `element` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_element_weakness_element` FOREIGN KEY (`weakness_element_id`) REFERENCES `element` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.element_weakness : ~12 rows (environ)
DELETE FROM `element_weakness`;
INSERT INTO `element_weakness` (`element_id`, `weakness_element_id`, `coef`) VALUES
	(1, 6, 0.2),
	(1, 7, 0.2),
	(2, 1, 0.2),
	(2, 7, 0.2),
	(3, 2, 0.2),
	(4, 3, 0.2),
	(5, 1, 0.2),
	(5, 4, 0.2),
	(6, 2, 0.2),
	(6, 5, 0.2),
	(7, 5, 0.2),
	(7, 6, 0.2);

-- Listage de la structure de table cta. player
DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.player : ~2 rows (environ)
DELETE FROM `player`;
INSERT INTO `player` (`id`, `name`) VALUES
	(1, 'Matthieu'),
	(2, 'Julien');

-- Listage de la structure de table cta. player_card
DROP TABLE IF EXISTS `player_card`;
CREATE TABLE IF NOT EXISTS `player_card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `card_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_player_card_card` (`card_id`),
  KEY `FK_player_card_player` (`player_id`),
  CONSTRAINT `FK_player_card_card` FOREIGN KEY (`card_id`) REFERENCES `card` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_player_card_player` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table cta.player_card : ~2 rows (environ)
DELETE FROM `player_card`;
INSERT INTO `player_card` (`id`, `name`, `card_id`, `player_id`) VALUES
	(1, 'Deck principal', 1, 1),
	(2, 'pour le fun', 1, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
