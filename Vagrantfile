# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
    # Configuration for gateway-vm
    virtualMachineNames = ["gateway-vm", "inventory-vm", "billing-vm"]
    virtualMachineIpAddresses = ["192.168.33.10", "192.168.33.11", "192.168.33.12"]
    virtualMachineNames.each_with_index do |vmName, index|
      config.vm.define vmName do |name|
        name.vm.box = "ubuntu/focal64"
        name.vm.network "private_network", ip: virtualMachineIpAddresses[index]
        name.vm.synced_folder ".", "/vagrant", disabled: true

        name.vm.provider "virtualbox" do |vb|
        # Customize the amount of memory on the VM:
          vb.memory = "1024"
        end
        
        # Provisioning the docker on the VM
        # ths will install docker on the VM
        # and allow you to run docker commands
        name.vm.provision "docker"

        # Provisioning the shell on the VM
        name.vm.provision "shell", inline: <<-SHELL
          # Run any setup or installation commands specific to the gateway-vm'
          sudo apt-get update
          sudo apt-get install -y curl
          sudo apt-get install -y npm
          sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
          . ~/.nvm/nvm.sh
          nvm install node
          nvm use node
        SHELL
      end
    end
end
