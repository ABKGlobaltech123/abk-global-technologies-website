import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ITSecurity() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              IT Security Solutions
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                ABK Global Technologies offers IT security solutions, including Endpoint Security with TrendMicro, Kaspersky, McAfee, and Sophos, and Encryption with TrendMicro, WinMagic, and McAfee. Our Gateway Level Security features Palo Alto, Fortinet, SonicWALL, Checkpoint, Sophos, and Cisco for robust network protection.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
