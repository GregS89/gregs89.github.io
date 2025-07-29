import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/Logo.jpg" alt="Afya Hospital" className="w-8 h-8" />
              <h3 className="text-lg font-bold">Afya Hospital</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services in Kenya since 2005. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Our Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">General Medicine</li>
              <li className="text-gray-300">Pediatrics</li>
              <li className="text-gray-300">Maternity</li>
              <li className="text-gray-300">Surgery</li>
              <li className="text-gray-300">Dental Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <span>123 Hospital Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span>info@afyahospital.co.ke</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span>Emergency: +254 700 111 222</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Afya Hospital. All rights reserved. Licensed by Kenya Ministry of Health.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;