import { Award, Zap, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CoreCompetence() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-accent/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Core Competence</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Our expertise spans across cutting-edge technologies and industry best practices, delivering exceptional value through proven competencies and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Core Competence Overview */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-accent mb-8">Excellence Through Expertise</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  ABK Global Technologies' core competence lies in our deep technical expertise, innovative approach, and commitment to delivering solutions that drive real business value. Our team combines years of experience with cutting-edge knowledge to tackle the most complex technology challenges.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <blockquote className="text-2xl font-semibold text-accent italic">
                    "Our core competence is not just in technology, but in understanding how technology can transform business operations and drive sustainable growth."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Technical Expertise Areas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Technical Excellence</h4>
                <p className="text-neutral-600">Deep expertise in enterprise technologies and cutting-edge solutions.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Innovation</h4>
                <p className="text-neutral-600">Pioneering new approaches to solve complex business challenges.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Team Expertise</h4>
                <p className="text-neutral-600">Certified professionals with extensive industry experience.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">Strategic Focus</h4>
                <p className="text-neutral-600">Aligning technology solutions with business objectives.</p>
              </div>
            </div>

            {/* Key Competencies */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <h3 className="text-3xl font-bold text-accent mb-8">Key Competencies</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Enterprise Architecture</h4>
                      <p className="text-neutral-600">Designing scalable, secure, and efficient IT architectures that support business growth and digital transformation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Cloud Technologies</h4>
                      <p className="text-neutral-600">Deep expertise in multi-cloud environments including AWS, Azure, Google Cloud, and hybrid cloud solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Cybersecurity</h4>
                      <p className="text-neutral-600">Comprehensive security expertise from threat assessment to implementation of robust security frameworks.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Target className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Digital Transformation</h4>
                      <p className="text-neutral-600">Strategic guidance and implementation support for comprehensive digital transformation initiatives.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-accent mb-6">Technology Domains</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Infrastructure & Networking</h5>
                    <p className="text-sm text-neutral-600">Design and implementation of robust network infrastructure</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Data Management & Analytics</h5>
                    <p className="text-sm text-neutral-600">Comprehensive data storage, processing, and analytics solutions</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Application Development</h5>
                    <p className="text-sm text-neutral-600">Modern application development and deployment methodologies</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">DevOps & Automation</h5>
                    <p className="text-sm text-neutral-600">Streamlined development and operations workflows</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">IoT & Emerging Technologies</h5>
                    <p className="text-sm text-neutral-600">Integration of IoT and next-generation technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Standards */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center text-accent mb-12">Certifications & Standards</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">ISO 27001</h5>
                  <p className="text-sm text-neutral-600">Information Security Management</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-red-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">AWS Certified</h5>
                  <p className="text-sm text-neutral-600">Cloud Solutions Architecture</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">Microsoft Certified</h5>
                  <p className="text-sm text-neutral-600">Azure Solutions Expert</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">CISSP</h5>
                  <p className="text-sm text-neutral-600">Cybersecurity Professional</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">ITIL v4</h5>
                  <p className="text-sm text-neutral-600">Service Management</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2">PMP</h5>
                  <p className="text-sm text-neutral-600">Project Management Professional</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent to-primary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Experience Our Expertise</h3>
              <p className="text-xl mb-8 text-white/90">
                Leverage our core competencies to transform your technology infrastructure and drive business success.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}