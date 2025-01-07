-- 🔻 This is the "test.sql" File 🔻

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT
);

INSERT INTO users (first_name, last_name, email, password, age)
VALUES ("Jane", "Doe", "jane.doe@example.com", "password", 25),
       ("John", "Doe", "john.doe@example.com", "password", 30),
       ("Bob", "Smith", "bob.smith@example.com", "password", 35),
       ("Alice", "Brown", "alice.brown@example.com", "password", 40),
       ("Charlie", "Smith", "charlie.smith@example.com", "password", 45),
       ("David", "Johnson", "david.johnson@example.com", "password", 50),
       ("Emily", "Brown", "emily.brown@example.com", "password", 55);


SELECT * FROM users;


SELECT first_name, age,
    CASE 
        WHEN age < 30 THEN "Young" 
        WHEN age >= 30 AND age < 60 THEN "Middle-aged"
        ELSE "Senior"
    END AS age_group
FROM users;

















































-------------------------------------------------------



-- 🔸 Operators 🔸

-- 🔹 Equal 👉🏻 = 🔹
SELECT first_name, last_name FROM users WHERE age=35; -- T 👉🏻 Bob Smith

-- 🔹 NOT Equal 👉🏻 != 🔹
SELECT first_name, last_name FROM users WHERE age!=35; 
-- T 👇🏻
-- Jane Doe
-- John Doe
-- Alice Brown
-- Charlie Smith
-- David Johnson
-- Emily Brown

-- 🔹 Greater Than 👉🏻 > 🔹
SELECT * FROM users WHERE age > 40; 
SELECT * FROM users WHERE LENGTH(first_name) > 5; -- T 👉🏻 Charlie Smith

-- 🔹 Less Than 👉🏻 < 🔹
SELECT * FROM users WHERE age < 30;
SELECT * FROM users WHERE LENGTH(last_name) < 4; -- T 👉🏻 Doe

-- 🔹 AND 🔹
SELECT * FROM users WHERE age > 25 AND age < 35; -- T 👉🏻 John Doe
SELECT * FROM users WHERE age > 40 AND LENGTH(first_name) > 5; -- T 👉🏻 Charlie Smith

-- 🔹 OR 🔹
SELECT * FROM users WHERE age < 25 OR age > 50; -- T 👉🏻 Emily Brown

-- 🔹 BETWEEN 🔹
SELECT * FROM users WHERE age BETWEEN 30 AND 40; 
-- T 👇🏻
-- John Doe
-- Bob Smith
-- Alice Brown

-- 🔹 IN 🔹
SELECT * FROM users WHERE age IN (30); -- T 👉🏻 John Doe
SELECT * FROM users WHERE age IN (30, 40); -- T 👉🏻 John Doe & Alice Brown
SELECT * FROM users WHERE age IN (30, 40, 50); -- T 👉🏻 John Doe & Alice Brown & David Johnson
SELECT * FROM users WHERE first_name IN ("Bob"); -- T 👉🏻 Bob Smith


-------------------------------------------------------



-- Let's say you want to find our the average "age" of users grouped by their "first_name"
SELECT first_name, AVG(age) AS average_age FROM users GROUP BY first_name;



-------------------------------------------------------



-- 🔹 COUNT() 🔹
SELECT COUNT(*) FROM users; -- T 👉🏻 7

SELECT COUNT(first_name) FROM users; -- T 👉🏻 7

SELECT COUNT(*) FROM users WHERE first_name='David'; -- T 👉🏻 1

SELECT COUNT(*) FROM users WHERE first_name='David' AND last_name='Johnson'; -- T 👉🏻 1


-- 🔹 MIN() & MAX() 🔹
SELECT MIN(age) FROM users; -- T 👉🏻 10

SELECT MAX(age) FROM users; -- T 👉🏻 55


-- 🔹 SUM() 🔹
SELECT SUM(age) FROM users; -- T 👉🏻 280


-- 🔹 AVG() 🔹
SELECT AVG(age) FROM users; -- T 👉🏻 40.00



-------------------------------------------------------



CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT
);

