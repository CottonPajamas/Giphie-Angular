CREATE DATABASE  IF NOT EXISTS `stockist` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `stockist`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: stockist
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favourites` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `UrlLink` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourites`
--
-- ORDER BY:  `Id`

LOCK TABLES `favourites` WRITE;
/*!40000 ALTER TABLE `favourites` DISABLE KEYS */;
INSERT INTO `favourites` (`Id`, `UserName`, `Title`, `UrlLink`) VALUES (1,'Default','PRESIDENTS DAY ASL GIF BY SIGN WITH ROBERT','https://media3.giphy.com/media/3o7TKoyIsLDeNtlRtu/giphy.gif'),(5,'Default','DO YOU GIF BY LATE NIGHT WITH SETH MEYERS','https://media0.giphy.com/media/3o6fIQJ2YWfsKjJd9m/giphy.gif'),(7,'Default','THE GOOD PLACE SUPER BOWL REACTIONS GIF BY NBC','https://media2.giphy.com/media/26DN76nv3GnDBETxS/giphy.gif'),(9,'Default','TRUMP SMILE GIF','https://media2.giphy.com/media/psnG8iKvm5lo4/giphy.gif'),(10,'Default','TRUMP GIF','https://media0.giphy.com/media/zqA62x7MnjmaA/giphy.gif'),(11,'Default','BRUCE LEE SHOCK GIF','https://media2.giphy.com/media/10J0Gj2jWO9tKg/giphy.gif'),(12,'Default','SPONGE BOB GIF','https://media2.giphy.com/media/rOEvmLAxxcE1i/giphy.gif'),(13,'Default','WIZARD OF OZ SLAPPING GIF','https://media0.giphy.com/media/12bkMjatTEfoWI/giphy.gif'),(19,'Default','FOOD PORN LOBSTER GIF BY FOOD NETWORK CANADA','https://media1.giphy.com/media/xT1R9MMaTxSYWMxyQE/giphy.gif'),(20,'Default','BAKER SISTERS BAKING GIF BY FOOD NETWORK CANADA','https://media0.giphy.com/media/xT1R9WLnGo2cy5wnn2/giphy.gif'),(21,'Default','BARNEY DANCING GIF','https://media2.giphy.com/media/Yzfsx3x8illqE/giphy.gif'),(23,'Default','CHIPS EATING GIF','https://media2.giphy.com/media/2pwlC4V60TsAg/giphy.gif'),(26,'Default','HOMER SIMPSON APPLE GIF','https://media1.giphy.com/media/Yjb1jDhMWswRG/giphy.gif'),(27,'Default','HUNGRY BURGER GIF BY SPONGEBOB SQUAREPANTS','https://media2.giphy.com/media/IgOEWPOgK6uVa/giphy.gif'),(28,'Default','RAINBOW SPONGEBOB GIF','https://media0.giphy.com/media/SKGo6OYe24EBG/giphy.gif'),(29,'ae','HALLMARK MOVIES WHAT GIF BY HALLMARK CHANNEL','https://media2.giphy.com/media/3ohhwyFJ9qcb4Ta5va/giphy.gif'),(31,'Default','HAPPY NBC GIF BY SATURDAY NIGHT LIVE','https://media1.giphy.com/media/d3YIC9dlEtKjGVUI/giphy.gif');
/*!40000 ALTER TABLE `favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'stockist'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-25 21:27:24


