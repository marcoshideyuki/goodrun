CREATE DATABASE goodrun;
USE goodrun;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(40),
    email VARCHAR(50),
    senha VARCHAR(20)
);

SELECT * FROM usuario;

CREATE TABLE Publicacao(
	idPublicacao INT AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario),
    distancia INT NOT NULL,
    tempo INT NOT NULL,
     PRIMARY KEY (idPublicacao, fk_usuario)
);

SELECT * FROM publicacao;

CREATE TABLE Endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
	tipoLogradouro VARCHAR(45),
	logradouro VARCHAR(45),
	bairro VARCHAR(45),
	cep CHAR(8),
	fk_publicacao INT,
	fk_usuario INT,
	FOREIGN KEY fk_publicacao REFERENCES Publicacao(idPublicacao),
	FOREIGN KEY fk_usuario REFERENCES Publicacao(fk_usuario)
);

SELECT * FROM Endereco;

CREATE TABLE Percurso(
	idPercurso INT PRIMARY KEY AUTO_INCREMENT,
	nomePercurso VARCHAR(45),
	frequencia INT,
	fk_endereco INT,
	FOREIGN KEY (fk_endereco) REFERENCES Endereco(idEndereco)
);

SELECT * FROM Percurso;

CREATE TABLE Corrida(
	idCorrida INT,
	fk_percurso INT,
	fk_usuario INT,
	dataCorrida DATETIME
	PRIMARY KEY (idCorrida, fk_percurso, fk_usuario),
	FOREIGN KEY fk_percurso REFERENCES Percurso(idPercurso),
	FOREIGN KEY fk_usuario REFERENCES Usuario(idUsuario)
);

SELECT * FROM Corrida;