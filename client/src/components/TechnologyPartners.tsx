import React from 'react';

const partnerLogos = [
  {
    name: 'Cisco',
    logo: (
      <svg viewBox="0 0 200 80" className="w-24 h-12">
        <g fill="#00bceb">
          <rect x="10" y="30" width="4" height="20"/>
          <rect x="16" y="26" width="4" height="28"/>
          <rect x="22" y="22" width="4" height="36"/>
          <rect x="28" y="18" width="4" height="44"/>
          <rect x="34" y="22" width="4" height="36"/>
          <rect x="40" y="26" width="4" height="28"/>
          <rect x="46" y="30" width="4" height="20"/>
        </g>
        <text x="60" y="45" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#00bceb">cisco</text>
      </svg>
    )
  },
  {
    name: 'Dell EMC',
    logo: (
      <svg viewBox="0 0 200 80" className="w-28 h-12">
        <text x="10" y="30" fontSize="18" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#007db8">DELL</text>
        <text x="10" y="55" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#007db8">EMC</text>
        <circle cx="170" cy="40" r="15" fill="#007db8"/>
      </svg>
    )
  },
  {
    name: 'HP',
    logo: (
      <svg viewBox="0 0 200 80" className="w-20 h-12">
        <circle cx="100" cy="40" r="30" fill="#0073e6"/>
        <text x="85" y="50" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold" fill="white">hp</text>
      </svg>
    )
  },
  {
    name: 'IBM',
    logo: (
      <svg viewBox="0 0 200 80" className="w-24 h-12">
        <g fill="#006bb6">
          <rect x="20" y="20" width="160" height="8"/>
          <rect x="20" y="32" width="160" height="8"/>
          <rect x="20" y="44" width="160" height="8"/>
          <rect x="20" y="56" width="160" height="8"/>
          <rect x="40" y="20" width="4" height="48"/>
          <rect x="80" y="20" width="4" height="48"/>
          <rect x="120" y="20" width="4" height="48"/>
          <rect x="160" y="20" width="4" height="48"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    logo: (
      <svg viewBox="0 0 200 80" className="w-32 h-12">
        <rect x="20" y="20" width="18" height="18" fill="#f25022"/>
        <rect x="42" y="20" width="18" height="18" fill="#7fba00"/>
        <rect x="20" y="42" width="18" height="18" fill="#00a4ef"/>
        <rect x="42" y="42" width="18" height="18" fill="#ffb900"/>
        <text x="70" y="45" fontSize="16" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="400" fill="#737373">Microsoft</text>
      </svg>
    )
  },
  {
    name: 'Palo Alto Networks',
    logo: (
      <svg viewBox="0 0 200 80" className="w-36 h-12">
        <circle cx="30" cy="40" r="20" fill="#fa582d"/>
        <circle cx="30" cy="40" r="12" fill="white"/>
        <circle cx="30" cy="40" r="6" fill="#fa582d"/>
        <text x="60" y="35" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#333">PALO ALTO</text>
        <text x="60" y="50" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#333">NETWORKS</text>
      </svg>
    )
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <div 
              key={partner.name} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 scale-in flex items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}