INSERT INTO users (first_name, last_name, email, password, age)
VALUES ("Jane", "Doe", "jane.doe@example.com", "password", 25),
       ("John", "Doe", "john.doe@example.com", "password", 30),
       ("Bob", "Smith", "bob.smith@example.com", "password", 35),
       ("Alice", "Brown", "alice.brown@example.com", "password", 40),
       ("Charlie", "Smith", "charlie.smith@example.com", "password", 45),
       ("David", "Johnson", "david.johnson@example.com", "password", 50),
       ("Emily", "Brown", "emily.brown@example.com", "password", 55);


SELECT * FROM users;


-- "%" wildcard 👉🏻 This wildcard matches zero or more characters
SELECT * FROM users WHERE first_name LIKE "%j%";

SELECT * FROM users WHERE first_name LIKE "%vid%";


-- "_" wildcard 👉🏻 This wildcard matches exactly one character only
SELECT * FROM users WHERE first_name LIKE "_mil_"; -- Emily

SELECT * FROM users WHERE first_name LIKE "_ob"; -- Bob

SELECT * FROM users WHERE first_name LIKE "J__n"; -- John

SELECT * FROM users WHERE first_name LIKE "A_i_e"; -- Alice



-------------------------------------------------------



CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT
);

INSERT INTO users (first_name, last_name, email, password, age)
VALUES ("Jane", "Doe", "jane.doe@example.com", "password", 25),
       ("John", "Doe", "john.doe@example.com", "password", 30),
       ("Bob", "Smith", "bob.smith@example.com", "password", 35),
       ("Alice", "Brown", "alice.brown@example.com", "password", 40),
       ("Charlie", "Smith", "charlie.smith@example.com", "password", 45),
       ("David", "Johnson", "david.johnson@example.com", "password", 50),
       ("Emily", "Brown", "emily.brown@example.com", "password", 55);

-- SELECT * FROM users;

-- SELECT first_name FROM users ORDER BY first_name ASC;
-- SELECT first_name FROM users ORDER BY first_name DESC;
-- SELECT age FROM users ORDER BY age ASC;

-- SELECT first_name FROM users ORDER BY LENGTH(first_name) ASC;

-- SELECT first_name FROM users;
-- SELECT first_name FROM users LIMIT 5;

SELECT first_name FROM users ORDER BY LENGTH(first_name) DESC LIMIT 5;


-------------------------------------------------------




-- DROP TABLE users;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT
);

INSERT INTO users (first_name, last_name, email, password, age)
VALUES ("Jane", "Doe", "jane.doe@example.com", "password", 25),
       ("John", "Doe", "john.doe@example.com", "password", 30),
       ("Bob", "Smith", "bob.smith@example.com", "password", 35),
       ("Alice", "Brown", "alice.brown@example.com", "password", 40),
       ("Charlie", "Smith", "charlie.smith@example.com", "password", 45),
       ("David", "Johnson", "david.johnson@example.com", "password", 50),
       ("Emily", "Brown", "emily.brown@example.com", "password", 55);

SELECT * FROM users;



-- 🔸 Functions 🔸

-- 🔹 SUBSTRING() 🔹
SELECT SUBSTRING("Hello World", 7, 5); -- T 👉🏻 World

SELECT SUBSTRING("HuXn", 3); -- T 👉🏻 Xn

SELECT first_name FROM users;
-- T 👇🏻
-- Jane
-- John
-- Bob
-- Alice
-- Charlie
-- David
-- Emily

SELECT SUBSTRING(first_name, 2) FROM users; 
-- T 👇🏻
-- ane
-- ohn
-- ob
-- lice
-- harlie
-- avid
-- mily

SELECT SUBSTRING(first_name, 1, 7) FROM users; 
-- T 👇🏻
-- Jane
-- John
-- Bob
-- Alice
-- Charlie
-- David
-- Emily



-- 🔹 REPLACE() 🔹
SELECT REPLACE("Hello World", "World", "Universe"); -- T 👉🏻 Hello Universe
SELECT REPLACE("HuXn", "X", "Z"); -- T 👉🏻 HuZn
SELECT REPLACE(first_name, "Jane", "Ali") FROM users;



-- 🔹 REVERSE() 🔹
SELECT REVERSE("Hello World"); -- T 👉🏻 dlroW olleH
SELECT REVERSE("HuXn"); -- T 👉🏻 nXuH
SELECT REVERSE(first_name) FROM users;



