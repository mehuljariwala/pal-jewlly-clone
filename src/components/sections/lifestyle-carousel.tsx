"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * LifestyleCarousel Component
 * Section: "FOR EVERY YOU" lifestyle slider featuring celebrity Shraddha Kapoor
 * showcased collection types: OFFICE WEAR, DAILY WEAR, PARTY WEAR
 */

const collections = [
  {
    title: 'OFFICE WEAR',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/look_2_sq1_b88a5567-9f8a-40ab-aa36-e6301c8bc8d8-18.webp',
    link: '/collections/office-wear',
  },
  {
    title: 'DAILY WEAR',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/look_2_sq1_b88a5567-9f8a-40ab-aa36-e6301c8bc8d8-18.webp', // Fallback to provided asset as specific daily/party unique URLs weren't in section assets list but the UI requires 3 distinct looks
    link: '/collections/daily-wear',
  },
  {
    title: 'PARTY WEAR',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/look_2_sq1_b88a5567-9f8a-40ab-aa36-e6301c8bc8d8-18.webp',
    link: '/collections/party-wear',
  },
];

const LifestyleCarousel: React.FC = () => {
  return (
    <section className="bg-white py-[60px] overflow-hidden">
      <div className="container mx-auto px-[15px]">
        {/* Section Header */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[14px] font-medium tracking-[0.1em] text-black uppercase mb-2">
            FOR EVERY YOU
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Main Grid for Desktop (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]">
            {collections.map((item, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden group/item ${index === 1 ? 'md:-translate-y-4' : ''}`}
                style={{ aspectRatio: '4/5' }}
              >
                <a href={item.link} className="block w-full h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-[40px]">
                    <div className="bg-white/0 backdrop-blur-0 inline-block">
                      <h3 className="text-black text-[16px] md:text-[18px] font-medium tracking-[0.05em] uppercase border-b border-black/80 pb-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Visible on hover or mobile) */}
          <button 
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-subtle z-10 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex hidden"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-black" />
          </button>
          
          <button 
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-subtle z-10 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex hidden"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-black" />
          </button>

          {/* Mobile Navigation Indicators (Visible only on mobile) */}
          <div className="flex md:hidden justify-center mt-6 gap-2">
            {collections.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-maroon' : 'bg-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Internal Custom Styles for consistent spacing and effects matching the brand direction */}
      <style jsx>{`
        .container {
          max-width: 1200px;
        }
        @media (max-width: 768px) {
          .mobile-scroll {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .mobile-scroll::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LifestyleCarousel;