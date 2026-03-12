import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationItems } from "../mockData";
import { Button } from "./ui/button";
import Logo from "../assets/Buzz.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
        isScrolled
          ? "shadow-md"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-10 overflow-hidden">
            <img
              src={Logo}
              alt="Buzzmarcom Logo"
              className="h-16 w-auto object-contain scale-110"
            />
          </Link>
 
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 text-gray-800 hover:text-yellow-700 font-medium transition">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
 
                    {/* Dropdown */}
                    <div className="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-xl w-64 border border-gray-100">
                      <div className="py-2">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.path}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 transition"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
 
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-800 hover:text-yellow-700 font-medium transition"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
 
          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Button
              className="relative overflow-hidden bg-[#0f2a3a] text-white font-semibold px-6 py-2 rounded-lg
                         transition-all duration-300 hover:bg-yellow-500
                         hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10">Get Started</span>
            </Button>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-yellow-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4 space-y-4">
            {navigationItems.map((item) => {
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex justify-between items-center w-full font-medium text-gray-700"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.path}
                            onClick={() => {
                              setMobileOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block text-gray-600 hover:text-yellow-600"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-700 font-medium"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA Button (mobile) */}
            <Button
              className="w-full bg-yellow-500 text-black font-semibold rounded-lg px-4 py-2
                         transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => {
                setMobileOpen(false);
                setServicesOpen(false);
                navigate("/contact");
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
