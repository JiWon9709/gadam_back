CREATE DATABASE test;
USE test;

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `user` VALUES (1,'egoing','developer');
INSERT INTO `user` VALUES (2,'duru','database administrator');
INSERT INTO `user` VALUES (3,'taeho','data scientist, developer');

CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

