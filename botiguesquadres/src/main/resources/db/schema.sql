/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Joan
 * Created: 6 de maig 2021
 */

DROP TABLE IF EXISTS botigues;
DROP TABLE IF EXISTS quadres;



CREATE TABLE botigues (
  idbotiga INT AUTO_INCREMENT  PRIMARY KEY,
  nom varchar(45)  NOT NULL,
  capacitat INT DEFAULT NULL
);

CREATE TABLE quadres (
  idquadre INT  AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(45) NOT NULL,
  autor VARCHAR(45)  DEFAULT NULL,
  dataentrada VARCHAR(10)  NOT NULL,
  idbotiga INT DEFAULT NULL,
  constraint FK6tf78q1x8iefalhw55askksjk 
       foreign key (idbotiga) 
       references botigues
);
