import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import RegisterFarmer from "./pages/RegisterFarmer";
import RegisterAgroTrader from "./pages/RegisterAgroTrader";
import ScanQRCode from "./pages/ScanQRCode";
import  CropDetail  from "./pages/CropDetail"

export const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register-farmer" element={<RegisterFarmer />} />
        <Route path="/register-agrotrader" element={<RegisterAgroTrader />} />
        <Route path="/scan-qr" element={<ScanQRCode />} />
        <Route path="/cropdetail" element={<CropDetail />} />
      </Routes>
    </Router>
  );
}