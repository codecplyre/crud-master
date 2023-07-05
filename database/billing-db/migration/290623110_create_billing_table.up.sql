CREATE TABLE IF NOT EXISTS "orders" (
    "id" UUID PRIMARY KEY,
    "user_id" UUID NOT NULL,
    "number_of_items" INT NOT NULL,
    "total_price" INT NOT NULL
);