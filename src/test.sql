-- 🔻 This is the "test.sql" File 🔻

-- USE Games;
-- SELECT DATABASE();

CREATE TABLE PopularGames (
    name VARCHAR(50),
    ratings DECIMAL,
    year INT
)

-- SHOW TABLES;

SHOW COLUMNS FROM PopularGames;
DESCRIBE PopularGames;