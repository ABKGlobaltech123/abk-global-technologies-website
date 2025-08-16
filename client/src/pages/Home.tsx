import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, Network, Database, Save, Cloud, Settings, Monitor, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import TechnologyPartners from "@/components/TechnologyPartners";

export default function Home() {
  const [activeService, setActiveService] = useState('consulting');
  
  // Use root paths for both development and production (custom domain)
  const backgroundImagePath = "/photo1.avif";
  const logoPath = "/abk-logo-new.png";

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
      description: "Our Consulting Services cover advanced Virtualization, Cloud Computing, and Hyper-Converged Infrastructure to optimize IT performance. We ensure Backups & Disaster Recovery along with On-Premise & Cloud Storage for data security. Our solutions enhance Cybersecurity measures to safeguard businesses. We also specialize in Internet of Things (IoT) integration for smart connectivity.",
      icon: Settings
    },
    managed: {
      title: "Managed Services",
      description: "ABK Global Technologies simplifies IT support by consolidating multiple vendor contracts into one expert-driven service. Our proactive onsite and remote support enhances availability, speeds up issue resolution, and minimizes downtime across your IT environment.",
      icon: Monitor
    },
    cloud: {
      title: "Cloud Solutions",
      description: "We provide cloud services across AWS, Azure, Google Cloud, and OpenStack. Our Cloud VDI solutions include AWS Workspaces, ensuring seamless virtual desktop experiences. For email, we offer Microsoft Office 365, G-Suite, and AWS WorkMail to enhance communication and collaboration.",
      icon: Cloud
    },
    support: {
      title: "Support & Maintenance",
      description: "Our technology partners offer proactive and predictive support, ensuring optimized IT investments and seamless operations. With advanced digital tools, we prevent issues before they escalate, maximizing uptime and efficiency. Our services include Workforce Solutions like Microsoft Office 365, Skype for Business, and Digital Workforce Portals, along with Digital Services such as Big Data, IoT, Cloud-Native Applications, and DevOps. Reach out for hassle-free, expert IT support.",
      icon: Headphones
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
        
        <div className="container mx-auto px-4 text-center relative z-10 mt-20 md:mt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight hero-text">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                <span className="text-white text-center md:text-left">ABK</span>
                <span className="text-white text-center md:text-left">Global Technologies</span>
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
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              COMPREHENSIVE SOLUTIONS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Additional Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology services designed to transform your business operations and drive digital excellence
            </p>
          </div>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 scale-in">
            {Object.entries(serviceContent).map(([key, service], index) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`group relative px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 hover:scale-105 ${
                  activeService === key
                    ? 'bg-primary text-white shadow-2xl shadow-primary/30 transform scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">
                  {service.title.replace(' Services', '').replace(' Solutions', '').replace(' & Maintenance', '')}
                </span>
                {activeService === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* Service Content Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Card background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-6">
                    {(() => {
                      const IconComponent = serviceContent[activeService as keyof typeof serviceContent].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-4xl font-bold text-primary">
                    {serviceContent[activeService as keyof typeof serviceContent].title}
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                  {serviceContent[activeService as keyof typeof serviceContent].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 fade-in-up">
            <p className="text-neutral-600 mb-6">Ready to modernize your technology infrastructure?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
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
