#!/bin/bash

# This script will delete the VMs (gateway-vm, billing-vm, inventory-vm)

vagrant halt gateway-vm && vagrant halt billing-vm && vagrant halt inventory-vm
vagrant destroy gateway-vm -f && vagrant destroy billing-vm -f  && vagrant destroy inventory-vm -f
rm -rf .vagrant
echo "VMs deleted successfully!"