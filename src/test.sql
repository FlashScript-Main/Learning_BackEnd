-- 🔻 This is the "test.sql" File 🔻

-- DROP TABLE users;

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

-- Let's Say if you forgot to add the "WHERE" Clause
UPDATE users 
    SET age=100
    -- WHERE name="Alex";

SELECT * FROM users;


























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