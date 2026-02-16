import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#25343F' }}>
      <div className="max-w-7xl mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#FF9B51' }}
              >
                <span 
                  className="font-bold text-lg"
                  style={{ color: '#25343F' }}
                >
                  T
                </span>
              </div>
              <span 
                className="font-semibold text-xl"
                style={{ color: '#EAEFEF' }}
              >
                The Concept Academy
              </span>
            </div>
            <p 
              className="text-sm leading-relaxed max-w-md"
              style={{ color: '#BFC9D1' }}
            >
              Empowering students with strong conceptual foundations for academic excellence. 
              Specialized coaching for Classes 9–12, JEE & NEET aspirants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: '#FF9B51' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                Courses
              </Link>
              <Link 
                to="/faculty" 
                className="text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                Faculty
              </Link>
              <Link 
                to="/contact" 
                className="text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: '#FF9B51' }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
              <a 
                href="mailto:info@conceptacademy.com" 
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: '#BFC9D1' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF9B51'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#BFC9D1'}
              >
                <Mail size={16} />
                info@conceptacademy.com
              </a>
              <div 
                className="flex items-start gap-2 text-sm"
                style={{ color: '#BFC9D1' }}
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Education Lane, Knowledge City, State - 123456</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 pt-8 border-t"
          style={{ borderColor: '#BFC9D1', opacity: 0.2 }}
        >
          <p 
            className="text-center text-sm"
            style={{ color: '#BFC9D1', opacity: 0.8 }}
          >
            © {new Date().getFullYear()} The Concept Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;