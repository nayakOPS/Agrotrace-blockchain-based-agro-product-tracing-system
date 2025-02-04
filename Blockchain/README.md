# Blockchain

This folder contains the smart contracts written in Solidity for managing the agricultural supply chain data on the Ethereum blockchain. The blockchain is used to store records of agro products, including:
- Product details from farmers
- Batch and packaging information from agro traders
- Product traceability for consumers via QR codes

## Features:
- Farmer and agro trader registration smart contracts
- Agro product data storage (crop details, pricing, packaging, etc.)
- Blockchain transactions to track product provenance
- Transparent and immutable records

## Tools:
- Solidity
- Truffle or Hardhat (for contract deployment)
- Ganache (for local blockchain testing)


AgroTrace/
│── Backend/
│── Blockchain/
│   │── contracts/         <- Place Solidity contracts here
│   │── hardhat.config.js  <- Hardhat configuration file
│   │── package.json       <- Node.js dependencies
│   │── node_modules/
│── frontend-agrotrace/
│── README.md


To compile contracts :

npx hardhat compile

start a local blockchain:
npx hardhat node

deploy the contract to the local net:
npx hardhat run scripts/deploy.js --network localhost