-- 🔹 CHAR_LENGTH() 🔹
SELECT CHAR_LENGTH("Hello World"); -- T 👉🏻 11
SELECT CHAR_LENGTH("HuXn"); -- T 👉🏻 4
SELECT CHAR_LENGTH(first_name) FROM users;



-- 🔹 LENGTH() 🔹
SELECT LENGTH("Hello World"); -- T 👉🏻 11
SELECT LENGTH("HuXn"); -- T 👉🏻 4
SELECT LENGTH(first_name) FROM users;



-- 🔹 UPPER() 🔹
SELECT UPPER("Hello World"); -- T 👉🏻 HELLO WORLD



-- 🔹 LOWER() 🔹
SELECT LOWER("Hello World"); -- T 👉🏻 hello world



-- 🔹 TRIM() 🔹
SELECT TRIM("Hello World"); -- T 👉🏻 Hello World
SELECT TRIM("  Hello World  "); -- T 👉🏻 Hello World
SELECT TRIM("  Hello World  ", " "); -- T 👉🏻 Hello World
SELECT TRIM("  Hello World  ", "  "); -- T 👉🏻 Hello World




-------------------------------------------------------


-- 🔸 DataTypes 🔸
-- 🔹 CHAR 🔹
-- 🔹 VARCHAR 🔹
-- 🔹 INT 🔹
-- 🔹 DATE 🔹
-- 🔹 TIME 🔹
-- 🔹 DATETIME 🔹
-- 🔹 DECIMAL 🔹


-- 🔻 Advanced Date-Time Table 🔻
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    content VARCHAR(255),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO comments (author, content)
VALUES ("HuXn", "This is a greate Article"),
       ("Jordan", "I have a question about this topic"),
       ("Charlie", "Thanks for sharing this information");

SELECT * FROM comments;

-- Let's update the content of the comment with id=1
UPDATE comments SET content="Changed the Comment!" WHERE id=1;

SELECT * FROM comments;



-------------------------------------------------------



-- 🔻 What is the difference between DATE & Time & DateTime? 🔻
CREATE TABLE events (
    event_date DATE,
    event_time TIME,
    event_datetime DATETIME,
);

INSERT INTO events (event_date, event_time, event_datetime)
VALUES ("2024-03-07", "14:30:00", "2024-03-07 14:30:00");

SELECT * FROM events;


-- 🔻 Functions for Dates 🔻

SELECT CURRENT_DATE(); -- T 👉🏻 2025-01-05

SELECT CURRENT_TIME(); -- T 👉🏻 13:31:23

SELECT CURRENT_TIMESTAMP(); -- T 👉🏻 2025-01-05 13:33:41

SELECT NOW(); -- T 👉🏻 2025-01-05 13:34:25










-------------------------------------------------------



-- DROP TABLE users;

-- USE games;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT
);

INSERT INTO users (name, age)
VALUES ("Bob", 30),
       ("Charlie", 40),
       ("David", 50);

SELECT * FROM users;

-- DELETE FROM users WHERE id=1;
-- DELETE FROM users WHERE name="David";

-- Delete the entire table 👉🏻 🚫 Dangerous 🚫
DELETE FROM users;
-- WHERE id=2

SELECT * FROM users;



-------------------------------------------------------



-- DROP TABLE MOVIES;

CREATE TABLE MOVIES (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    release_year INT
);

INSERT INTO MOVIES (
    -- id, 
    title, 
    release_year
) 
VALUES ("Movie #1", 2001),
       ("Movie #2", 2002),
       ("Movie #3", 2003),
       ("Movie #4", 2004),
       ("Movie #5", 2005),
       ("Movie #6", 2006),
       ("Movie #7", 2007),
       ("Movie #8", 2008),
       ("Movie #9", 2009),
       ("Movie #10", 2010);

-- SELECT * FROM MOVIES;
-- SELECT * FROM MOVIES WHERE title="Movie #3";
-- SELECT id FROM MOVIES WHERE title="Movie #3";
-- SELECT title FROM MOVIES WHERE title="Movie #3";
-- SELECT release_year FROM MOVIES WHERE title="Movie #3";
-- SELECT title, release_year FROM MOVIES WHERE title="Movie #3";

SELECT id AS movie_id FROM MOVIES;
SELECT title AS movie_title FROM MOVIES;
SELECT release_year AS movie_release_year FROM MOVIES;

SELECT title AS movie_3_title FROM MOVIES WHERE title="Movie #3";