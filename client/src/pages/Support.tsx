import { Headphones, Zap, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Support() {
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
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Support & Maintenance</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Proactive and predictive support ensuring optimized IT investments with advanced digital tools, workforce solutions, and comprehensive digital services.
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
                <h2 className="text-4xl font-bold text-green-600 mb-8">Comprehensive IT Support</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our technology partners offer proactive and predictive support, ensuring optimized IT investments and seamless operations. With advanced digital tools, we prevent issues before they escalate, maximizing uptime and efficiency. Our services include Workforce Solutions like Microsoft Office 365, Skype for Business, and Digital Workforce Portals, along with Digital Services such as Big Data, IoT, Cloud-Native Applications, and DevOps.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Proactive Monitoring</h4>
                      <p className="text-neutral-600">Advanced digital tools prevent issues before they escalate, maximizing uptime.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Workforce Solutions</h4>
                      <p className="text-neutral-600">Microsoft Office 365, Skype for Business, and Digital Workforce Portals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Digital Services</h4>
                      <p className="text-neutral-600">Big Data, IoT, Cloud-Native Applications, and DevOps solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Support Services</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Proactive Support</h5>
                    <p className="text-sm text-neutral-600">Predictive maintenance and issue prevention</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Digital Tools</h5>
                    <p className="text-sm text-neutral-600">Advanced monitoring and optimization systems</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Microsoft Office 365</h5>
                    <p className="text-sm text-neutral-600">Complete productivity and collaboration suite</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Skype for Business</h5>
                    <p className="text-sm text-neutral-600">Enterprise communication and conferencing</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Digital Workforce Portals</h5>
                    <p className="text-sm text-neutral-600">Employee self-service and productivity platforms</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Services Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center text-green-600 mb-12">Digital Services Portfolio</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Big Data</h5>
                  <p className="text-sm text-neutral-600">Analytics and data processing solutions</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">IoT Solutions</h5>
                  <p className="text-sm text-neutral-600">Internet of Things integration and management</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Cloud-Native Apps</h5>
                  <p className="text-sm text-neutral-600">Modern application development and deployment</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">DevOps</h5>
                  <p className="text-sm text-neutral-600">Development and operations automation</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Maximized Uptime</h4>
                <p className="text-neutral-600">Achieve 99.9% uptime with proactive monitoring and predictive maintenance.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Optimized ROI</h4>
                <p className="text-neutral-600">Ensure optimized IT investments with strategic support and maintenance.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Expert Support</h4>
                <p className="text-neutral-600">Access to certified professionals for hassle-free IT support.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Get Expert IT Support Today</h3>
              <p className="text-xl mb-8 text-white/90">
                Reach out for hassle-free, expert IT support that keeps your business running smoothly.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}