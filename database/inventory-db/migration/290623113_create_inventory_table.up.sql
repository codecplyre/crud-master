-- Active: 1687998904867@@127.0.0.1@5432@movies
CREATE TABLE IF NOT EXISTS "movies" (
    "id" uuid NOT NULL PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "description" varchar(255) NOT NULL
);