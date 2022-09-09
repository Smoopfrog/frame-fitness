CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(28) NOT NULL UNIQUE,
  passhash VARCHAR(28) NOT NULL
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  exerciseId int NOT NULL
);