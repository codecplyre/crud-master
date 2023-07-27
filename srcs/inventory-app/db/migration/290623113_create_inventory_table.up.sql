-- Active: 1690441941727@@127.0.0.1@5432@movies
CREATE TABLE IF NOT EXISTS "movies" (
    "id" uuid NOT NULL PRIMARY KEY,
    "title" varchar(255) NOT NULL UNIQUE,
    "description" varchar(255) NOT NULL
);