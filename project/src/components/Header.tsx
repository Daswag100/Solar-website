import React, { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:opacity-90 transition-opacity cursor-pointer"
          >
            <h1 className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-orange-500' : 'text-white'}`}>
              Sherystore.com.ng
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#benefits" 
            className={`font-medium hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Benefits
          </a>
          <a 
            href="#gallery" 
            className={`font-medium hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Gallery
          </a>
          <a 
            href="#testimonials" 
            className={`font-medium hover:text-orange-500 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Testimonials
          </a>
          <a 
            href="#order" 
            className={`font-medium bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors`}
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <MenuIcon className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#gallery" 
              className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#order" 
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;