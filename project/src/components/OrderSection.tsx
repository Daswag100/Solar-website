import React from 'react';
import { AlertTriangle, PhoneCall, MessageSquare } from 'lucide-react';

const OrderSection: React.FC = () => {
  return (
    <section id="order" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Your 150W Solar Power Station Today</h2>
            <p className="text-gray-600">Limited stock available with our special 20% discount offer</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-10 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-yellow-700 mb-2">Important Note</h3>
                <p className="text-yellow-700 font-medium">
                  IF YOU KNOW YOU ARE NOT READY OR DO NOT HAVE THE FUNDS AVAILABLE AT THE MOMENT, PLEASE DO NOT PLACE AN ORDER. THIS OFFER IS STRICTLY FOR SERIOUS MINDED INDIVIDUALS.
                </p>
                <p className="text-yellow-700 mt-2 font-medium">
                  ALSO, IT IS IMPORTANT TO WATCH THE VIDEO TO THE END TO AVOID ANY ISSUES WHEN THE PRODUCT IS DELIVERED TO YOU.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 py-6 px-8 text-white text-center">
              <h3 className="text-2xl font-bold">Complete Your Order</h3>
              <p className="mt-2 text-gray-300">Pay on Delivery Available</p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-8 text-center">
                Click the button below to fill out our order form and secure your 150W Portable Solar Power Station at the special discounted price.
              </p>

              <a
                href="https://docs.google.com/forms/u/3/d/1X-2n4SC-ZFSzBRHT4qlOU45zTpfeqzRbrwRl4Ye4gS8/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-6"
              >
                Fill Out Order Form
              </a>
              
              <div className="mt-8 border-t pt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Need Help Ordering?</h4>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a
                    href="https://wa.me/09167287002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp: 09167287002
                  </a>
                  <a
                    href="tel:09167287002"
                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Call: 09167287002
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;