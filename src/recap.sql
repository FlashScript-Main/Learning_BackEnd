CREATE TABLE users (
	user_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

INSERT INTO users
VALUES (NULL, "someone", 18);

SELECT * FROM users;

-- if you forgot to add "PRIMARY KEY" keyword to an existing table,
-- add it using "ALTER"
CREATE TABLE users (
	user_id INT,
    name VARCHAR(50),
    age INT
);

ALTER TABLE users
ADD CONSTRAINT 
PRIMARY KEY(user_id);