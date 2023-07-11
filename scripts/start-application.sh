#!/bin/bash

echo "Starting Apps..."
vagrant ssh billing-vm << EOF
echo "Starting billing-db and order-queue..."
cd ~/billing-app
docker compose up -d
docker ps
EOF
vagrant ssh inventory-vm << EOF
echo "Starting inventory-db..."
cd ~/inventory-app
docker compose up -d
docker ps
EOF
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
echo "Starting billing-app..."
cd ~/billing-app
npm install
pm2 start server.js -- --port=8081
sudo lsof -i -P | grep LISTEN
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
echo "Starting inventory-app..."
cd ~/inventory-app
npm install
pm2 start server.js -- --port=8080
sudo lsof -i -P | grep LISTEN
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
echo "Starting api-gateway..."
cd ~/api-gateway
npm install
pm2 start server.js -- --port=3000
sudo lsof -i -P | grep LISTEN
EOF