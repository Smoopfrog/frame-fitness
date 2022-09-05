CREATE TABLE users (
  id, SERIAL PRIMARY KEY,
  first_name VARCHAR(28) NOT NULL,
  last_name VARCHAR(28) NOT NULL,
  email VARCHAR(28) NOT NULL,
  passhash VARCHAR(28) NOT NULL
);

INSERT INTO users (first_name, last_name, email, passhash) VALUES ($1, $2, $3, $4);