import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGallery from './components/ProductGallery';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "150W Portable Solar Power Station | Reliable Energy Solution";
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="font-[Poppins] antialiased">
      <Header />
      <main>
        <HeroSection />
        <ProductGallery />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;