# How to set up the environment with Vagrant and VirtualBox

all the command in this document need to be run in the root directory. To set up the environment, follow the steps bellow:

Step 1: Clone the project
Step 2: Add environment variable to each application. The enviroment variable below is the example of the environment variable that is used in the project. You can change the value of the environment variable based on your need.

**.env** file for api-gateway application:

./srcs/api-gateway/.env

```env
MOVIES_API_URL="http://192.168.33.11:8080"
BILLING_API_URL="http://192.168.33.12:8081"
API_GATEWAY_PORT=3000
RABBITMQ_URL="amqp://192.168.33.12:5672"
```

**.env** file for billing-app application:

./srcs/billing-app/.env

```env
BILLING_API_PORT=8081
RABBITMQ_URL='amqp://192.168.33.12:5672'
# billing db variables
POSTGRES_USER_BILLING_DB = 'postgres'
POSTGRES_PASSWORD_BILLING_DB = 'postgres'
POSTGRES_BILLING_DB = 'orders'
POSTGRES_PORT_BILLING_DB = 5433
# order queue variables
RABBITMQ_PORT=5672
RABBITMQ_MANAGEMENT_PORT=15672
RABBITMQ_USER='guest'
RABBITMQ_PASSWORD='guest'
```

**.env** file for inventory-app application:

./srcs/inventory-app/.env

```env
MOVIES_API_PORT=8080

# inventory db variables
POSTGRES_USER_INVENTORY_DB = 'postgres'
POSTGRES_PASSWORD_INVENTORY_DB = 'postgres'
POSTGRES_INVENTORY_DB = 'movies'
POSTGRES_PORT_INVENTORY_DB = 5432
```

Setp 3: Check the directory
Check the directory before running any of the following commands. All the command in this document need to be run in the root directory. To check the directory, run the command bellow:

```cmd
    pwd
```

Step 4: Install dependencies of the project

## Install dependencies of the project

The command bellow will check if you have the dependcy needed for the project and install the necessary dependecies if needed. You can check the script in the [install-project-dependecies.sh](./install-project-dependencies.sh). The script is tested in the MacOS. If you are using other OS, you might need to change the script.

```cmd
    ./scripts/install-project-dependencies.sh
```

Step 5: Setup the Virtual Machine

## Setup the Virtual Machine

The command bellow will create three instances virtual machine and copy the project folder each in the virtual machine. You can check the script in the [setup-virtual-machine.sh](./setup-virtual-machine.sh).

```cmd
    ./scripts/setup-vm.sh
```

Step 6: Start the application in the Virtual Machine

## Start the application in the Virtual Machine

The command bellow will start the application in the virtual machine. You can check the script in the [start-application.sh](./start-application.sh). The script will run the application in the background.

```cmd
    ./scripts/start-application.sh
```

Step 7: Delete the Virtual Machine (Optional)

## Delete the Virtual Machine

The command bellow will delete the all the Vm that is created using [**setup-vm.sh**](./setup-virtual-machine.sh). You can check the script in the [*delete-virtual-machine.sh*](./delete-virtual-machine.sh). You can run this script if you want to delete the virtual machine. I find it useful when I want to start the project from the beginning. You can also delete the virtual machine manually.

```cmd
    ./scripts/delete-vm.sh
```
