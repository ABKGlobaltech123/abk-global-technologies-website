import { Shield, Lock, Server, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ITSecurity() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">IT Security Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from evolving cyber threats with industry-leading technology partners.
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
                <h2 className="text-4xl font-bold text-primary mb-8">Protecting Your Digital Assets</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies offers comprehensive IT security solutions, including Endpoint Security with TrendMicro, Kaspersky, McAfee, and Sophos, and Encryption with TrendMicro, WinMagic, and McAfee. Our Gateway Level Security features Palo Alto, Fortinet, SonicWALL, Checkpoint, Sophos, and Cisco for robust network protection.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Advanced Threat Protection</h4>
                      <p className="text-neutral-600">Multi-layered security approach to detect and prevent sophisticated cyber attacks.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Server className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Enterprise-Grade Security</h4>
                      <p className="text-neutral-600">Scalable security solutions designed for businesses of all sizes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">24/7 Monitoring</h4>
                      <p className="text-neutral-600">Continuous monitoring and real-time threat response capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Security Components</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Endpoint Security</h5>
                    <p className="text-sm text-neutral-600">TrendMicro • Kaspersky • McAfee • Sophos</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Encryption Solutions</h5>
                    <p className="text-sm text-neutral-600">TrendMicro • WinMagic • McAfee</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Gateway Security</h5>
                    <p className="text-sm text-neutral-600">Palo Alto • Fortinet • SonicWALL • Checkpoint • Sophos • Cisco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h3>
              <p className="text-xl mb-8 text-white/90">
                Let our security experts design a comprehensive protection strategy for your organization.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}