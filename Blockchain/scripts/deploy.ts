const hre = require("hardhat");

async function main() {
    const Registration = await hre.ethers.getContractFactory("Registration");
    const registration = await Registration.deploy();

    await registration.deployed();

    console.log(`Registration contract deployed at: ${registration.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
