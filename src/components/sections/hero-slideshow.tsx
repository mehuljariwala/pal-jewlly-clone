import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * HeroSlideshow Component
 * 
 * Pixel-perfect clone of the main hero slideshow section.
 * Features full-width lifestyle banners with responsive handling.
 * Desktop: Desktop_2-4.webp
 * Mobile: App-3.webp
 */

const SLIDES = [
  {
    id: 'slide-1',
    desktopImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Desktop_2-4.webp',
    mobileImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/App-3.webp',
    link: '/collections/post-valentine-sale',
    alt: 'Palmonas Hero Banner'
  },
  // Adding duplicates as placeholders to simulate carousel behavior if more existed
  {
    id: 'slide-2',
    desktopImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Desktop_2-4.webp',
    mobileImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/App-3.webp',
    link: '/collections/post-valentine-sale',
    alt: 'Palmonas Hero Banner'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // 8 second interval as per data-flickityt4s-js
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section 
      id="shopify-section-template--20310120530177__slideshow" 
      className="shopify-section t4s-section t4s-section-all t4s-sec-slideshow overflow-hidden relative"
      style={{ minHeight: 'auto' }}
    >
      <div className="t4s-section-inner t4s-pr t4s-container-fluid p-0">
        <div className="t4s-slideshow t4s-pr t4s-oh relative group">
          
          {/* Slides Container */}
          <div className="relative flex whitespace-nowrap overflow-hidden">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 w-full transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? 'relative z-10' : 'absolute top-0 left-0 -z-10 opacity-0'
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  display: index === currentSlide || isTransitioning ? 'block' : 'none'
                }}
              >
                <div className="t4s-slideshow-item t4s-col-item t4s-slide relative">
                  <a 
                    href={slide.link} 
                    className="block w-full h-full relative"
                    aria-label={slide.alt}
                  >
                    {/* Desktop Image */}
                    <div className="hidden md:block w-full h-full">
                      <Image
                        src={slide.desktopImage}
                        alt={slide.alt}
                        width={1920}
                        height={800}
                        priority={index === 0}
                        className="w-full h-auto object-cover block"
                        sizes="100vw"
                      />
                    </div>
                    
                    {/* Mobile Image */}
                    <div className="md:hidden w-full h-full">
                      <Image
                        src={slide.mobileImage}
                        alt={slide.alt}
                        width={750}
                        height={1100}
                        priority={index === 0}
                        className="w-full h-auto object-cover block"
                        sizes="100vw"
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-[15px] top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center bg-white/80 md:bg-white text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[15px] top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center bg-white/80 md:bg-white text-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Progress Indicator (Hidden in provided layout data but common in clones) */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'bg-black w-4' : 'bg-black/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        .t4s-section-inner {
          width: 100%;
          max-width: 100%;
        }
        
        .t4s-slideshow-item {
          aspect-ratio: 15/22;
        }

        @media (min-width: 768px) {
          .t4s-slideshow-item {
            aspect-ratio: 192/80; /* Based on typical desktop banner proportions */
          }
        }

        /* Prevent flickity transition conflicts */
        .flickityt4s-enabled {
          position: relative;
        }
      `}</style>
    </section>
  );
}