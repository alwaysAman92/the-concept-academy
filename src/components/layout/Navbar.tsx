import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Faculty", path: "/faculty" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ 
      backgroundColor: '#25343F',
      borderColor: '#BFC9D1'
    }}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
              style={{ backgroundColor: '#FF9B51' }}
            >
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block" style={{ color: '#EAEFEF' }}>
              The Concept Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-all hover:scale-105"
                style={{
                  color: isActive(link.path) ? '#FF9B51' : '#BFC9D1'
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Admin Button */}
            <Link
              to="/admin"
              className="flex items-center gap-2 text-sm font-medium transition-all hover:scale-105"
              style={{ color: '#BFC9D1' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
            >
              <Shield size={16} />
              Admin
            </Link>

            {/* CTA Button */}
            <Button
              asChild
              className="font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
              style={{ 
                backgroundColor: '#FF9B51',
                color: '#25343F'
              }}
            >
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: '#EAEFEF' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden py-4 border-t animate-fade-in"
            style={{ borderColor: '#BFC9D1' }}
          >
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium py-2 transition-colors"
                  style={{
                    color: isActive(link.path) ? '#FF9B51' : '#BFC9D1'
                  }}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Admin Link */}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm font-medium py-2 transition-colors"
                style={{ color: '#BFC9D1' }}
              >
                <Shield size={16} />
                Admin
              </Link>

              {/* Mobile CTA */}
              <Button
                asChild
                className="w-full mt-2 font-medium shadow-md"
                style={{ 
                  backgroundColor: '#FF9B51',
                  color: '#25343F'
                }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Enquire Now
                </Link>
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;