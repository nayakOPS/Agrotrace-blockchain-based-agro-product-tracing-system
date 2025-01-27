import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using Lucide icons for the menu and close icons.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-xl font-bold">AgroChain</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/register-farmer"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Register Farmer
            </Link>
            <Link
              to="/register-agrotrader"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Register AgroTrader
            </Link>
            <Link
              to="/scan-qr"
              className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
            >
              Scan QR Code
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-emerald-600 p-4 rounded-lg shadow-md ">
            <Link
              to="/"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors border-1 border-white mb-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/register-farmer"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors border-1 border-white mb-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Farmer
            </Link>
            <Link
              to="/register-agrotrader"
              className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors border-1 border-white mb-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Register AgroTrader
            </Link>
            <Link
              to="/scan-qr"
              className="bg-teal-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors border-1 border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Scan QR Code
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
