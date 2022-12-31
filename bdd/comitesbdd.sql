-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rut` INT NOT NULL,
  `razon` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `comuna` VARCHAR(45) NOT NULL,
  `fecha` DATE NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comites_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_comites_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `mydb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`socios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`socios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rut` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` TINYINT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `comuna` VARCHAR(45) NOT NULL,
  `comites_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_socios_comites_idx` (`comites_id` ASC) VISIBLE,
  CONSTRAINT `fk_socios_comites`
    FOREIGN KEY (`comites_id`)
    REFERENCES `mydb`.`comites` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
