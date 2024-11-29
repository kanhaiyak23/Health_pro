import React from 'react';
import { SuccessRateCircle } from './SuccessRate';
import image from '../../assets/cover.png'
export function ResultPage() {
  return (
    <div className="min-h-screen  bg-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center text-sm text-gray-300 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <a href="/" className="hover:text-white">IVF Success Rate Calculator</a>
          <span className="mx-2">/</span>
          <span className="text-white">Result</span>
        </nav>
        
        <div className=" rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 lg:p-12">
              <h1 className="text-3xl font-bold text-white mb-6">
                Your estimated IVF Success Rate is
              </h1>
              <div className="flex justify-center mb-8">
                <SuccessRateCircle percentage={64} cycles={1} />
                
              </div>
              <div className="space-y-4">
                <button className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors">
                  Schedule a Consultation
                </button>
                <button className="w-full border border-rose-600 text-rose-600 px-6 py-3 rounded-md hover:bg-rose-50 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
            
              <img
                src={image}
                alt="Happy couple"
                className="w-full h-full object-cover"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}