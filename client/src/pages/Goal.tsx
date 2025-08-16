import { TrendingUp, Target, Globe, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Goal() {
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
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Goal</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Shaping the future of technology by setting ambitious goals that drive innovation, expand our global presence, and create lasting value for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Goal Overview */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-green-600 mb-8">Visionary Objectives</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  Our goals are ambitious yet achievable, focused on sustainable growth, technological innovation, and creating meaningful impact in the digital transformation landscape. We are committed to becoming a global leader while maintaining our core values and commitment to excellence.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <blockquote className="text-2xl font-semibold text-green-600 italic">
                    "Our goal is not just to grow as a company, but to elevate the entire technology ecosystem and create opportunities for innovation and success."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Strategic Goals */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Global Expansion</h4>
                <p className="text-neutral-600">Establish presence in key markets across Asia, Europe, and the Americas.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Market Leadership</h4>
                <p className="text-neutral-600">Become the top 3 IT solutions provider in our target markets by 2027.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Innovation Hub</h4>
                <p className="text-neutral-600">Establish dedicated R&D centers for emerging technology development.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Sustainability</h4>
                <p className="text-neutral-600">Achieve carbon neutrality and promote sustainable technology practices.</p>
              </div>
            </div>

            {/* Goal Timeline */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-8">2025-2030 Roadmap</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">2025: Regional Leadership</h4>
                      <p className="text-neutral-600">Establish market leadership in South Asia and expand service portfolio to include AI/ML solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">2027: International Expansion</h4>
                      <p className="text-neutral-600">Launch operations in 5 new countries and achieve $100M annual revenue milestone.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">2030: Innovation Leader</h4>
                      <p className="text-neutral-600">Become recognized global leader in enterprise technology innovation and digital transformation.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Key Performance Indicators</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Client Growth</h5>
                    <p className="text-sm text-neutral-600">Serve 10,000+ enterprise clients globally</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Team Expansion</h5>
                    <p className="text-sm text-neutral-600">Build a team of 2,000+ certified professionals</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Innovation Portfolio</h5>
                    <p className="text-sm text-neutral-600">Launch 50+ proprietary solutions and patents</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Sustainability Impact</h5>
                    <p className="text-sm text-neutral-600">Reduce client carbon footprint by 40%</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Market Recognition</h5>
                    <p className="text-sm text-neutral-600">Top 3 global ranking in technology services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Initiatives */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center text-green-600 mb-12">Strategic Initiatives</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Technology Innovation</h5>
                  <p className="text-sm text-neutral-600">Invest 15% of revenue in R&D and emerging technologies</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Talent Development</h5>
                  <p className="text-sm text-neutral-600">Create world-class training and certification programs</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-purple-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Strategic Partnerships</h5>
                  <p className="text-sm text-neutral-600">Form alliances with leading technology vendors</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Market Expansion</h5>
                  <p className="text-sm text-neutral-600">Enter new vertical markets and geographical regions</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-red-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Digital Transformation</h5>
                  <p className="text-sm text-neutral-600">Lead industry digital transformation initiatives</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Sustainability</h5>
                  <p className="text-sm text-neutral-600">Champion green technology and sustainable practices</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Join Us in Achieving Our Goals</h3>
              <p className="text-xl mb-8 text-white/90">
                Partner with ABK Global Technologies and be part of our journey toward becoming a global technology leader.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}