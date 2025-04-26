import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const images = [
    "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    "https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg",
    "https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Product Features & Specifications
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the powerful features and multiple connectivity options of our 150W Portable Solar Power Station
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
                } flex items-center justify-center bg-white hover:scale-105 transition-transform duration-300`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow z-20 disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow z-20 disabled:opacity-50"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all shadow-sm ${
                  index === currentSlide ? "bg-orange-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="text-lg">Multiple outputs including AC, USB, and DC ports to power all your essential devices</p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Watch Our Product in Action</h2>
          <p className="text-center text-gray-600 mb-8">See how the 150W Portable Solar Power Station works in real life.</p>
          <div className="relative group max-w-md mx-auto">
            <a
              href="https://youtube.com/shorts/Thp5sIo3t2U"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-xl shadow-lg overflow-hidden aspect-[4/3] bg-gray-100"
            >
              <img
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
                alt="Product Demo Video Thumbnail"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/20 transition-colors">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;