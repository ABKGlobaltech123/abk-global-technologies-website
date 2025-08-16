import { Lightbulb, Settings, Cloud, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Consulting() {
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
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Consulting Services</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Expert IT consulting services covering advanced virtualization, cloud computing, and cybersecurity to optimize your technology infrastructure and drive business innovation.
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
                <h2 className="text-4xl font-bold text-primary mb-8">Strategic Technology Guidance</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our Consulting Services cover advanced Virtualization, Cloud Computing, and Hyper-Converged Infrastructure to optimize IT performance. We ensure Backups & Disaster Recovery along with On-Premise & Cloud Storage for data security. Our solutions enhance Cybersecurity measures to safeguard businesses. We also specialize in Internet of Things (IoT) integration for smart connectivity.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Settings className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Infrastructure Optimization</h4>
                      <p className="text-neutral-600">Advanced virtualization and hyper-converged infrastructure solutions for maximum efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Cloud className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Cloud Strategy</h4>
                      <p className="text-neutral-600">Comprehensive cloud computing strategies and migration planning.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Security Assessment</h4>
                      <p className="text-neutral-600">Enhanced cybersecurity measures and risk assessment to safeguard your business.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Consulting Areas</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Advanced Virtualization</h5>
                    <p className="text-sm text-neutral-600">VMware, Hyper-V, and container technologies</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Cloud Computing</h5>
                    <p className="text-sm text-neutral-600">AWS, Azure, Google Cloud strategy and migration</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Hyper-Converged Infrastructure</h5>
                    <p className="text-sm text-neutral-600">HCI design and implementation planning</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Backup & Disaster Recovery</h5>
                    <p className="text-sm text-neutral-600">Comprehensive data protection strategies</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Cybersecurity</h5>
                    <p className="text-sm text-neutral-600">Security assessments and compliance</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">IoT Integration</h5>
                    <p className="text-sm text-neutral-600">Smart connectivity and IoT solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your IT Strategy?</h3>
              <p className="text-xl mb-8 text-white/90">
                Let our consulting experts analyze your current infrastructure and design a roadmap for digital transformation.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}