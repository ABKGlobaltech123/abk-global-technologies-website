import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mission() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Our Mission
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                ABK Global Technologies came into the competing Information Technology services industry with a mission to provide most efficient and economically friendly solutions to all our customers. Leon today has firm foothold as an emerging company in the field of system integration with the primary goal of offering infrastructure solutions, which include IT Consulting services and IT Infrastructure services.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
