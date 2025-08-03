import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Clientele() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Our Clientele
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                With prestigious clients and repeated orders, our services and the quality of our products are among the best in the industry. At ABK Global Technologies, we focus on building strong customer relationships with every transaction.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mt-6">
                As a trusted technology service provider, we deliver end-to-end solutions through strategic development, consulting services, and expert execution by our highly trained and skilled engineers.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}