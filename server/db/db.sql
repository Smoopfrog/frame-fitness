CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(28) NOT NULL UNIQUE,
  passhash VARCHAR(28) NOT NULL
);

INSERT INTO users (username, passhash) VALUES ($1, $2);