import { expect } from "chai";
import { ethers } from "hardhat";
import { Registration } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("Registration Contract", function () {
    let registration: Registration;
    let owner: SignerWithAddress;
    let farmer: SignerWithAddress;
    let agroTrader: SignerWithAddress;

    beforeEach(async function () {
        [owner, farmer, agroTrader] = await ethers.getSigners();
        registration = await ethers.deployContract("Registration");
    });

    // ✅ Successful Farmer Registration
    it("should register a farmer successfully", async function () {
        const tx = await registration.connect(farmer).registerFarmer(
            "John Doe",
            "123 Farm Lane",
            "john@example.com",
            "1234567890",
            "CIT123456",
            "photo_link",
            "Kathmandu"
        );
        await tx.wait();
        
        const role = await registration.getRole(farmer.address);
        expect(role).to.equal("Farmer");
    });

    // ✅ Successful AgroTrader Registration
    it("should register an agro trader successfully", async function () {
        const tx = await registration.connect(agroTrader).registerAgroTrader(
            "Jane Smith",
            "456 Market Road",
            "jane@example.com",
            "9876543210",
            "CIT654321",
            "photo_link",
            "Pokhara"
        );
        await tx.wait();

        const role = await registration.getRole(agroTrader.address);
        expect(role).to.equal("AgroTrader");
    });

    // ❌ Cannot Register with an Invalid Email
    it("should revert if the email format is invalid", async function () {
        await expect(
            registration.connect(farmer).registerFarmer(
                "Invalid Email User",
                "Some Address",
                "invalid-email",
                "1234567890",
                "CIT999999",
                "photo_link",
                "Lalitpur"
            )
        ).to.be.revertedWith("Invalid email format");
    });

    // ❌ Cannot Register with an Invalid Phone Number
    it("should revert if the phone number is too short", async function () {
        await expect(
            registration.connect(farmer).registerFarmer(
                "Short Phone User",
                "Some Address",
                "shortphone@example.com",
                "1234",  // Invalid phone number
                "CIT888888",
                "photo_link",
                "Bhaktapur"
            )
        ).to.be.revertedWith("Invalid phone number");
    });

    // ❌ Cannot Register with Missing Required Fields
    it("should revert if any required field is missing", async function () {
        await expect(
            registration.connect(farmer).registerFarmer(
                "Missing Fields User",
                "",  // Empty address
                "missing@example.com",
                "1234567890",
                "CIT777777",
                "photo_link",
                "Dharan"
            )
        ).to.be.revertedWith("Field cannot be empty");
    });

    // ❌ Cannot Register the Same User Twice
    it("should not allow the same user to register twice", async function () {
        const tx = await registration.connect(farmer).registerFarmer(
            "Duplicate Farmer",
            "Farm Street",
            "farmer@example.com",
            "1112223333",
            "CIT555555",
            "photo_link",
            "Biratnagar"
        );
        await tx.wait();

        await expect(
            registration.connect(farmer).registerFarmer(
                "Duplicate Farmer Again",
                "Farm Street 2",
                "farmer2@example.com",
                "4445556666",
                "CIT666666",
                "photo_link",
                "Janakpur"
            )
        ).to.be.revertedWith("Address already registered");
    });

    // ❌ Only Farmers Can Register as Farmers
    it("should not allow an agro trader to register as a farmer", async function () {
        await expect(
            registration.connect(agroTrader).registerFarmer(
                "Wrong Role User",
                "Agro Street",
                "wrongrole@example.com",
                "3334445555",
                "CIT111111",
                "photo_link",
                "Hetauda"
            )
        ).to.be.revertedWith("Only farmers can register as farmers");
    });

    // ❌ Only Agro Traders Can Register as Agro Traders
    it("should not allow a farmer to register as an agro trader", async function () {
        await expect(
            registration.connect(farmer).registerAgroTrader(
                "Wrong Role Trader",
                "Trader Street",
                "wrongtrader@example.com",
                "6667778888",
                "CIT222222",
                "photo_link",
                "Damak"
            )
        ).to.be.revertedWith("Only agro traders can register as agro traders");
    });
});
