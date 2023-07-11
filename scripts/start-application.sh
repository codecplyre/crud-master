#!/bin/bash

echo "Starting Apps..."
vagrant ssh billing-vm << EOF
echo "Installing dependencies..."
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm@latest
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts
npm install pm2 -g
cd ~/billing-app
npm install
echo "Starting billing-app..."
docker compose up -d
docker ps
pm2 start server.js -- --port=8081
lsof -i -P | grep LISTEN
EOF
vagrant ssh inventory-vm << EOF
echo "Installing dependencies..."
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm@latest
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts
npm install pm2 -g
cd ~/inventory-app
npm install
echo "Starting inventory-app..."
docker compose up -d
docker ps
pm2 start server.js -- --port=8080
lsof -i -P | grep LISTEN
EOF
vagrant ssh gateway-vm << EOF
echo "Installing dependencies..."
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm@latest
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm use --lts
npm install pm2 -g
install_dependencies
cd ~/api-gateway
npm install
echo "Starting api-gateway..."
pm2 start server.js -- --port=3000
lsof -i -P | grep LISTEN
EOF