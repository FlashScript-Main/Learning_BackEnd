-- 🔻 This is the "test.sql" File 🔻


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