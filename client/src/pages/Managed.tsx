import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Managed() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Managed Services
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                ABK Global Technologies simplifies IT support by consolidating multiple vendor contracts into one expert-driven service. Our proactive onsite and remote support enhances availability, speeds up issue resolution, and minimizes downtime across your IT environment.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
