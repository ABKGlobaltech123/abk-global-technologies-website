import { Link } from "wouter";

export default function Footer() {
  // Use root path for both development and production (custom domain)
  const logoPath = "/abk-logo.png";
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoPath} 
                alt="ABK Global Technologies" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold">ABK Global Technologies</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Your Vision, Our Innovation. Leading technology solutions provider delivering exceptional IT services and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/it-security" className="text-neutral-400 hover:text-white transition-colors">
                  IT Security Solutions
                </Link>
              </li>
              <li>
                <Link href="/networking" className="text-neutral-400 hover:text-white transition-colors">
                  IT Networking Solutions
                </Link>
              </li>
              <li>
                <Link href="/data-management" className="text-neutral-400 hover:text-white transition-colors">
                  Data Management Solutions
                </Link>
              </li>
              <li>
                <Link href="/backup" className="text-neutral-400 hover:text-white transition-colors">
                  Backup & Archival Solutions
                </Link>
              </li>
              <li>
                <Link href="/virtualization" className="text-neutral-400 hover:text-white transition-colors">
                  Virtualization Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/consulting" className="text-neutral-400 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/managed-services" className="text-neutral-400 hover:text-white transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/cloud" className="text-neutral-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-neutral-400 hover:text-white transition-colors">
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mission" className="text-neutral-400 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/clientele" className="text-neutral-400 hover:text-white transition-colors">
                  Our Clientele
                </Link>
              </li>
              <li>
                <Link href="/core-competence" className="text-neutral-400 hover:text-white transition-colors">
                  Our Core Competence
                </Link>
              </li>
              <li>
                <Link href="/goal" className="text-neutral-400 hover:text-white transition-colors">
                  Our Goal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400">&copy; 2024 ABK Global Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
