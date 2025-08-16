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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}