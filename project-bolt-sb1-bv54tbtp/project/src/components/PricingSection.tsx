import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-900 text-white">
              <h2 className="text-3xl font-bold mb-6">Invest In Your Energy Freedom</h2>
              <p className="mb-6 text-gray-300">
                Stop wasting money on recurring energy costs. Make a one-time investment in this solar generator and enjoy years of free, reliable power.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Pays for itself in saved utility costs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Essential backup during power outages
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Includes solar charging capability
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center">
                <div className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  20% OFF – Limited Time
                </div>
                
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-xl">₦275,000</span>
                  <div className="text-4xl font-bold text-gray-800">₦205,000</div>
                </div>
                
                <div className="mb-8 text-gray-600">
                  <p>One-time payment. Free shipping nationwide.</p>
                  <p className="font-semibold mt-2">Pay on delivery available.</p>
                </div>
                
                <a
                  href="#order"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg px-6 py-4 transition-colors"
                >
                  Claim Your Discount
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;