import React, { useState } from 'react';
import Link from './Link';
import MobileMenu from './MobileView';  
import image from '../../assets/ivf-pulse-logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-semibold">
              <img src={image} height={132} width={132} alt="Logo" />
            </span>
          </div>
          
          {/* Hamburger icon for mobile view */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

         
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#donor">Donor Programme</Link>
            <Link href="#fertility">Fertility Preservation</Link>
            <Link href="#treatments">Advanced Treatments</Link>
            <Link href="#testing">Infertility Treatments</Link>
            <Link href="#calculator">IVF Testing</Link>
            <Link href="#contact">About Us</Link>
            <button className="bg-[#D75555] text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors">
              Talk to Us
            </button>
          </div>
        </div>
      </nav>

    
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
