-- if you forgot to add "DEFAULT" keyword to a table,
-- add it using "ALTER"
CREATE TABLE users (
	user_id INT,
    name VARCHAR(50),
    age INT
);

ALTER TABLE users
ALTER name SET DEFAULT "unknown";