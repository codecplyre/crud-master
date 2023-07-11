# How to set up the environment

all the command in this document need to be run in the root directory. To set up the environment, follow the steps bellow:

Step 1: Clone the project
Setp 2: Check the directory
Step 3: Install dependencies of the project
Step 4: Setup the Virtual Machine
Step 5: Start the application in the Virtual Machine

Check the directory before running any of the following commands:

```cmd
    pwd
```

If you are not in the crud-master, go to the crud-master directory.

## Install dependencies of the project

The command bellow will check if you have the dependcy needed for the project and install the necessary dependecies if needed. You can check the script in the [install-project-dependecies.sh](./install-project-dependecies.sh). The script is tested in the MacOS. If you are using other OS, you might need to change the script.

```cmd
    ./scripts/install-project-dependencies.sh
```

## Setup the Virtual Machine

The command bellow will create three instances virtual machine and copy the project folder each in the virtual machine. You can check the script in the [setup-virtual-machine.sh](./setup-virtual-machine.sh).

```cmd
    ./scripts/setup-vm.sh
```

## Start the application in the Virtual Machine

The command bellow will start the application in the virtual machine. You can check the script in the [start-application.sh](./start-application.sh).

```cmd
    ./scripts/start-application.sh
```

## Delete the Virtual Machine

The command bellow will delete the all the Vm that is created using [**setup-vm.sh**](./setup-virtual-machine.sh). You can check the script in the [*delete-virtual-machine.sh*](./delete-virtual-machine.sh).

```cmd
    ./scripts/delete-vm.sh
```
