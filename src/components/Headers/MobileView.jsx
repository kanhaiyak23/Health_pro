import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { label: 'Donor Programme', href: '/' },
  { label: 'Fertility Preservation', href: '/' },
  { label: 'Advanced Treatments', href: '/' },
  { label: 'Infertility Treatments', href: '/' },
  { label: 'IVF Testing', href: '/' },
  { label: 'About Us', href: '/' },
];

const MobileMenu = ({ isMenuOpen, toggleMenu }) => (
  <AnimatePresence>
    {isMenuOpen && (
      <>
     
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />

       
        <motion.div
          initial={{ x: '-100%' }}  
          animate={{ x: 0 }}         
          exit={{ x: '-100%' }}     
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50"
        >
          <div className="flex flex-col h-full">
          
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

        
            <nav className="flex-1 overflow-y-auto py-4">
              <div className="px-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={toggleMenu}
                    className="
                      block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300
                      hover:bg-rose-50 dark:hover:bg-gray-800
                      transition-colors duration-200
                      font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </nav>

            <div className="p-4 border-t dark:border-gray-800">
              <button
                onClick={toggleMenu}
                className="w-full bg-[#D75555] text-white px-6 py-3 rounded-lg
                         hover:bg-rose-700 active:bg-rose-800
                         transition-colors duration-200
                         font-semibold shadow-sm
                         flex items-center justify-center space-x-2"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default MobileMenu;
