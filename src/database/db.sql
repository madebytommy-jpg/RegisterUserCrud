
CREATE DATABASE usuariosiptv;


use usuariosiptv;


CREATE TABLE usuarios (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL, 
    fecha_de_entrada DATE NOT NULL,
    fecha_de_salida DATE NOT NULL 
);


SHOW TABLES;


describe usuarios;
