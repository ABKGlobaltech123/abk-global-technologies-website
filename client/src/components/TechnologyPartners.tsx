import React from 'react';

const partnerLogos = [
  {
    name: 'Cisco',
    logoSrc: '/cisco-logo.png',
    className: 'w-full h-full object-contain'
  },
  {
    name: 'Palo Alto Networks',
    logoSrc: '/palo-alto-logo.png',
    className: 'w-full h-full object-contain'
  },
  {
    name: 'Dell EMC',
    logoSrc: '/dell-emc-logo.webp',
    className: 'w-full h-full object-contain'
  },
  {
    name: 'HP',
    logoSrc: '/hp-logo.jpg',
    className: 'w-full h-full object-contain'
  }
];

export default function TechnologyPartners() {
  return (
    <section id="partners" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Technology Partners</h2>
          <p className="text-xl text-neutral-600">We collaborate with industry-leading technology partners to deliver exceptional solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <div 
              key={partner.name} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 scale-in flex items-center justify-center min-h-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={partner.logoSrc} 
                alt={partner.name} 
                className={partner.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}