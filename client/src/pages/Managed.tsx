import { Wrench, Monitor, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Managed() {
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
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Managed Services</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive IT support that consolidates multiple vendor contracts into one expert-driven service, enhancing availability and minimizing downtime across your IT environment.
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
                <h2 className="text-4xl font-bold text-secondary mb-8">Simplified IT Management</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies simplifies IT support by consolidating multiple vendor contracts into one expert-driven service. Our proactive onsite and remote support enhances availability, speeds up issue resolution, and minimizes downtime across your IT environment.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Monitor className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Proactive Monitoring</h4>
                      <p className="text-neutral-600">24/7 monitoring and proactive issue detection to prevent problems before they impact your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Users className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Expert Team</h4>
                      <p className="text-neutral-600">Dedicated team of certified IT professionals managing your entire technology infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Rapid Response</h4>
                      <p className="text-neutral-600">Fast issue resolution with both onsite and remote support capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-secondary mb-6">Service Features</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Vendor Consolidation</h5>
                    <p className="text-sm text-neutral-600">Single point of contact for all IT services</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Proactive Support</h5>
                    <p className="text-sm text-neutral-600">Preventive maintenance and monitoring</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Onsite & Remote Support</h5>
                    <p className="text-sm text-neutral-600">Flexible support options for all scenarios</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Enhanced Availability</h5>
                    <p className="text-sm text-neutral-600">Maximize uptime and system reliability</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Issue Resolution</h5>
                    <p className="text-sm text-neutral-600">Fast problem identification and resolution</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Downtime Minimization</h5>
                    <p className="text-sm text-neutral-600">Reduce business disruption and losses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Cost Reduction</h4>
                <p className="text-neutral-600">Reduce IT costs by up to 40% through consolidated vendor management.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Faster Resolution</h4>
                <p className="text-neutral-600">Average issue resolution time reduced by 60% with expert support.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">99.9% Uptime</h4>
                <p className="text-neutral-600">Guaranteed high availability with proactive monitoring and maintenance.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-secondary to-accent p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Simplify Your IT Management</h3>
              <p className="text-xl mb-8 text-white/90">
                Let us consolidate your IT vendors and provide comprehensive managed services for your business.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Managed Services Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}