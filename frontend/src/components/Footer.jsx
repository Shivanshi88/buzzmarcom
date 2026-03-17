import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  UserRound,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";
import BuzzLogo from "../assets/Buzz.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <img
            src={BuzzLogo}
            alt="Buzzmarcom logo"
            className="w-24 h-auto mb-6"
          />

          <p className="text-sm leading-relaxed mb-6">
            Your all-in-one growth partner, bridging the gap between vision and
            execution through research, strategy, and innovation.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/buzzmarcom/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0f2a3a] text-white rounded-lg hover:bg-yellow-500 hover:text-[#0f2a3a] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://x.com/buzzmarcomsol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0f2a3a] text-white rounded-lg hover:bg-yellow-500 hover:text-[#0f2a3a] transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://www.instagram.com/buzzmarcom"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0f2a3a] text-white rounded-lg hover:bg-yellow-500 hover:text-[#0f2a3a] transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-500 transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-6">
            Services
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="http://localhost:5173/services/social-research"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Social Research
              </a>
            </li>

            <li>
              <a
                href="http://localhost:5173/services/market-research"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Market Research
              </a>
            </li>

            <li>
              <a
                href="http://localhost:5173/services/business-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Business Consultancy
              </a>
            </li>

            <li>
              <a
                href="http://localhost:5173/services/branding-advertisement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Branding & Advertisement
              </a>
            </li>

            <li>
              <a
                href="http://localhost:5173/services/it-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                IT Solutions
              </a>
            </li>

            <li>
              <a
                href="http://localhost:5173/services/manpower-support"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Manpower Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#0f2a3a] mt-1" size={18} />
              <p>A91-, Dwarka Mor, New Delhi, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#0f2a3a]" size={18} />
              <p>+91 - 987786 8445</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#0f2a3a]" size={18} />
              <p>Info@buzzmarcom.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#0f2a3a]" size={18} />
              <p>Ghanshyam@buzzmarcom.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Buzzmarcom Solutions LLP. All rights reserved.</p>

        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-yellow-500 transition">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-yellow-500 transition">
            Terms of Service
          </Link>

          <a
            href="/admin/login"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#0f2a3a] text-white hover:bg-yellow-500 hover:text-[#0f2a3a] transition"
            aria-label="Admin login"
          >
            <UserRound size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;