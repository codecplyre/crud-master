-- name: CreateMovie :one
INSERT INTO "movies" (
    "id",
    "title",
    "description"
) VALUES (
    $1, $2, $3
)RETURNING *;

-- name: GetMovies :many
SELECT * FROM "movies";

-- name: DeleteMovies :many
DELETE FROM "movies" RETURNING *;

-- name: GetMovieById :one
SELECT * FROM "movies" WHERE "id" = $1;

-- name: UpdateMovieById :one
UPDATE "movies" SET "title" = $2, "description" = $3 WHERE "id" = $1 RETURNING *;

-- name: DeleteMovieById :one
DELETE FROM "movies" WHERE "id" = $1 RETURNING *;