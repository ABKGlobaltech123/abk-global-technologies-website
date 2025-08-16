import { Network, Wifi, Monitor, Cable } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Networking() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Network className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">IT Network Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Advanced networking infrastructure solutions to connect, optimize, and secure your business operations with premier technology partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-8">Building Robust Network Infrastructure</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies offers comprehensive IT Networking Solutions, including Switches from Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear, and Wireless Solutions from Arista, Aruba, Cisco, and Ruckus. We also provide Network Monitoring Solutions like WhatsUp Gold, SolarWinds, and NEC, along with Structured Cabling from CommScope, Panduit, and Belden.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Wifi className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Wireless Excellence</h4>
                      <p className="text-neutral-600">High-performance wireless networks for seamless connectivity across your organization.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Monitor className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Network Monitoring</h4>
                      <p className="text-neutral-600">Real-time network performance monitoring and optimization tools.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Cable className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Structured Cabling</h4>
                      <p className="text-neutral-600">Professional cabling infrastructure for reliable data transmission.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-secondary mb-6">Network Components</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Network Switches</h5>
                    <p className="text-sm text-neutral-600">Cisco • Arista • Ruckus • Dell EMC • Brocade • Netgear</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Wireless Solutions</h5>
                    <p className="text-sm text-neutral-600">Arista • Aruba • Cisco • Ruckus</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Network Monitoring</h5>
                    <p className="text-sm text-neutral-600">WhatsUp Gold • SolarWinds • NEC</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Structured Cabling</h5>
                    <p className="text-sm text-neutral-600">CommScope • Panduit • Belden</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-secondary to-accent p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Upgrade Your Network?</h3>
              <p className="text-xl mb-8 text-white/90">
                Let our networking experts design and implement the perfect infrastructure for your business.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Network Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}