-- create the burgers database --
-- only works locally --
CREATE DATABASE burgers_db;
USE burgers_db;

-- burgers table
CREATE TABLE burgers (
    id AUTO INT,
    burger_name name VARCHAR (20),
    devoured INTEGER (4)
);


