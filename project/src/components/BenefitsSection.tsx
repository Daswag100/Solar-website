import React from 'react';
import { Zap, Droplet, Leaf, Sun } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]">
      <div className="flex items-center mb-4">
        <div className="bg-orange-100 text-orange-500 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "No Fuel Required",
      description: "Say goodbye to expensive fuel costs. This solar generator runs purely on the sun's energy - completely free and always available."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Works Without Prepaid Meter",
      description: "Power your essential devices without affecting your electricity bill. Perfect for areas with unreliable grid connections."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly and Silent",
      description: "No emissions, no noise pollution. Enjoy clean, quiet power that's better for you and the environment."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Ideal for Nigeria's Sunny Climate",
      description: "Take advantage of Nigeria's abundant sunshine to generate free electricity anywhere, anytime."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why You Need This</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          The 150W Portable Power Station provides reliable power when you need it most,
          without the ongoing costs of traditional energy sources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;