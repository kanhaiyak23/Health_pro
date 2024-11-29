import React from 'react';
import { Home } from 'lucide-react';
import Link from './Link';
import { Image } from 'lucide-react';
import  image from '../../assets/ivf-pulse-logo.png';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* <Home className="h-8 w-8 text-rose-600" /> */}
            <span className="ml-2 text-xl font-semibold">
              <img src={image} height={132} width={132}/>
              </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#donor">Donor Programme</Link>
            <Link href="#fertility">Fertility Preservation</Link>
            <Link href="#treatments">Advanced Treatments</Link>
            <Link href="#testing">Infertility Treatments</Link>
            <Link href="#calculator">IVF Testing</Link>
            <Link href="#contact">About Us</Link>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors">
              Talk to Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}