import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Goal() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Our Goal
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                A clear perception of the growing requirement of the Corporate World in the area of IT has enabled ABK Global Technologies to develop the present for our customers by increasing value helping to create a more convenient and prosperous society, and creating peace of mind through the establishment of reliable networks.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
