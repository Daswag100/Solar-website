import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Sherystore.com.ng</h3>
            <p className="text-gray-400 mb-4">
              Reliable, eco-friendly portable power solution for all your energy needs. Say goodbye to blackouts and high electricity bills.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Product Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-white transition-colors">Order Now</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <span>09167287002</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <span>support@sherystore.com.ng</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sherystore.com.ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;