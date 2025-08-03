import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Backup() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Backup & Archival Solutions
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                ABK Global Technologies offers IT Networking Solutions, including Switches from Cisco, Arista, Ruckus, Dell EMC, Brocade, and Netgear, and Wireless Solutions from Arista, Aruba, Cisco, and Ruckus. We also provide Network Monitoring Solutions like WhatsUp Gold, SolarWinds, and NEC, along with Structured Cabling from CommScope, Panduit, Belden, and Molex for reliable connectivity.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}