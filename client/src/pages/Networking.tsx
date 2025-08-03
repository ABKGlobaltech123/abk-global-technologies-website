import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Networking() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              IT Networking Solutions
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                ABK Global Technologies provides <strong>IT Networking Solutions</strong>, offering switches from <strong>Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear</strong>.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                We specialize in <strong>Wireless Solutions</strong> with <strong>Arista, Aruba, Cisco, and Ruckus</strong> for seamless connectivity.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Our <strong>Network Monitoring Solutions</strong> include <strong>WhatsUp Gold, SolarWinds, and NEC</strong> to ensure optimal performance.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                We deliver <strong>Structured Cabling Solutions</strong> from <strong>CommScope, Panduit, and Belden</strong> for reliable infrastructure.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Our solutions enhance network efficiency, security, and scalability for businesses of all sizes.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Partner with us for cutting-edge networking technologies tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
