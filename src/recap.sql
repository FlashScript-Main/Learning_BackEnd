-- INNER JOIN
SELECT * 
FROM transactions INNER JOIN customers
ON transactions.customer_id = customers.customer_id;


-- You can Select Specific Columns for any joins
SELECT transaction_id, amount, first_name, last_name
FROM transactions INNER JOIN customers 
ON transactions.customer_id = customers.customer_id;


-- LEFT JOIN
SELECT *
FROM transactions LEFT JOIN customers 
ON transactions.customer_id = customers.customer_id;


-- RIGHT JOIN
SELECT *
FROM transactions RIGHT JOIN customers 
ON transactions.customer_id = customers.customer_id;