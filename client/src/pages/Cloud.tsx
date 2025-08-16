import { Cloud as CloudIcon, Server, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cloud() {
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
              <CloudIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive cloud services across AWS, Azure, Google Cloud, and OpenStack with virtual desktop infrastructure and enterprise email solutions for modern businesses.
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
                <h2 className="text-4xl font-bold text-accent mb-8">Multi-Cloud Excellence</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  We provide cloud services across AWS, Azure, Google Cloud, and OpenStack. Our Cloud VDI solutions include AWS Workspaces, ensuring seamless virtual desktop experiences. For email, we offer Microsoft Office 365, G-Suite, and AWS WorkMail to enhance communication and collaboration.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Server className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Virtual Desktop Infrastructure</h4>
                      <p className="text-neutral-600">AWS Workspaces and VDI solutions for secure remote access and productivity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Enterprise Email</h4>
                      <p className="text-neutral-600">Microsoft Office 365, G-Suite, and AWS WorkMail for enhanced communication.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Multi-Cloud Strategy</h4>
                      <p className="text-neutral-600">Strategic cloud deployment across multiple platforms for optimal performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-accent mb-6">Cloud Platforms</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Amazon Web Services (AWS)</h5>
                    <p className="text-sm text-neutral-600">EC2, S3, RDS, Lambda, and AWS Workspaces</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Microsoft Azure</h5>
                    <p className="text-sm text-neutral-600">Virtual Machines, Storage, SQL Database, and Azure AD</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Google Cloud Platform</h5>
                    <p className="text-sm text-neutral-600">Compute Engine, Cloud Storage, BigQuery, and G-Suite</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">OpenStack</h5>
                    <p className="text-sm text-neutral-600">Private cloud infrastructure and orchestration</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <h5 className="font-semibold text-neutral-900 mb-2">Email Solutions</h5>
                    <p className="text-sm text-neutral-600">Office 365, G-Suite, AWS WorkMail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-6 h-6 text-blue-500" />
                </div>
                <h5 className="font-bold text-neutral-900 mb-2">AWS</h5>
                <p className="text-sm text-neutral-600">Enterprise cloud computing and storage solutions</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-bold text-neutral-900 mb-2">Azure</h5>
                <p className="text-sm text-neutral-600">Microsoft cloud platform and services</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-6 h-6 text-red-500" />
                </div>
                <h5 className="font-bold text-neutral-900 mb-2">Google Cloud</h5>
                <p className="text-sm text-neutral-600">Scalable cloud computing and AI services</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6 text-orange-500" />
                </div>
                <h5 className="font-bold text-neutral-900 mb-2">OpenStack</h5>
                <p className="text-sm text-neutral-600">Private cloud infrastructure management</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent to-primary p-12 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h3>
              <p className="text-xl mb-8 text-white/90">
                Let our cloud experts design and implement the perfect cloud strategy for your business needs.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Cloud Migration
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}