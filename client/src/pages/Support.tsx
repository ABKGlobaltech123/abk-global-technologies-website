import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Support & Maintenance
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our technology partners offer proactive and predictive support, ensuring optimized IT investments and seamless operations. With advanced digital tools, we prevent issues before they escalate, maximizing uptime and efficiency. Our services include Workforce Solutions like Microsoft Office 365, Skype for Business, and Digital Workforce Portals, along with Digital Services such as Big Data, IoT, Cloud-Native Applications, and DevOps. Reach out for hassle-free, expert IT support.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
