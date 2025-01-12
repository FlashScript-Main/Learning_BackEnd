-- ALTER DATABASE mydb READ ONLY = 0; 

-- CREATE TABLE employees (
-- 	employee_id INT,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     hourly_pay DECIMAL(3, 2), -- 123.12
--     hire_date DATE
-- );

-- SELECT * FROM employees;

-- Let's rename our "employees" table
RENAME TABLE workers TO employees;