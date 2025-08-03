import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cloud() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Cloud Solutions
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-600 leading-relaxed">
                We provide cloud services across AWS, Azure, Google Cloud, and OpenStack. Our Cloud VDI solutions include AWS Workspaces, ensuring seamless virtual desktop experiences. For email, we offer Microsoft Office 365, G-Suite, and AWS WorkMail to enhance communication and collaboration.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}