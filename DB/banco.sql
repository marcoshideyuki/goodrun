CREATE DATABASE goodrun;
USE goodrun;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(40),
    email VARCHAR(50),
    senha VARCHAR(20)
);

SELECT * FROM usuario;

CREATE TABLE corrida (
	id INT PRIMARY KEY auto_increment,
    tempo time
);

CREATE TABLE publicacao (
	idPublicacao INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM corrida;