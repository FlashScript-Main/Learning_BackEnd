-- ON DELETE SET NULL = when a "FOREIGN KEY" is deleted, replace "FOREIGN KEY" with NULL
-- ON DELETE CASCADE = when a "FOREIGN KEY" is deleted, delete row

SELECT * FROM transactions;

SELECT * FROM customers;


-- there's a foreign key that's preventing us from deleting this customer 
-- because this customer is used elsewhere in a different table
-- so just temporarily for this demonstration,
-- I'm going to set foreign key checks to be zero
SET foreign_key_checks = 0;

DELETE FROM customers
WHERE customer_id = 4;

SELECT * FROM customers;


-- before I forget I'm going to set foreign key checks back to one
SET foreign_key_checks = 1;

SELECT * FROM transactions;


-- let's begin with "ON DELETE SET NULL"
-- I'm going to re-insert Poppy puff back into our table of customers
INSERT INTO customers
VALUES (4, "Poppy", "Puff");

SELECT * FROM customers;


-- now with "ON DELETE SET NULL", 
-- if we're creating a new table
-- let's say I'm recreating my table of "transactions" 
-- after adding the foreign key constraint, 
-- I can add this clause 👉🏻 ON DELETE SET NULL

CREATE TABLE transactions (
	transaction_id INT PRIMARY KEY,
    amount DECIMAL(5, 2),
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) -- 👈🏻 ❌,❌
    ON DELETE SET NULL
);

-- that's if I'm creating a new table 
-- but I already do have a transactions table I don't want to update it


-- however we can update an existing table with this Clause 
-- I already do have a foreign key constraint,
-- I'm just going to drop it real quick
ALTER TABLE transactions 
DROP FOREIGN KEY transactions_ibfk_1;


-- and that key is now dropped 
-- we are going to add a foreign key constraint to our transactions table 
-- with this clause 👉🏻 ON DELETE SET NULL

ALTER TABLE transactions
ADD CONSTRAINT fk_customer_id
FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
ON DELETE SET NULL;

-- if I delete a "customer_id" from customers table,
-- the foreign key of that row will be set to "NULL" automatically


-- let's take a look at our transactions table
SELECT * FROM transactions;


DELETE FROM customers
WHERE customer_id = 4;

SELECT * FROM transactions;


-- now there's "ON DELETE CASCADE" 
-- when a foreign key is deleted we can instead delete the entire row 
-- let's go ahead and add poppy puff back to our customers table
INSERT INTO customers
VALUES (4, "Poppy", "Puff");

SELECT * FROM customers;


-- Let's drop the current foreign key constraint of our transactions table
ALTER TABLE transactions 
DROP FOREIGN KEY fk_customer_id;


-- and that key is now gone 
-- we will add the "ON DELETE CASCADE" to a table that already exists
ALTER TABLE transactions
ADD CONSTRAINT fk_transactions_id
FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
ON DELETE CASCADE;

-- -- Let's update the customer_id
UPDATE transactions
SET customer_id = 4
WHERE transaction_id = 1005;

SELECT * FROM transactions;


-- Now, let's delete the foreign key
DELETE FROM customers
WHERE customer_id = 4;

SELECT * FROM transactions;
