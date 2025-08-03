import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center floating">
              <span className="text-white font-bold text-lg">ABK</span>
            </div>
            <span className="text-xl font-bold text-primary">ABK Global Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-primary transition-all duration-300 font-medium hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="relative group">
              <button className="text-neutral-600 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/it-security" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    IT Security Solutions
                  </Link>
                  <Link href="/networking" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    IT Networking Solutions
                  </Link>
                  <Link href="/data-management" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Data Management Solutions
                  </Link>
                  <Link href="/backup" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Backup & Archival Solutions
                  </Link>
                  <Link href="/virtualization" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Virtualization Solutions
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-neutral-600 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/consulting" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Consulting
                  </Link>
                  <Link href="/managed-services" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Managed Services
                  </Link>
                  <Link href="/cloud" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Cloud Solutions
                  </Link>
                  <Link href="/support" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Support & Maintenance
                  </Link>
                </div>
              </div>
            </div>

            <a href="#partners" className="text-neutral-600 hover:text-primary transition-colors duration-300 font-medium">
              Partners
            </a>
            
            <div className="relative group">
              <button className="text-neutral-600 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/mission" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Our Mission
                  </Link>
                  <Link href="/clientele" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Our Clientele
                  </Link>
                  <Link href="/core-competence" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Our Core Competence
                  </Link>
                  <Link href="/goal" className="block px-4 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors">
                    Our Goal
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-neutral-600 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu fixed top-0 left-0 w-full h-full bg-white z-50 lg:hidden ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button 
              className="text-neutral-600 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <Link href="/" className="block text-lg text-neutral-600 hover:text-primary transition-colors py-2">
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-lg font-medium text-neutral-900 py-2">Solutions</div>
              <div className="pl-4 space-y-2">
                <Link href="/it-security" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  IT Security Solutions
                </Link>
                <Link href="/networking" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  IT Networking Solutions
                </Link>
                <Link href="/data-management" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Data Management Solutions
                </Link>
                <Link href="/backup" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Backup & Archival Solutions
                </Link>
                <Link href="/virtualization" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Virtualization Solutions
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium text-neutral-900 py-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link href="/consulting" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Consulting
                </Link>
                <Link href="/managed-services" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Managed Services
                </Link>
                <Link href="/cloud" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Cloud Solutions
                </Link>
                <Link href="/support" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Support & Maintenance
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium text-neutral-900 py-2">About Us</div>
              <div className="pl-4 space-y-2">
                <Link href="/mission" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Our Mission
                </Link>
                <Link href="/clientele" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Our Clientele
                </Link>
                <Link href="/core-competence" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Our Core Competence
                </Link>
                <Link href="/goal" className="block text-neutral-600 hover:text-primary transition-colors py-1">
                  Our Goal
                </Link>
              </div>
            </div>
            <Link href="/contact" className="block bg-primary text-white px-6 py-3 rounded-lg text-center font-medium mt-6">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
