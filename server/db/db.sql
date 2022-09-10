CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(28) NOT NULL UNIQUE,
  passhash VARCHAR(28) NOT NULL
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  exerciseId int NOT NULL,
  bodyPart VARCHAR(30),
  equipment VARCHAR(30),
  exerciseName VARCHAR(50),
  gifUrl VARCHAR(60),
  targetGroup varChar(60)
);

