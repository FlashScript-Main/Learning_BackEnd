-- 🔻 Trigger 🔻
-- when an event happens, do something
-- examples: INSERT, UPDATE, DELETE
-- checks data, handles errors, auditing tables

SELECT * FROM employees;


ALTER TABLE employees
ADD COLUMN salary DECIMAL(10, 2) AFTER hourly_pay;

SELECT * FROM employees;


-- Let's update our employees table base on Salary year payment
-- 400 hours per week
-- 52 weeks per year
UPDATE employees
SET salary = hourly_pay * 400 * 52;

SELECT * FROM employees;


-- what i want is whenever we update an employee's hourly pay, 
-- I would like to also update the salary automatically with the trigger 
-- I don't want to have to calculate every employee's salary manually, using a calculator 
CREATE TRIGGER before_hourly_pay_update
BEFORE UPDATE ON employees
FOR EACH ROW
SET NEW.salary = (NEW.hourly_pay * 400 * 52);


-- See your Triggers
SHOW TRIGGERS;


UPDATE employees
SET hourly_pay = 50
WHERE employee_id = 1;

SELECT * FROM employees;


-- let's create a new trigger 
-- we will calculate a salary whenever we insert a new employee 
-- more specifically whenever we insert a new hourly pay 
-- right now we have a trigger that only kicks in when we update an hourly pay
CREATE TRIGGER before_hourly_pay_insert
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.salary = (NEW.hourly_pay * 400 * 52);


-- Let's insert a new employee
INSERT INTO employees
VALUES(6, "Sheldon", "Plankton", 10, NULL);

SELECT * FROM employees;


-- I do have a few more examples 
-- triggers are something you'll want to master
-- they're really helpful 
-- we're going to create a new table this time
CREATE TABLE expenses(
	expense_id INT PRIMARY KEY AUTO_INCREMENT,
    expense_name VARCHAR(50),
    expense_total DECIMAL(10, 2)
);

INSERT INTO expenses (expense_name, expense_total)
VALUES ("salaries", 0),
       ("supplies", 0),
       ("taxes", 0);
       
SELECT * FROM expenses;


-- Let's calculate the expense total of our salaries
UPDATE expenses
SET expense_total = (SELECT SUM(salary) FROM employees)
WHERE expense_name = "salaries";

SELECT * FROM expenses;


-- whenever we delete an employee, 
-- we will update this value found within another table our expenses table
-- so let's create a trigger for it
CREATE TRIGGER after_salary_delete
AFTER DELETE ON employees
FOR EACH ROW
UPDATE expenses
SET expense_total = expense_total - OLD.salary
WHERE expense_name = "salaries";


-- I'm going to delete Plankton, he's fired!
DELETE FROM employees
WHERE employee_id = 6; 

SELECT * FROM expenses;


-- Let's create a trigger that will update our salaries 
-- whenever we insert a new employee
CREATE TRIGGER after_salary_insert
AFTER INSERT ON employees
FOR EACH ROW
UPDATE expenses
SET expense_total = expense_total + NEW.salary
WHERE expense_name = "salaries";


-- Let's Insert a new employee
INSERT INTO employees
VALUES(6, "Sheldon", "Plankton", 10, NULL);

SELECT * FROM expenses;


-- one last example
-- Let's create a trigger that will update "expense_total" value,
-- when we change an employee salary 
-- and that will probably be the most complicated one
CREATE TRIGGER after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
UPDATE expenses
SET expense_total = expense_total + (NEW.salary - OLD.salary)
WHERE expense_name = "salaries";


-- Mr.Krabs is going to give himself another pay raise
UPDATE employees
SET hourly_pay = 100
WHERE employee_id = 1;

SELECT * FROM expenses;


CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(255),
    task_description TEXT,
    engineer_id INT,
    FOREIGN KEY (engineer_id) REFERENCES engineers(engineer_id) 
);


INSERT INTO engineers (engineer_name, profession, email)
VALUES ("Alice Johnson", "Full Stack", "alice@gmail.com"),
       ("Bob Smith", "Back End", "bob@gmail.com"),
       ("Charlie Brown", "Front End", "charlie@gmail.com"),
       ("David Hanson", "DevOps", "david@gmail.com");

INSERT INTO tasks (task_name, task_description, engineer_id)
VALUES ("Task #1", "Design the UI in Figma", 1),
       ("Task #2", "Build the Server in Bun", 2),
       ("Task #3", "Code the UI in Tailwind CSS", 1);