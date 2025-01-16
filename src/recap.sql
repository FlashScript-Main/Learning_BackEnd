DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(5, 2),
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) 
    REFERENCES customers(customer_id)
);

INSERT INTO transactions
VALUES (1000, 4.99, 3, "2023-01-01"),
       (1001, 2.89, 2, "2023-01-01"),
	   (1002, 3.38, 3, "2023-01-02"),
	   (1003, 4.99, 1, "2023-01-02"),
       (1004, 1.00, NULL, "2023-01-03"),
       (1005, 2.49, 4, "2023-01-03"),
       (1006, 5.48, NULL, "2023-01-03");
        
SELECT * FROM transactions;

-- now our boss Mr.Krabs he needs us to tell him how much money he made per day
-- what is the sum of all of the amounts per day 
-- we have three different dates, January 1st January 2nd January 3rd 
-- what is the sum of every amount on these days 
-- so we can use the group I Clause that would help us

SELECT SUM(amount), order_date
FROM transactions
GROUP BY order_date;

-- let's Group by "customer_id" this time 
-- how much has each customer spent total?

SELECT SUM(amount), customer_id
FROM transactions
GROUP BY customer_id;

SELECT COUNT(amount), customer_id
FROM transactions
GROUP BY customer_id;

SELECT AVG(amount), customer_id
FROM transactions
GROUP BY customer_id;

SELECT MAX(amount), customer_id
FROM transactions
GROUP BY customer_id;

SELECT MIN(amount), customer_id
FROM transactions
GROUP BY customer_id;

-- what if we want to use "WHERE" clause?
-- using a "WHERE" clause along with the "GROUP BY" clause,
-- normally does NOT work! for example
-- I would like to display all customers that have visited more than once
-- who are the repeat customers?

-- if you want to use "WHERE" clause with "GROUP BY" clause,
-- instead you need to use the word "HAVING"

SELECT COUNT(amount), customer_id
FROM transactions
GROUP BY customer_id
HAVING COUNT(amount) > 1 AND customer_id is NOT NULL;
