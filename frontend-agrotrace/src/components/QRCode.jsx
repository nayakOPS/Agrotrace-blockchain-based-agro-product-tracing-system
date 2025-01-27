import React from 'react';

const QRCode = () => {
  // Mock data for agro product
  const productDetails = {
    productName: 'Apples from Mustang',
    farmer: {
      name: 'Ram Bahadur Karki',
      location: 'Mustang, Nepal',
      contact: '+977 9876543210',
      pricePerKg: 'Rs. 150',
    },
    agroTrader: {
      name: 'GreenTrade Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      contact: '+977 1234567890',
      pricePerKg: 'Rs. 250',
    },
    harvestedDate: '2025-01-10',
    packagedDate: '2025-01-15',
    qualityGrade: 'Premium',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-8">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-emerald-800 mb-6">
            Trace Your Agro Product
          </h2>
          <div className="flex flex-col items-center">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <img
                src="/dummy_qr.jpeg"
                alt="QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>
            {/* Instructions */}
            <p className="text-gray-600 text-center max-w-md mb-8">
              Scan this QR code with your phone to trace the agro product details, 
              from the field where it was grown to the packaging and finally to your table. 
              Get full transparency on the product's journey and ensure its authenticity.
            </p>
            {/* Agro Product Details */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Product Details</h3>
              <p>
                <strong>Product Name:</strong> {productDetails.productName}
              </p>
              <p>
                <strong>Harvested Date:</strong> {productDetails.harvestedDate}
              </p>
              <p>
                <strong>Packaged Date:</strong> {productDetails.packagedDate}
              </p>
              <p>
                <strong>Quality Grade:</strong> {productDetails.qualityGrade}
              </p>
              <hr className="my-4 border-gray-300" />
              {/* Farmer Information */}
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Farmer Details</h3>
              <p>
                <strong>Name:</strong> {productDetails.farmer.name}
              </p>
              <p>
                <strong>Location:</strong> {productDetails.farmer.location}
              </p>
              <p>
                <strong>Contact:</strong> {productDetails.farmer.contact}
              </p>
              <p>
                <strong>Price Per Kg:</strong> {productDetails.farmer.pricePerKg}
              </p>
              <hr className="my-4 border-gray-300" />
              {/* Agro Trader Information */}
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Agro Trader Details</h3>
              <p>
                <strong>Name:</strong> {productDetails.agroTrader.name}
              </p>
              <p>
                <strong>Location:</strong> {productDetails.agroTrader.location}
              </p>
              <p>
                <strong>Contact:</strong> {productDetails.agroTrader.contact}
              </p>
              <p>
                <strong>Price Per Kg:</strong> {productDetails.agroTrader.pricePerKg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
