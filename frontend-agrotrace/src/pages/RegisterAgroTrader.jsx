import { useState } from "react";
import { FormContainer, FormInput, SubmitButton } from "../components/FormComponents";
import Navbar from "../components/NavBar";

const RegisterAgroTrader = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    panVatNumber: "",
    warehouseLocation: "",
    businessAddress: "",
    registrationNumber: "",
    website: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <FormContainer title="AgroTrader Registration">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Business Name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
          />
          <FormInput
            label="Business Address"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            placeholder="Enter your business address"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your business email"
          />
          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your business phone number"
          />
          <FormInput
            label="PAN/VAT Number"
            name="panVatNumber"
            value={formData.panVatNumber}
            onChange={handleChange}
            placeholder="Enter your PAN/VAT number"
          />
          <FormInput
            label="Business Registration Number"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter your business registration number"
          />
          <FormInput
            label="Website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter your business website (optional)"
          />
          <FormInput
            label="Warehouse Location"
            name="warehouseLocation"
            value={formData.warehouseLocation}
            onChange={handleChange}
            placeholder="Enter your warehouse/production location"
          />
          <SubmitButton>Register as AgroTrader</SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default RegisterAgroTrader;