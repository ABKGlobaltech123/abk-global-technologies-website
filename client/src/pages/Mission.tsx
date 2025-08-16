import { Target, Users, TrendingUp, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mission() {
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
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving technological landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Mission Statement */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-primary mb-8">Your Vision, Our Innovation</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  At ABK Global Technologies, our mission is to be the leading technology solutions provider that transforms businesses through innovative IT infrastructure, comprehensive security solutions, and strategic consulting services. We are committed to delivering excellence, reliability, and cutting-edge technology solutions that empower our clients to achieve their business objectives.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <blockquote className="text-2xl font-semibold text-primary italic">
                    "To bridge the gap between technology challenges and business success by providing world-class IT solutions that drive innovation, efficiency, and sustainable growth for organizations across industries."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Excellence</h4>
                <p className="text-neutral-600">Delivering superior quality in every solution and service we provide to our clients.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Innovation</h4>
                <p className="text-neutral-600">Embracing cutting-edge technologies and creative solutions to stay ahead of industry trends.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Partnership</h4>
                <p className="text-neutral-600">Building long-term relationships with clients based on trust, transparency, and mutual success.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Results</h4>
                <p className="text-neutral-600">Focusing on measurable outcomes that drive real business value and competitive advantage.</p>
              </div>
            </div>

            {/* Mission Pillars */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-8">Our Commitment</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Technology Leadership</h4>
                      <p className="text-neutral-600">Stay at the forefront of technological advancement, continuously evaluating and implementing the latest solutions to benefit our clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Client Success</h4>
                      <p className="text-neutral-600">Prioritize our clients' success by understanding their unique challenges and delivering tailored solutions that exceed expectations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Quality Assurance</h4>
                      <p className="text-neutral-600">Maintain the highest standards of quality in all our services, from initial consultation to ongoing support and maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Vision Statement</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Global Technology Partner</h5>
                    <p className="text-sm text-neutral-600">Become the preferred global technology partner for businesses seeking digital transformation.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Innovation Hub</h5>
                    <p className="text-sm text-neutral-600">Create an innovation hub that drives technological advancement and business growth.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Industry Leadership</h5>
                    <p className="text-sm text-neutral-600">Lead by example in ethical business practices and sustainable technology solutions.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Client Empowerment</h5>
                    <p className="text-sm text-neutral-600">Empower clients to achieve their full potential through strategic technology implementation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Join Us in Our Mission</h3>
              <p className="text-xl mb-8 text-white/90">
                Partner with ABK Global Technologies and experience how our mission-driven approach can transform your business.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}