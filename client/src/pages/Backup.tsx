import { Save, Shield, RefreshCw, CloudUpload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Backup() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Save className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Backup & Archival Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive data protection and archival systems ensuring business continuity with automated backup solutions and disaster recovery planning.
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
                <h2 className="text-4xl font-bold text-green-600 mb-8">Protecting Your Critical Data</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our comprehensive backup and archival solutions ensure your business data is protected, accessible, and recoverable. We provide automated backup systems, disaster recovery planning, and long-term data archival services designed to meet your business continuity requirements and regulatory compliance needs.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Data Protection</h4>
                      <p className="text-neutral-600">Multi-layered backup strategies to protect against data loss and corruption.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <RefreshCw className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Disaster Recovery</h4>
                      <p className="text-neutral-600">Rapid recovery solutions to minimize downtime and ensure business continuity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <CloudUpload className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Automated Backup</h4>
                      <p className="text-neutral-600">Scheduled, automated backup processes with real-time monitoring and alerts.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Backup Services</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Automated Daily Backups</h5>
                    <p className="text-sm text-neutral-600">Scheduled backups with real-time monitoring</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Cloud & On-Premise Options</h5>
                    <p className="text-sm text-neutral-600">Flexible deployment models for your needs</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Disaster Recovery Planning</h5>
                    <p className="text-sm text-neutral-600">Complete recovery strategies and testing</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Long-term Archival</h5>
                    <p className="text-sm text-neutral-600">Compliance-ready data archival solutions</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">24/7 Monitoring</h5>
                    <p className="text-sm text-neutral-600">Continuous backup monitoring and alerts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Secure Your Business Data Today</h3>
              <p className="text-xl mb-8 text-white/90">
                Don't risk losing critical business data. Let us design a comprehensive backup strategy for your organization.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Backup Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}