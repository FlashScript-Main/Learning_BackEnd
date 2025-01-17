-- 🔻 Stored Procedure 🔻
-- it is prepared SQL code that you can save
-- great if there's a query that you write often

-- you can use "Stored Procedure" to store a code and call it later


-- 🔥 Basic Format 🔥

-- #1 👉🏻 Create the "Stored Procedure"
DELIMITER $$
CREATE PROCEDURE The_Procedure_Name()
BEGIN
    The_Procedure_Phrase;
END $$
DELIMITER ;

-- #2 👉🏻 "CALL" the "Stored Procedure"
CALL The_Procedure_Name();

-- 🔹 Before 🔹
SELECT * FROM customers;

-- 🔹 After 🔹
DELIMITER $$
CREATE PROCEDURE get_customers()
BEGIN
	SELECT * FROM customers;
END $$
DELIMITER ;

CALL get_customers();


-- you can also Drop a Stored Procedure
DROP PROCEDURE get_customers;


-- let's try another example
-- this time we will send our procedure a piece of data 
-- within the set of parentheses 
-- a "customer_id" number such as 1 2 3 4 so on and so forth
-- we will get a customer by their "customer_id"
DELIMITER $$
CREATE PROCEDURE find_customer(IN id INT)
BEGIN
	SELECT * FROM customers
    WHERE customer_id = id;
END $$
DELIMITER ;


-- 🔹 Before 🔹
SELECT * FROM customers
WHERE customer_id = 3;

-- 🔹 After 🔹
CALL find_customer(3);


-- this time we will send two arguments, two pieces of data 
-- a first name and a last name
DELIMITER $$
CREATE PROCEDURE find_customer_by_name(
				     IN first_customer_name VARCHAR(50), 
                     IN last_customer_name VARCHAR(50)
				    )
BEGIN
	SELECT * FROM customers
    WHERE first_name = first_customer_name AND last_name = last_customer_name;
END $$
DELIMITER ;


-- 🔹 Before 🔹
SELECT * FROM customers
WHERE first_name = "Larry" AND last_name = "Lobster";

-- 🔹 After 🔹
CALL find_customer_by_name("Larry", "Lobster");
