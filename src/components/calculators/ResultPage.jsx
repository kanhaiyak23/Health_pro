import React from 'react';
import { SuccessRateCircle } from './SuccessRate';
import image from '../../assets/cover.png'
export function ResultPage() {
  return (
    <div className="min-h-screen  bg-[#303030] overflow-hidden w-screen">
      <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center text-sm text-gray-300 mb-8">
          <a href="/" className="hover:text-white">Home</a>
          <span className="mx-2">/</span>
          <a href="/" className="hover:text-white">IVF Success Rate Calculator</a>
          <span className="mx-2">/</span>
          <span className="text-white">Result</span>
        </nav>
        
        <div className="  overflow-hidden">
          <div className="md:flex max-w-full">
            <div className="md:w-1/2 p-8 lg:p-12">
              <h1 className="md:text-3xl font-bold text-white mb-10 whitespace-nowrap">
                Your estimated IVF Success Rate is
              </h1>
              <div className="flex justify-center mb-8">
                <SuccessRateCircle percentage={64} cycles={1} />
                
              </div>
              
            </div>
            <div className="md:w-full   ">
            
              <img
                src={image}
                alt="Happy couple"
           
                
                className="max-w-full  object-cover overflow-ellipsis"
              />
             <div className="space-y-4 mt-3 sm:hidden">
                <button className="w-full bg-[#D75555] text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors">
                Start private consultation  →
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}