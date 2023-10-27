-- Populate categories table with animal categories
INSERT INTO categories (text)
VALUES
    ('Mammal'),
    ('Reptile'),
    ('Bird'),
    ('Fish'),
    ('Amphibian');

-- Populate cards table with animal data
-- Replace 'text' with actual animal names
-- Distribute 20 animals per category
INSERT INTO cards (text, category_id)
SELECT
    CONCAT('Mammal Animal', numbers.n) AS animal_name,
    1 AS category_id
FROM
    (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) AS numbers
LIMIT 20;

INSERT INTO cards (text, category_id)
SELECT
    CONCAT('Reptile Animal', numbers.n) AS animal_name,
    2 AS category_id
FROM
    (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) AS numbers
LIMIT 20;

INSERT INTO cards (text, category_id)
SELECT
    CONCAT('Bird Animal', numbers.n) AS animal_name,
    3 AS category_id
FROM
    (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) AS numbers
LIMIT 20;

INSERT INTO cards (text, category_id)
SELECT
    CONCAT('Fish Animal', numbers.n) AS animal_name,
    4 AS category_id
FROM
    (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) AS numbers
LIMIT 20;

INSERT INTO cards (text, category_id)
SELECT
    CONCAT('Amphibian Animal', numbers.n) AS animal_name,
    5 AS category_id
FROM
    (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) AS numbers
LIMIT 20;
