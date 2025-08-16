import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Shield, Network, Database, Save, Cloud } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Use root path for both development and production (custom domain)
  const logoPath = "/abk-logo.png";

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
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src={logoPath} 
              alt="ABK Global Technologies" 
              className="h-16 w-auto object-contain floating"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-primary transition-all duration-300 font-medium hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="relative group">
              <button className="text-neutral-600 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                Solutions <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-80 bg-white shadow-2xl rounded-2xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Core Solutions</h4>
                  </div>
                  <div className="space-y-1">
                    <Link href="/it-security" className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 text-sm">IT Security Solutions</div>
                        <div className="text-xs text-neutral-600">Endpoint, Gateway & Encryption</div>
                      </div>
                    </Link>
                    
                    <Link href="/networking" className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-secondary/10 hover:to-secondary/5 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Network className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 text-sm">IT Network Solutions</div>
                        <div className="text-xs text-neutral-600">Switches, Wireless & Monitoring</div>
                      </div>
                    </Link>
                    
                    <Link href="/data-management" className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 text-sm">Data Management</div>
                        <div className="text-xs text-neutral-600">Storage, Servers & Enterprise</div>
                      </div>
                    </Link>
                    
                    <Link href="/backup" className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-600/10 hover:to-green-500/5 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Save className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 text-sm">Backup & Archival</div>
                        <div className="text-xs text-neutral-600">Protection & Disaster Recovery</div>
                      </div>
                    </Link>
                    
                    <Link href="/virtualization" className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-purple-500/5 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Cloud className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 text-sm">Virtualization Solutions</div>
                        <div className="text-xs text-neutral-600">Scalable Infrastructure</div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="border-t border-neutral-200 mt-4 pt-4">
                    <a href="#solutions" className="flex items-center justify-center p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <span className="font-semibold text-sm">View All Solutions</span>
                      <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                    </a>
                  </div>
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
            <img 
              src={logoPath} 
              alt="ABK Global Technologies" 
              className="h-10 w-auto object-contain"
            />
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
