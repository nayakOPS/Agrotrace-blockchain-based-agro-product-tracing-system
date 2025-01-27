import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-emerald-600 to-teal-500 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-white text-xl font-bold">AgroChain</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/register-farmer" className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Register Farmer
              </Link>
              <Link to="/register-agrotrader" className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Register AgroTrader
              </Link>
              <Link to="/scan-qr" className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors">
                Scan QR Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;