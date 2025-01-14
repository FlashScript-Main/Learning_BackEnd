-- CREATE TABLE customers (
-- 	customer_id INT PRIMARY KEY AUTO_INCREMENT,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50)
-- );

-- INSERT INTO customers (first_name, last_name)
-- VALUES ("Fred", "Fish"),
--        ("Larry", "Lobster"),
--        ("Bubble", "Bass");

-- SELECT * FROM customers;


CREATE TABLE transactions (
	transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(5, 2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

-- DELETE FROM transactions;

-- Let's set "AUTO_INCREMENT" to start from 1000
ALTER TABLE transactions
AUTO_INCREMENT = 1000;

SELECT * FROM transactions;

INSERT INTO transactions (amount, customer_id)
VALUES (4.99, 3),
       (2.89, 2),
       (3.38, 3),
       (4.99, 1);

SELECT * FROM transactions;













-- if you need to drop a "FOREIGN KEY", use "ALTER" keyword
ALTER TABLE transactions
DROP FOREIGN KEY transactions_ibfk_1;



-- if you forgot to add "PRIMARY KEY" keyword to an existing table,
-- add it using "ALTER"
ALTER TABLE transactions
ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);


-- you can also give your "FOREIGN KEY" a unique name, use "ALTER" keyword
ALTER TABLE transactions
ADD CONSTRAINT fk_customer_id
FOREIGN KEY(customer_id) REFERENCES customers(customer_id);





















