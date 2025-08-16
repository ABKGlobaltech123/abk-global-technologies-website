import { Users, Building, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Clientele() {
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Clientele</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Trusted partnerships across diverse industries, delivering innovative technology solutions that drive success for organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Client Overview */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-secondary mb-8">Building Lasting Partnerships</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies has built strong, lasting relationships with clients across various industries. From small businesses to large enterprises, we provide tailored technology solutions that meet unique business requirements and drive measurable results.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <blockquote className="text-2xl font-semibold text-secondary italic">
                    "Our success is measured by the success of our clients. We take pride in being more than a vendor – we are a strategic technology partner."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Industry Segments */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Healthcare</h4>
                <p className="text-neutral-600">Secure IT infrastructure and compliance solutions for healthcare organizations.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Financial Services</h4>
                <p className="text-neutral-600">High-security solutions and reliable infrastructure for financial institutions.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Education</h4>
                <p className="text-neutral-600">Scalable technology solutions for educational institutions and learning environments.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Manufacturing</h4>
                <p className="text-neutral-600">Industrial IoT and automation solutions for manufacturing operations.</p>
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Long-term Partnerships</h4>
                <p className="text-neutral-600">Average client relationship span of 5+ years with 98% satisfaction rate.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Proven Results</h4>
                <p className="text-neutral-600">Delivered over 500 successful projects across various industries and business sizes.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Business Growth</h4>
                <p className="text-neutral-600">Clients experience average 30% improvement in operational efficiency post-implementation.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-secondary to-accent p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h3>
              <p className="text-xl mb-8 text-white/90">
                Experience the difference of working with a technology partner who truly understands your business needs.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Become Our Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}