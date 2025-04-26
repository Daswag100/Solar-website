import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  days: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ days }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: days,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = hours;
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 my-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-gray-800 text-white text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
            {value < 10 ? `0${value}` : value}
          </div>
          <span className="text-xs mt-1 font-medium text-gray-600 capitalize">{label}</span>
        </div>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Say Goodbye to Soaring Energy Bills and Blackouts — Meet the 150W Portable Solar Power Station!
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Imagine living without the fear of sudden blackouts, skyrocketing fuel prices, or ever-increasing electricity bills. The 150W Portable Solar Power Station puts reliable, cost-free energy right at your fingertips, helping you save money and stay connected — every single day.
            </p>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Why Spend More When You Can Save? As fuel costs rise and prepaid meters drain your wallet, this solar generator offers a smarter, greener alternative. It's built to power your essential devices during outages — without burning a single drop of fuel or touching your electricity meter.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium">
              Make the Switch Today — and Start Saving Instantly!
            </p>
          </div>
          
          <div>
            <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">Limited Time Offer Ends In:</p>
            <CountdownTimer days={0} />
          </div>
          
          <a 
            href="#order" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 mt-8 shadow-lg"
          >
            Order Now – 20% Off
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;