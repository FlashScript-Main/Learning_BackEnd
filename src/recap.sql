-- SELECT * FROM transactions;

SELECT COUNT(amount) AS "today's transactions"
FROM transactions;
-- T -> 5

SELECT MAX(amount) AS maximum_value 
FROM transactions;
-- T -> 4.99

SELECT MIN(amount) AS minimum_value 
FROM transactions;
-- T -> 1.00

SELECT AVG(amount) AS average_value 
FROM transactions;
-- T -> 3.450000

SELECT SUM(amount) AS sum 
FROM transactions;
-- T -> 17.25


-- SELECT * FROM employees

SELECT CONCAT(first_name, " ", last_name) AS full_name
FROM employees;
