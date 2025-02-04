import { useState } from "react";
import { FormContainer, FormInput, SubmitButton } from "../components/FormComponents";
import Navbar from "../components/NavBar";

const CropDetail = () => {
  const [formData, setFormData] = useState({
    cropName: "",
    areaofCultivation: "",
    farmLocation: "",
    plantDate: "",
    harvestDate: "",
    cropProtection: ""
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
      <FormContainer title="Crop Registration">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Crop Name"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            placeholder="Enter your crop name"
          />
          <FormInput
            label="Area Of Cultivation"
            name="areaofCultivation"
            type="numbers"
            value={formData.areaofCultivation}
            onChange={handleChange}
            placeholder="Enter your Area of Cultivation (in Acres)"
          />
          <FormInput
            label="Farm Location"
            name="farmLocation"
            value={formData.farmLocation}
            onChange={handleChange}
            placeholder="Enter your farm location"
          />
          <FormInput
            label="Plant Date"
            name="plantDate"
            type="date"
            value={formData.plantDate}
            onChange={handleChange}
            placeholder="Enter your date of plantation"
          />
          <FormInput
            label="Harvest Date"
            name="harvestDate"
            type="date"
            value={formData.harvestDate}
            onChange={handleChange}
            placeholder="Enter your date of harvestation"
          />
          <FormInput
            label="Crop Protection"
            name="cropProtection"
            value={formData.cropProtection}
            onChange={handleChange}
            placeholder="Enter crop protection (pesticides)"
          />
          <SubmitButton>Register your crop</SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default CropDetail;