-- create the burgers database --
-- only works locally --
CREATE DATABASE burgers_db;
USE burgers_db;

-- burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name name VARCHAR (20) NOT NULL,
    devoured INTEGER (4) NOT NULL,
    PRIMARY KEY (id)
);

-- inserting data into tables --
INSERT INTO burgers VALUES ("Veggie Burger");
INSERT INTO burgers VALUES ("Whopper");
INSERT INTO burgers VALUES ("Bacon King");