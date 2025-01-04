-- 🔻 This is the "test.sql" File 🔻

-- USE Games;
-- SELECT DATABASE();

CREATE TABLE PopularGames (
    name VARCHAR(50),
    release_year INT,
    ratings DECIMAL
)

-- DROP Table PopularGames;
-- SHOW TABLES;
-- SHOW COLUMNS FROM PopularGames;
-- DESCRIBE PopularGames;

-- INSERT INTO PopularGames (name, release_year, ratings)
-- VALUES ("GTA 6", 2025, 9.7);

INSERT INTO PopularGames (name, release_year, ratings)
VALUES ("Resident Evil 4 Remake", 2023, 8.7),
       ("Apex Legends", 2019, 7.6),
       ("Silent Hill 2 Remake", 2024, 8.3),
       ("Cyberpunk 2077", 2020, 7.2);

-- SELECT * FROM PopularGames;

SELECT name FROM PopularGames;
SELECT release_year FROM PopularGames;
SELECT ratings FROM PopularGames;
SELECT name, release_year, ratings FROM PopularGames;