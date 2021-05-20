-- SEEDS --
-- -- DEPARTMENT --
--   name VARCHAR(30)
INSERT INTO department (name)
VALUES ("HR"),
("Social Media"),
("Marketing"),
("Shipping"),
("IT");

-- -- ROLE --
--   title VARCHAR(30),
--   salary DEC(17, 2),
--   department_id INT
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 1200000.00, 1),
("Manager", 1200000.00, 2),
("Manager", 1200000.00, 3),
("Manager", 1200000.00, 4),
("Manager", 1200000.00, 5),
("Intern", 20000.00, 5);

-- -- EMPLOYEE --
--   first_name VARCHAR(30),
--   last_name VARCHAR(30),
--   role_id INT,
--   -- id reference to another employee --
--   manager_id INT
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandon", "Sanderson", 1, NULL),
("Brandon", "Sanderson", 2, NULL),
("Brandon", "Sanderson", 3, NULL),
("Brandon", "Sanderson", 4, NULL),
("Brandon", "Sanderson", 5, NULL),
("Patrick", "Rothfuss", 6, 1);

-- VIEW TABLES --
SELECT * FROM department;
SELECT * FROM role; 
SELECT * FROM employee;
-- view all --
SELECT employee.id, first_name, last_name, title, department.name, salary, manager_id FROM department
INNER JOIN role
INNER JOIN employee
WHERE role.department_id = department.id
AND employee.role_id = role.id;

-- -- DISABLE SAFE UPDATES --
-- SET SQL_SAFE_UPDATES = 0;