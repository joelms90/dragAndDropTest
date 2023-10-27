CREATE TABLE cards (
    id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(100) NOT NULL,
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
