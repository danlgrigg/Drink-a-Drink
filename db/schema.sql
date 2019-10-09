CREATE DATABASE drinks_db;
USE drinks_db;

CREATE TABLE drinks
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	drink_name varchar(255) NOT NULL,
	imbibed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
