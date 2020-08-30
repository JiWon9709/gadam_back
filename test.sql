CREATE DATABASE test;
USE test;

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` int(45) NOT NULL,
  `nick` varchar(30) NOT NULL,
  `usertype` varchar(10) NOT NULL,
  `birth` int(15) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `phone` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
);

------샘플 데이터-----
INSERT INTO `user` VALUES (1,'jiwon@email.com', 1234, 'jiwon', 'user', 970924, 'f', '01012345678');
INSERT INTO `user` VALUES (2,'semin@email.com', 1234, 'semin', 'user', 970805, 'f', '01011115678');
INSERT INTO `user` VALUES (3,'kyk@email.com', 1234, 'kyk', 'user', 970712, 'f', '01022225678');
INSERT INTO `user` VALUES (4,'jiyeon@email.com', 1234, 'jiyeon', 'user', 971111, 'f', '01033335678');


CREATE TABLE `exercise` (
  `idexercise` int(10),
  `exercise_name` varchar(45),
  PRIMARY KEY (`idexercise`)
);

INSERT INTO `exercise` VALUES (1, '수영');
INSERT INTO `exercise` VALUES (2, '탁구');
INSERT INTO `exercise` VALUES (3, '배드민턴');
INSERT INTO `exercise` VALUES (4, '러닝');
INSERT INTO `exercise` VALUES (5, '사이클');

CREATE TABLE `crew` (
  `idcrew` int(10) NOT NULL AUTO_INCREMENT,
  `crew_name` varchar(45),
  `image` VARCHAR(45),
  `idexercise` int(10),
  `location` VARCHAR(45),
  `start_time` VARCHAR(45),
  `end_time` VARCHAR(45),
  `description` VARCHAR(45),
  `guest_num` int(5),
  PRIMARY KEY (idcrew),
  FOREIGN KEY(idexercise)
  REFERENCES exercise(idexercise) ON UPDATE CASCADE
);


CREATE TABLE `user_crew_map` (
  `id_userCrew_map` int(10) NOT NULL AUTO_INCREMENT,
  `user_iduser` int(10),
  `crew_idcrew` int(10),
  `isHost` int(2),
  `isInCart` int(2) DEFAULT NULL,
  PRIMARY KEY (id_userCrew_map),
  FOREIGN KEY(user_iduser)
  REFERENCES user(id) ON UPDATE CASCADE,
  FOREIGN KEY(crew_idcrew)
  REFERENCES crew(idcrew) ON UPDATE CASCADE
);



CREATE TABLE `review` (
  `idreview` int(10) NOT NULL AUTO_INCREMENT,
  `review` varchar(45),
  `star` int(5),
  PRIMARY KEY (idreview)
);


CREATE TABLE `review_user_crew_map` (
  `user_iduser` int(10),
  `crew_idcrew` int(10),
  `review_idreview` int(10),
  FOREIGN KEY(user_iduser)
  REFERENCES user(id) ON UPDATE CASCADE,
  FOREIGN KEY(crew_idcrew)
  REFERENCES crew(idcrew) ON UPDATE CASCADE,
  FOREIGN KEY(review_idreview)
  REFERENCES review(idreview) ON UPDATE CASCADE
);
