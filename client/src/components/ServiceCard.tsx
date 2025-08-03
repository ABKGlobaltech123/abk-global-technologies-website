import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

export default function ServiceCard({ icon, title, description, colorClass }: ServiceCardProps) {
  return (
    <div className="service-card bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-2xl shadow-lg border border-neutral-200 fade-in">
      <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
