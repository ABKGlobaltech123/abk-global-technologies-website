import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contact Information */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-white/80">support@abkglobal.tech</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-white/80">+91 8341051124</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-white/80">H501 Indis VB City Kompally, Hyderabad, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
