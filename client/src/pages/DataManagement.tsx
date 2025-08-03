import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataManagement() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Data Management Solutions
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                ABK Global Technologies provides storage and server solutions, including NAS from Dell EMC, HP, Netgear, and QNAP, and SAN from Dell EMC, IBM, Pure Storage, NetApp, and HP. We also offer Unified Storage from Dell EMC, NetApp, IBM, and HP, Tape Library & Auto Loaders from Dell EMC, IBM, and HP, and Enterprise Servers from Dell EMC, HP, Lenovo, and NEC.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
