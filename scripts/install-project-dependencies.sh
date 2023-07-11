#!/bin/bash

# This script will install the project dependencies (VirtualBox, Vagrant, Vagrant plugin)
# Step 1: Check if brew is installed
if ! command -v brew &> /dev/null; then
  echo "Brew is not installed. Installing Brew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
  echo "Brew is already installed."
fi
# Step 3: Install VirtualBox
if ! command -v virtualbox &> /dev/null; then
  echo "VirtualBox is not installed. Installing VirtualBox..."
  brew install --cask virtualbox
else
  echo "VirtualBox is already installed."
fi
# Step 4: Install Vagrant
if ! command -v vagrant &> /dev/null; then
  echo "Vagrant is not installed. Installing Vagrant..."
  brew install --cask vagrant
else
  echo "Vagrant is already installed."
fi
# Step 5: Install Vagrant plugin
if ! vagrant plugin list | grep vagrant-scp &> /dev/null; then
  echo "Vagrant plugin is not installed. Installing Vagrant plugin..."
  vagrant plugin install vagrant-scp
else
  echo "Vagrant plugin is already installed."
fi
# Step 7: Install Nvm
if ! command -v nvm &> /dev/null; then
  echo "Nvm is not installed. Installing Nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  . ~/.nvm/nvm.sh
else
  echo "Nvm is already installed."
fi
# Step 8: Install Node
if ! command -v node &> /dev/null; then
  echo "Node is not installed. Installing Node..."
  nvm install node
  nvm use node
else
  echo "Node is already installed."
  # check if node version is up to date
  if ! node -v | grep v19 &> /dev/null; then
    echo "Node version is not up to date. Updating Node..."
    nvm install node
    nvm use node
  else
    echo "Node version is up to date."
  fi
fi
# Step 9 (Optional): Install Npm
if ! command -v npm &> /dev/null; then
  echo "Npm is not installed. Installing Npm..."
  npm install npm@latest -g
else
  echo "Npm is already installed."
fi