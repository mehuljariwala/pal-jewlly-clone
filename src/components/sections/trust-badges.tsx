import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, ShieldCheck, Diamond, Sparkles } from "lucide-react";

const badges = [
  {
    title: "SKIN SAFE",
    icon: <div className="t4s-trust-icon-wrap flex items-center justify-center mb-4"><div className="relative w-12 h-12 flex items-center justify-center bg-transparent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-black"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path><path d="M12 11c1.5-1.5 3-1.5 3 0s-1.5 3-3 4-3-2.5-3-4 1.5-1.5 3 0z" className="opacity-40"></path></svg><span className="absolute -top-1 -right-1 text-lg">😊</span></div></div>,
    description: "Our jewelry is hypoallergenic and skin-safe, crafted with care to ensure comfort for all skin types. Enjoy beautiful, irritation-free wear every day, knowing each piece is designed with your well-being in mind."
  },
  {
    title: "18K GOLD VERMEIL",
    icon: <div className="t4s-trust-icon-wrap flex items-center justify-center mb-4"><div className="relative w-12 h-12 flex items-center justify-center"><ShieldCheck className="w-10 h-10 text-black stroke-[1.25]" /></div></div>,
    description: "Our jewelry is crafted from premium metals like surgical steel, sterling silver, and thick 18k gold plating, ensuring durability and lasting shine. Experience luxury and quality with every piece, designed to stand the test of time."
  },
  {
    title: "AUTHENTIC DIAMONDS",
    icon: <div className="t4s-trust-icon-wrap flex items-center justify-center mb-4"><div className="relative w-12 h-12 flex items-center justify-center"><Diamond className="w-10 h-10 text-black stroke-[1.25]" /></div></div>,
    description: "Our lab-grown diamonds are SGL Certified, ensuring the highest standards of quality and authenticity same like natural diamonds. Each diamond undergoes rigorous testing to guarantee its brilliance and ethical origins. Shine with confidence in every sparkly moment."
  }
];

const TrustBadges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % badges.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + badges.length) % badges.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="bg-[#f0f0f0] py-[60px] md:py-[80px]">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <h3 className="text-center text-[18px] md:text-[20px] font-medium tracking-[0.2em] mb-12 uppercase">
          SHOP WITH CONFIDENCE
        </h3>

        <div className="relative max-w-[1000px] mx-auto min-h-[320px] md:min-h-[280px]">
          {/* Slider Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-10px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-opacity hover:opacity-80"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[-10px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-opacity hover:opacity-80"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Content Area */}
          <div className="overflow-hidden h-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4 md:px-12"
                >
                  {badge.icon}
                  <h4 className="text-[15px] font-semibold tracking-[0.1em] mb-4 uppercase">
                    {badge.title}
                  </h4>
                  <p className="text-[14px] leading-[1.8] text-[#333] max-w-[800px] font-jost">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {badges.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-black w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
        .font-jost {
          font-family: 'Jost', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default TrustBadges;