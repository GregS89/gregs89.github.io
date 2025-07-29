import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/Logo.jpg" alt="Afya Hospital" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-primary">Afya Hospital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/appointment">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Book Appointment</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-base font-medium ${
                  isActive(item.path) ? "text-primary" : "text-gray-700"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/appointment" onClick={closeMenu}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white mt-2">
                Book Appointment
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;