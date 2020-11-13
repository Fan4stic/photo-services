-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  `id_restuarants` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'restuarants'
--
-- ---

DROP TABLE IF EXISTS `restuarants`;

CREATE TABLE `restuarants` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `email` VARCHAR NULL DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user_favorites'
--
-- ---

DROP TABLE IF EXISTS `user_favorites`;

CREATE TABLE `user_favorites` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_restuarants` INTEGER NULL DEFAULT NULL,
  `id_favorite_categories` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'favorite_categories'
--
-- ---

DROP TABLE IF EXISTS `favorite_categories`;

CREATE TABLE `favorite_categories` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `photos` ADD FOREIGN KEY (id_restuarants) REFERENCES `restuarants` (`id`);
ALTER TABLE `user_favorites` ADD FOREIGN KEY (id_restuarants) REFERENCES `restuarants` (`id`);
ALTER TABLE `user_favorites` ADD FOREIGN KEY (id_favorite_categories) REFERENCES `favorite_categories` (`id`);
ALTER TABLE `favorite_categories` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `restuarants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_favorites` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `favorite_categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `photos` (`id`,`url`,`id_restuarants`) VALUES
-- ('','','');
-- INSERT INTO `restuarants` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `users` (`id`,`email`,`username`) VALUES
-- ('','','');
-- INSERT INTO `user_favorites` (`id`,`id_restuarants`,`id_favorite_categories`) VALUES
-- ('','','');
-- INSERT INTO `favorite_categories` (`id`,`id_users`) VALUES
-- ('','');