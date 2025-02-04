// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Registration {

    enum Role { None, Farmer, AgroTrader }

    struct Farmer {
        string name;
        string addressDetails;
        string email;
        string phoneNumber;
        string citizenshipId;
        string photoLink;
        string location;
    }

    struct AgroTrader {
        string businessName;
        string email;
        string phoneNumber;
        string panVatNumber;
        string warehouseLocation;
    }

    mapping(address => Role) private roles;
    mapping(address => Farmer) private farmers;
    mapping(address => AgroTrader) private agroTraders;

    event FarmerRegistered(address indexed farmer, string name);
    event AgroTraderRegistered(address indexed agroTrader, string businessName);

    modifier notRegistered(address _wallet) {
        require(roles[_wallet] == Role.None, "Address already registered");
        _;
    }

    modifier validEmail(string memory _email) {
        require(bytes(_email).length > 0 && _emailContainsAtSymbol(_email), "Invalid email format");
        _;
    }

    modifier validPhoneNumber(string memory _phoneNumber) {
        require(bytes(_phoneNumber).length == 10, "Invalid phone number");
        _;
    }

    modifier notEmptyField(string memory _field) {
        require(bytes(_field).length > 0, "Field cannot be empty");
        _;
    }

    struct FarmerRegistrationData {
        string name;
        string addressDetails;
        string email;
        string phoneNumber;
        string citizenshipId;
        string photoLink;
        string location;
    }

    struct AgroTraderRegistrationData {
        string businessName;
        string email;
        string phoneNumber;
        string panVatNumber;
        string warehouseLocation;
    }

    function registerFarmer(FarmerRegistrationData memory _data) 
        external 
        notRegistered(msg.sender)
        validEmail(_data.email)
        validPhoneNumber(_data.phoneNumber)
        notEmptyField(_data.name)
        notEmptyField(_data.addressDetails)
        notEmptyField(_data.citizenshipId)
        notEmptyField(_data.photoLink)
        notEmptyField(_data.location)
    {
        farmers[msg.sender] = Farmer({
            name: _data.name,
            addressDetails: _data.addressDetails,
            email: _data.email,
            phoneNumber: _data.phoneNumber,
            citizenshipId: _data.citizenshipId,
            photoLink: _data.photoLink,
            location: _data.location
        });
        roles[msg.sender] = Role.Farmer;
        emit FarmerRegistered(msg.sender, _data.name);
    }

    function registerAgroTrader(AgroTraderRegistrationData memory _data) 
        external 
        notRegistered(msg.sender)
        validEmail(_data.email)
        validPhoneNumber(_data.phoneNumber)
        notEmptyField(_data.businessName)
        notEmptyField(_data.panVatNumber)
        notEmptyField(_data.warehouseLocation)
    {
        agroTraders[msg.sender] = AgroTrader({
            businessName: _data.businessName,
            email: _data.email,
            phoneNumber: _data.phoneNumber,
            panVatNumber: _data.panVatNumber,
            warehouseLocation: _data.warehouseLocation
        });
        roles[msg.sender] = Role.AgroTrader;
        emit AgroTraderRegistered(msg.sender, _data.businessName);
    }

    function getRole(address _wallet) external view returns (string memory) {
        if (roles[_wallet] == Role.Farmer) {
            return "Farmer";
        } else if (roles[_wallet] == Role.AgroTrader) {
            return "AgroTrader";
        } else {
            return "None";
        }
    }

    function getFarmerDetails(address _wallet) external view returns (Farmer memory) {
        require(roles[_wallet] == Role.Farmer, "Not a farmer");
        return farmers[_wallet];
    }

    function getAgroTraderDetails(address _wallet) external view returns (AgroTrader memory) {
        require(roles[_wallet] == Role.AgroTrader, "Not an agro trader");
        return agroTraders[_wallet];
    }

    function _emailContainsAtSymbol(string memory _email) private pure returns (bool) {
        for (uint i = 0; i < bytes(_email).length; i++) {
            if (bytes(_email)[i] == "@") {
                return true;
            }
        }
        return false;
    }
}
