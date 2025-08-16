import React from 'react';
import { Mail } from 'lucide-react';

export default function MobileContactFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-lg z-50 md:hidden">
      <div className="flex items-center justify-center gap-2">
        <Mail className="w-5 h-5" />
        <span className="text-sm font-medium">Contact us:</span>
        <a 
          href="mailto:support@abkglobal.tech" 
          className="text-white hover:text-gray-200 underline font-semibold"
        >
          support@abkglobal.tech
        </a>
      </div>
    </div>
  );
}