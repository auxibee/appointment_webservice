-- Up Migration
CREATE TABLE Songs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO Songs (name) VALUES ('my world is here');
INSERT INTO Songs (name) VALUES ('daddy lumba')

-- Down Migration
DROP TABLE Songs;