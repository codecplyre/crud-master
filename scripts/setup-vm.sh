#!/bin/bash

# Run this script from the root directory of the project (./scripts/setup-vm.sh)

# This scrips will intialize the VMs (gateway-vm, billing-vm, inventory-vm)

# # Step 1: Run Vagrant up to setup the VMs (gateway-vm, billing-vm, inventory-vm)
vagrant up

# Step 2: Copy files from the host machine to the VMs

# Copy files to gateway-vm
echo "Copying files to gateway-vm..."
vagrant scp ./srcs/api-gateway gateway-vm:./

# Copy files to billing-vm
echo "Copying files to billing-vm..."
vagrant scp ./srcs/billing-app billing-vm:./


# Copy files to inventory-vm
echo "Copying files to inventory-vm..."
vagrant scp ./srcs/inventory-app inventory-vm:./

echo "Files copied successfully!"
