import React from 'react';
import QRCode from '../components/QRCode';
import Navbar from "../components/NavBar";

const ScanQRCode = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '30px' }}>
        <h1 style={{ color: '#4CAF50' }}>Scan QR Code</h1>
        <QRCode/>
      </div>
    </div>
  );
};

export default ScanQRCode;
