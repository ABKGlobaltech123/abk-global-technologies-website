import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Consulting() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Consulting Services
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our Consulting Services cover advanced Virtualization, Cloud Computing, and Hyper-Converged Infrastructure to optimize IT performance. We ensure Backups & Disaster Recovery along with On-Premise & Cloud Storage for data security. Our solutions enhance Cybersecurity measures to safeguard businesses. We also specialize in Internet of Things (IoT) integration for smart connectivity.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}