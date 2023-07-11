# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.

  # Configuration for gateway-vm
  virtualMachineIpAddresses = ["192.168.33.10", "192.168.33.11", "192.168.33.12"]
  config.vm.define "gateway-vm" do |gateway|
    gateway.vm.box = "ubuntu/focal64"
    gateway.vm.network "private_network", ip: virtualMachineIpAddresses[0]
    gateway.vm.synced_folder ".", "/vagrant", disabled: true

    gateway.vm.provider "virtualbox" do |vb|
      # Customize the amount of memory on the VM:
      vb.memory = "512"
    end
  end
  config.vm.define "inventory-vm" do |inventory|
    inventory.vm.box = "ubuntu/focal64"
    inventory.vm.network "private_network", ip: virtualMachineIpAddresses[1]
    inventory.vm.synced_folder ".", "/vagrant", disabled: true

    inventory.vm.provider "virtualbox" do |vb|
      # Customize the amount of memory on the VM:
      vb.memory = "512"
    end
    inventory.vm.provision "docker"
  end
  config.vm.define "billing-vm" do |billing|
    billing.vm.box = "ubuntu/focal64"
    billing.vm.network "private_network", ip: virtualMachineIpAddresses[2]
    billing.vm.synced_folder ".", "/vagrant", disabled: true

    billing.vm.provider "virtualbox" do |vb|
      # Customize the amount of memory on the VM:
      vb.memory = "512"
    end
    billing.vm.provision "docker"
  end
end
