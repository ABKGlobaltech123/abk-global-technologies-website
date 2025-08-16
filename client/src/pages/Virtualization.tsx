import { Cloud, Server, Layers, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Virtualization() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 to-purple-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Virtualization Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Advanced virtualization technologies enabling scalable, efficient infrastructure management with reduced costs and enhanced performance for modern business needs.
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
                <h2 className="text-4xl font-bold text-purple-600 mb-8">Transform Your IT Infrastructure</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our virtualization solutions enable organizations to maximize hardware utilization, reduce operational costs, and improve business agility. We provide comprehensive virtualization services including server virtualization, desktop virtualization, network virtualization, and storage virtualization using industry-leading platforms.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Server className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Server Virtualization</h4>
                      <p className="text-neutral-600">Consolidate multiple servers into virtual machines for improved efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Layers className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Desktop Virtualization</h4>
                      <p className="text-neutral-600">Virtual desktop infrastructure for flexible and secure remote access.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">High Availability</h4>
                      <p className="text-neutral-600">Ensure continuous operations with built-in redundancy and failover capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">Virtualization Services</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">VMware Solutions</h5>
                    <p className="text-sm text-neutral-600">vSphere, vCenter, ESXi virtualization platform</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Microsoft Hyper-V</h5>
                    <p className="text-sm text-neutral-600">Windows Server virtualization solutions</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Citrix Virtual Apps</h5>
                    <p className="text-sm text-neutral-600">Application and desktop virtualization</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Container Solutions</h5>
                    <p className="text-sm text-neutral-600">Docker, Kubernetes container orchestration</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Hybrid Cloud Integration</h5>
                    <p className="text-sm text-neutral-600">Seamless on-premise to cloud migration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Server className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Cost Reduction</h4>
                <p className="text-neutral-600">Reduce hardware costs by up to 70% through efficient resource utilization.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Improved Performance</h4>
                <p className="text-neutral-600">Enhanced system performance with dynamic resource allocation.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Scalability</h4>
                <p className="text-neutral-600">Easily scale resources up or down based on business demands.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Virtualize Your Infrastructure?</h3>
              <p className="text-xl mb-8 text-white/90">
                Transform your IT environment with our comprehensive virtualization solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Virtualization Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}