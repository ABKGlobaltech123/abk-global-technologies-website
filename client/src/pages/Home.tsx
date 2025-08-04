import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, Network, Database, Save, Cloud } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import TechnologyPartners from "@/components/TechnologyPartners";

export default function Home() {
  const [activeService, setActiveService] = useState('consulting');
  
  // Use different asset paths for development vs production
  const backgroundImagePath = import.meta.env.PROD 
    ? "/abk-global-technologies-website/photo1.avif" 
    : "/photo1.avif";
  
  const logoPath = import.meta.env.PROD 
    ? "/abk-global-technologies-website/abk-logo-new.png" 
    : "/abk-logo-new.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animationElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-in-bottom'
    );
    animationElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const serviceContent = {
    consulting: {
      title: "Consulting Services",
      description: "Our Consulting Services cover advanced Virtualization, Cloud Computing, and Hyper-Converged Infrastructure to optimize IT performance. We ensure Backups & Disaster Recovery along with On-Premise & Cloud Storage for data security. Our solutions enhance Cybersecurity measures to safeguard businesses. We also specialize in Internet of Things (IoT) integration for smart connectivity."
    },
    managed: {
      title: "Managed Services",
      description: "ABK Global Technologies simplifies IT support by consolidating multiple vendor contracts into one expert-driven service. Our proactive onsite and remote support enhances availability, speeds up issue resolution, and minimizes downtime across your IT environment."
    },
    cloud: {
      title: "Cloud Solutions",
      description: "We provide cloud services across AWS, Azure, Google Cloud, and OpenStack. Our Cloud VDI solutions include AWS Workspaces, ensuring seamless virtual desktop experiences. For email, we offer Microsoft Office 365, G-Suite, and AWS WorkMail to enhance communication and collaboration."
    },
    support: {
      title: "Support & Maintenance",
      description: "Our technology partners offer proactive and predictive support, ensuring optimized IT investments and seamless operations. With advanced digital tools, we prevent issues before they escalate, maximizing uptime and efficiency. Our services include Workforce Solutions like Microsoft Office 365, Skype for Business, and Digital Workforce Portals, along with Digital Services such as Big Data, IoT, Cloud-Native Applications, and DevOps. Reach out for hassle-free, expert IT support."
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-start justify-center pt-32 md:pt-40 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(91, 31, 105, 0.7), rgba(32, 117, 255, 0.7)), url("${backgroundImagePath}")` 
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight hero-text">
              <span className="block mb-4">Welcome to</span>
              <div className="flex items-center justify-center">
                <img 
                  src={logoPath} 
                  alt="ABK" 
                  className="h-20 md:h-24 lg:h-32 w-auto object-contain brightness-150 contrast-125"
                  style={{ filter: 'hue-rotate(-60deg) saturate(2) brightness(1.8)' }}
                />
                <span className="text-accent">Global Technologies</span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium hero-text-delay">Your Vision, Our Innovation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons">
              <a href="#solutions" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg">
                Explore Solutions
              </a>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Exceptional Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              We provide innovative digital solutions that enhance efficiency, optimize performance, and drive seamless business growth in a competitive landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <ServiceCard
              icon={<Shield className="text-white text-2xl" />}
              title="IT Security Solutions"
              description="ABK Global Technologies offers IT security solutions, including Endpoint Security with TrendMicro, Kaspersky, McAfee, and Sophos, and Encryption with TrendMicro, WinMagic, and McAfee. Our Gateway Level Security features Palo Alto, Fortinet, SonicWALL, Checkpoint, Sophos, and Cisco for robust network protection."
              colorClass="bg-primary"
            />

            <ServiceCard
              icon={<Network className="text-white text-2xl" />}
              title="IT Network Solutions"
              description="ABK Global Technologies offers IT Networking Solutions, including Switches from Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear, and Wireless Solutions from Arista, Aruba, Cisco, and Ruckus. We also provide Network Monitoring Solutions like WhatsUp Gold, SolarWinds, and NEC, along with Structured Cabling from CommScope, Panduit, Belden."
              colorClass="bg-secondary"
            />

            <ServiceCard
              icon={<Database className="text-white text-2xl" />}
              title="Data Management Solutions"
              description="ABK Global Technologies provides storage and server solutions, including NAS from Dell EMC, HP, Netgear, and QNAP, and SAN from Dell EMC, IBM, Pure Storage, NetApp, and HP. We also offer Unified Storage from Dell EMC, NetApp, IBM, and HP, Tape Library & Auto Loaders from Dell EMC, IBM, and HP, and Enterprise Servers from Dell EMC, HP, Lenovo, and NEC."
              colorClass="bg-accent"
            />

            <ServiceCard
              icon={<Save className="text-white text-2xl" />}
              title="Backup & Archival Solutions"
              description="ABK Global Technologies offers IT Networking Solutions, including Switches from Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear, and Wireless Solutions from Arista, Aruba, Cisco, and Ruckus. We also provide Network Monitoring Solutions like WhatsUp Gold, SolarWinds, and NEC, along with Structured Cabling from CommScope, Panduit, Belden, and Molex for reliable connectivity."
              colorClass="bg-green-600"
            />

            <div className="md:col-span-2 lg:col-span-1">
              <ServiceCard
                icon={<Cloud className="text-white text-2xl" />}
                title="Virtualization Solutions"
                description="ABK Global Technologies offers IT Networking Solutions, including Switches from Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear, and Wireless Solutions from Arista, Aruba, Cisco, and Ruckus. We also provide Network Monitoring Solutions like WhatsUp Gold, SolarWinds, and NEC, along with Structured Cabling from CommScope, Panduit, Belden, and Molex for reliable connectivity."
                colorClass="bg-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Additional Services</h2>
            <p className="text-xl text-neutral-600">Comprehensive technology services tailored to your business needs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 scale-in">
            {Object.entries(serviceContent).map(([key, service], index) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  activeService === key
                    ? 'bg-primary text-white transform scale-105 shadow-lg'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.title.replace(' Services', '').replace(' Solutions', '').replace(' & Maintenance', '')}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-6">
                {serviceContent[activeService as keyof typeof serviceContent].title}
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {serviceContent[activeService as keyof typeof serviceContent].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission Section */}
            <div id="mission" className="space-y-8 fade-in-left">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  ABK Global Technologies came into the competing Information Technology services industry with a mission to provide most efficient and economically friendly solutions to all our customers. Leon today has firm foothold as an emerging company in the field of system integration with the primary goal of offering infrastructure solutions, which include IT Consulting services and IT Infrastructure services.
                </p>
              </div>

              <div id="core-competence">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Core Competence</h3>
                <p className="text-neutral-600 leading-relaxed">
                  At ABK Technologies, we believe in teamwork. Every day, we strive to master new competencies, pushing ourselves forward with dedication and innovation. We sincerely look forward to our customers' support as we build the future of secure communications.
                </p>
              </div>
            </div>

            {/* Goal and Clientele Section */}
            <div className="space-y-8 fade-in-right">
              <div id="goal">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Goal</h3>
                <p className="text-neutral-600 leading-relaxed">
                  A clear perception of the growing requirement of the Corporate World in the area of IT has enabled ABK Global Technologies to develop the present for our customers by increasing value helping to create a more convenient and prosperous society, and creating peace of mind through the establishment of reliable networks.
                </p>
              </div>

              <div id="clientele">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Clientele</h3>
                <p className="text-neutral-600 leading-relaxed">
                  With prestigious clients and repeated orders, our services and the quality of our products are among the best in the industry. At ABK Global Technologies, we focus on building strong customer relationships with every transaction. As a trusted technology service provider, we deliver end-to-end solutions through strategic development, consulting services, and expert execution by our highly trained and skilled engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <TechnologyPartners />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Information */}
            <div className="fade-in-left">
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/80">support@abkglobal.tech</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-white/80">+91 8341051124</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-white/80">H501 Indis VB City Kompally, Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
