CREATE TABLE emailAddress (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  firstname TEXT,
  lastname TEXT
);