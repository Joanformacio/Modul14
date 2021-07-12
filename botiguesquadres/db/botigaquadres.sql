-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbbotiguesquadres
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `botigues`
--

DROP TABLE IF EXISTS `botigues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `botigues` (
  `idbotiga` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `capacitat` int DEFAULT NULL,
  PRIMARY KEY (`idbotiga`),
  UNIQUE KEY `idbotiga_UNIQUE` (`idbotiga`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `botigues`
--

LOCK TABLES `botigues` WRITE;
/*!40000 ALTER TABLE `botigues` DISABLE KEYS */;
INSERT INTO `botigues` VALUES (1,'cuadros Antonio',35),(2,'Arte balmes',20),(3,'Romanic Barcelona',15),(6,'Arte Mediterraneo',35),(7,'Art nuri',10),(9,'Botiga art antonio',20);
/*!40000 ALTER TABLE `botigues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (62);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quadres`
--

DROP TABLE IF EXISTS `quadres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quadres` (
  `idquadre` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `autor` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dataentrada` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `idbotiga` int NOT NULL,
  PRIMARY KEY (`idquadre`),
  UNIQUE KEY `idquadre_UNIQUE` (`idquadre`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quadres`
--

LOCK TABLES `quadres` WRITE;
/*!40000 ALTER TABLE `quadres` DISABLE KEYS */;
INSERT INTO `quadres` VALUES (1,'Los pececillos','null','12/06/2006',1),(2,'boi','yo mismo','12/06/2006',2),(3,'las meninas','Velazquez','12/06/2006',3),(4,'Las señoritas de avignon','Picasso','12/06/2006',1),(5,'Ciencia y caridad','Picasso','12/062006',2),(6,'Guernica','Picaso','12/06/2006',3),(7,'Mona lisa','Leonardo','05/05/2010',1),(9,'La ultima cena','Leonardo','05/05/2010',3),(53,'Petalos','el','26/06/2021',9);
/*!40000 ALTER TABLE `quadres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-14 19:38:29
