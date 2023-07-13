# My Overview?

I created this readme for my own use, but I hope it can be useful for others too. I started this project to have more experience on creating microservices and to have a project that I can use as a base for future projects. This md file containes some information about the technologies i used and how to use I them.

## Technologies

- Docker
- rabbitMQ
- postgreSQL
- node
- express
- sequelize
- amqplib
- dotenv
- http-proxy-middleware
- Buffer
- Vagrant
- VirtualBox

## Docker

I use docker to create [postgress](https://www.postgresql.org/) database and [rabbitmq](https://www.rabbitmq.com/). Using docker compose I easily setup the postgress database and the rabbitmq.

### Why postgreSQL?

I use postgreSQL because I want to have more experience with it. I have used **MySQL** and in the past and I want to try something new. Using postgreSQL is not that different from other SQL databases. You can check the [documentation](./how-to-setup-postgress-using-docker-compose.md) on how I setup the database using docker compose.

### Why sequelize?

I use sequelize to connect to the database and to create the tables. I use sequelize because it is easy to use and it is easy to setup. I use their [documentation](https://sequelize.org/) to help me setup the database.

### Why RabbitMQ ?

I use rabbitMQ to send messages between the services. I use the [amqplib](https://www.npmjs.com/package/amqplib) library to connect to the rabbitMQ server and to send and receive messages. I use this tutorials [Get Started with RabbitMQ in Node.js](https://sharmilas.medium.com/get-started-with-rabbitmq-in-node-js-1adb18d019d0) and [How to Use RabbitMQ with NodeJS to Send and Receive Messages](https://www.freecodecamp.org/news/how-to-use-rabbitmq-with-nodejs/) to create my producer and consumer.

## Node

I use node to create the microservices. I use **express** to create the api. I use **http-proxy-middleware** to proxy the api calls to the inventory app service. If you are new to express you can check out this [tutorial](https://expressjs.com/en/starter/hello-world.html) to get started. I use the [documentation](https://github.com/chimurai/http-proxy-middleware/tree/v0.21.0#readme) of http-proxy-middleware to setup the proxy. Take note that some middleware functions might affect on how your proxy works.
