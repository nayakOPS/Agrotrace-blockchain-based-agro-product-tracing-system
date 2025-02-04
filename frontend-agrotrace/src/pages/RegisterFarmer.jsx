import { useState } from "react";
import { FormContainer, FormInput, SubmitButton } from "../components/FormComponents";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";


const RegisterFarmer = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    citizenshipId: "",
    photoLink: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/cropdetail')
  };


  return (
    <>
      <Navbar />
      <FormContainer title="Farmer Registration">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <FormInput
            label="Citizenship ID"
            name="citizenshipId"
            value={formData.citizenshipId}
            onChange={handleChange}
            placeholder="Enter your citizenship ID"
          />
          <FormInput
            label="Photo URL"
            name="photoLink"
            type="url"
            value={formData.photoLink}
            onChange={handleChange}
            placeholder="Enter your photo URL"
          />
          <FormInput
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
          />
          <SubmitButton>Register as Farmer</SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default RegisterFarmer;