-- SCHEMA --
-- DROPS(deletes) DATABASE of same name if it exists --
DROP DATABASE IF EXISTS trackemployees_db;
-- CREATE TRACKEMPLOYEES DATABASE --
CREATE DATABASE trackemployees_db;

-- SETS DATABASE AS ONE BEING USED --
USE trackemployees_db;

-- CREATE THE REQUIRED TABLES --
-- DEPARTMENT --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);
-- ROLE --
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DEC(17, 2),
  department_id INT,
  PRIMARY KEY (id)
);
-- EMPLOYEE --
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  -- id reference to another employee --
  manager_id INT,
  PRIMARY KEY (id)
);