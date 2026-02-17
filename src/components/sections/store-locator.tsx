"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * VisitOurStores Section
 * 
 * Clones the "VISIT OUR STORES" section with pixel-perfect accuracy.
 * Features a large photograph of the Palmonas storefront and descriptive address text.
 * CSS and Layout properties are derived from computed styles and high-level design tokens.
 */

const StoreLocator: React.FC = () => {
  const storeImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/DSC08245-14.jpg";

  return (
    <section className="t4s-section section-padding bg-white overflow-hidden">
      <div className="container px-[15px] mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <div className="t4s-section-title text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.1em] text-black uppercase font-jost">
            visit our stores
          </h2>
        </div>

        {/* Store Content Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-[30px] md:gap-[60px] max-w-[1100px] mx-auto">
          
          {/* Store Image Container */}
          <div className="w-full md:w-[60%] relative">
            <div className="t4s-store-image relative aspect-[4/3] md:aspect-[3/2] overflow-hidden">
              <Image
                src={storeImageUrl}
                alt="Palmonas Storefront Koregaon Park"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Store Details Container */}
          <div className="w-full md:w-[40%] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-[22px] md:text-[26px] font-bold tracking-[0.05em] text-black uppercase mb-[15px] md:mb-[20px] font-jost leading-tight">
              KOREGAON PARK, PUNE
            </h3>
            
            <div className="text-[14px] md:text-[16px] leading-[1.8] text-black font-jost max-w-[320px] mx-auto md:mx-0">
              <p>
                Winterberry Purple, society, Lane No. 8, Ashok Chakra Society, Meera Nagar, Koregaon Park, Pune, Maharashtra 411001
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-[40px] md:mt-[60px]">
          <a 
            href="/pages/store-locator" 
            className="inline-flex items-center justify-center border border-black px-[25px] py-[12px] text-[12px] md:text-[13px] font-medium tracking-[0.15em] text-black hover:bg-black hover:text-white transition-all duration-300 uppercase font-jost"
          >
            FIND YOUR NEAREST STORE
            <ArrowRight className="ml-[10px] w-[14px] h-[14px]" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .section-padding {
          padding-top: 60px;
          padding-bottom: 60px;
        }
        @media (max-width: 768px) {
          .section-padding {
            padding-top: 40px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default StoreLocator;