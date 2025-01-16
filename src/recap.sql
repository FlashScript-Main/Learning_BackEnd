-- SELECT * FROM transactions;

-- SELECT SUM(amount), order_date
-- FROM transactions
-- GROUP BY order_date;

-- SELECT SUM(amount), order_date
-- FROM transactions
-- GROUP BY order_date WITH ROLLUP;

-- SELECT COUNT(transaction_id), order_date
-- FROM transactions
-- GROUP BY order_date WITH ROLLUP;

-- SELECT COUNT(transaction_id) AS "# of orders", customer_id
-- FROM transactions
-- GROUP BY customer_id WITH ROLLUP;

SELECT SUM(hourly_pay) AS "hourly pay", employee_id
FROM employees
GROUP BY employee_id WITH ROLLUP;