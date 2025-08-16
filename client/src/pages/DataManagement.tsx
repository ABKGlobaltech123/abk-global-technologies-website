import { Database, Server, HardDrive, Archive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataManagement() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-accent/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Data Management Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive storage and server solutions to manage, protect, and optimize your critical business data with enterprise-grade technology.
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
                <h2 className="text-4xl font-bold text-accent mb-8">Enterprise Storage Excellence</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies provides comprehensive storage and server solutions, including NAS from Dell EMC, HP, Netgear, and QNAP, and SAN from Dell EMC, IBM, Pure Storage, NetApp, and HP. We also offer Unified Storage from Dell EMC, NetApp, IBM, and HP, Tape Library & Auto Loaders from Dell EMC, IBM, and HP, and Enterprise Servers from Dell EMC, HP, Lenovo, and NEC.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <HardDrive className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Scalable Storage</h4>
                      <p className="text-neutral-600">Flexible storage solutions that grow with your business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Server className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">High Performance</h4>
                      <p className="text-neutral-600">Enterprise-grade servers optimized for maximum performance and reliability.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Archive className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Data Protection</h4>
                      <p className="text-neutral-600">Advanced data protection and archival solutions for long-term data retention.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-accent mb-6">Storage Solutions</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Network Attached Storage (NAS)</h5>
                    <p className="text-sm text-neutral-600">Dell EMC • HP • Netgear • QNAP</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Storage Area Network (SAN)</h5>
                    <p className="text-sm text-neutral-600">Dell EMC • IBM • Pure Storage • NetApp • HP</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Unified Storage</h5>
                    <p className="text-sm text-neutral-600">Dell EMC • NetApp • IBM • HP</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Tape Library & Auto Loaders</h5>
                    <p className="text-sm text-neutral-600">Dell EMC • IBM • HP</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Enterprise Servers</h5>
                    <p className="text-sm text-neutral-600">Dell EMC • HP • Lenovo • NEC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent to-primary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Optimize Your Data Infrastructure</h3>
              <p className="text-xl mb-8 text-white/90">
                Let our data management experts design the perfect storage solution for your organization.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Storage Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}