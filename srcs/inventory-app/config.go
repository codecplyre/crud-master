package main

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DBDriver string
	DBSource string
}

func LoadConfig() (*Config, error) {
	if err := godotenv.Load(".env"); err != nil {
		return nil, fmt.Errorf("error loading env: %w", err)
	}

	dbSource := fmt.Sprintf("postgresql://%s:%s@%s:%s/%s?sslmode=disable",
		os.Getenv("POSTGRES_USER_INVENTORY_DB"),
		os.Getenv("POSTGRES_PASSWORD_INVENTORY_DB"),
		os.Getenv("POSTGRES_HOST_INVENTORY_DB"),
		os.Getenv("POSTGRES_PORT_INVENTORY_DB"),
		os.Getenv("POSTGRES_INVENTORY_DB"))

	return &Config{
		DBDriver: "postgres",
		DBSource: dbSource,
	}, nil
}
