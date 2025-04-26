import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Chiamaka U.",
      location: "Abuja",
      text: "This power station saved me during the last blackout. No noise, no fumes, just peace of mind. It charges fast and powers my Wi-Fi and laptop all day!"
    },
    {
      name: "Tunde Adebayo",
      location: "Lagos",
      text: "I was tired of fueling my generator every day. Since I got this solar generator, I haven't bought fuel once. It's perfect for my mini importation business!"
    },
    {
      name: "Ijeoma Okoro",
      location: "Enugu",
      text: "Very reliable. I use it to power my sewing machine and fan during the day. It's small but powerful. Customer service was also top-notch!"
    },
    {
      name: "Musa Abdullahi",
      location: "Kaduna",
      text: "The best investment I've made this year. My family uses it every evening for lights, phones, and the TV. It's solar powered, so no extra cost!"
    },
    {
      name: "Fatima B.",
      location: "Ibadan",
      text: "I bought one for my salon, and it has helped me stay in business even when there's no light. I'm planning to buy another one for home use."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAnimating]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const navigateToSlide = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">What Nigerians Are Saying</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Read what our satisfied customers have to say about their experience with the 150W Portable Solar Power Station.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden mb-10">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 text-orange-500 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonials[activeIndex].text}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transform -translate-x-1/2 transition-all hover:scale-110"
              disabled={isAnimating}
            >
              ←
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transform translate-x-1/2 transition-all hover:scale-110"
              disabled={isAnimating}
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;