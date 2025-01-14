-- DROP TABLE users;

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT
);

-- we could set our "PRIMARY KEY" to begin at a different value
-- using the "ALTER" keyword
ALTER TABLE users
AUTO_INCREMENT = 1000;

INSERT INTO users (name, age)
VALUES ("Mike", 32),
       ("Bob", 28),
       ("Rose", 25);

SELECT * FROM users;