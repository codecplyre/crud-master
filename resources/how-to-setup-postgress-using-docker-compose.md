# How to setup postgress using docker compose

## How to start?

Step 1: Install docker if you don't have it already. You can download it [here](https://www.docker.com/products/docker-desktop).

Step 2: Create a **docker-compose.yml** file in the root of your project.

Step 3: Add the following code to the **docker-compose.yml** file:

```yml
version: '1.0'
services:
  inventory-db:
    image: postgres
    container_name: inventory-db
    environment:
      POSTGRES_USER: ${POSTGRES_USER_INVENTORY_DB}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD_INVENTORY_DB}
      POSTGRES_DB: ${POSTGRES_INVENTORY_DB}
    ports:
      - ${POSTGRES_PORT_INVENTORY_DB}:5432
```

Step 4: Create a .env file in the root of your project.

Step 5: Add the following code to the **.env** file:

```env
POSTGRES_USER_INVENTORY_DB=username
POSTGRES_PASSWORD_INVENTORY_DB=password
POSTGRES_INVENTORY_DB=inventory
POSTGRES_PORT_INVENTORY_DB=5432
```

POSTGRES_USER_INVENTORY_DB is the username you want to use to connect to the database.
POSTGRES_PASSWORD_INVENTORY_DB is the password you want to use to connect to the database.
POSTGRES_INVENTORY_DB is the name of the database you want to create.
POSTGRES_PORT_INVENTORY_DB is the port on your local machine that you want to use to connect to the database.
You can change the env variables to your liking.

Step 6: Run the following command in the root of your project:

for detached mode:

```bash
docker-compose up -d
```

for non-detached mode:

```bash
docker-compose up
```

Step 7: Check if the database is running by running the following command:

```bash
docker ps
```

You should see the service running. That's it! You have now a running postgress database. You can connect to the database using the credentials you provided in the .env file. If you want to stop the database you can run the following command:

```bash
docker-compose down
```

I hope this was useful for you. If you have any questions or suggestions please let me know.
