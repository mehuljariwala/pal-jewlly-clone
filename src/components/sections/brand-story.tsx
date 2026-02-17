import React from 'react';
import Image from 'next/image';

/**
 * BrandStory Section
 * Includes two parts:
 * 1. "BECAUSE YOU DESERVE TO SHINE" mission statement
 * 2. "FROM SHRADDHA, FOR YOU" featured testimonial/quote with Shraddha Kapoor image
 */
const BrandStory: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* Part 1: Because You Deserve To Shine */}
      <div className="py-[60px] md:py-[80px] px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.1em] mb-8 text-black uppercase">
            BECAUSE YOU DESERVE TO SHINE
          </h2>
          
          {/* Visual Divider / Spacer based on screenshots (the grey block appears to be a placeholder or specific design choice) */}
          <div className="w-full h-[400px] md:h-[600px] bg-[#a7a8a3] mb-[60px] md:mb-[80px]"></div>

          <div className="max-w-[900px] mx-auto">
            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[#000000] font-normal px-4">
              At Palmonas, we create jewellery that’s made to be worn — every day and on the days that matter most. 
              It’s premium in quality, thoughtful in design, and priced so it feels right. We don’t believe in saving 
              the good stuff for later. Our pieces are made to move with you, not sit in a box. 
              <span className="font-semibold"> Because with Palmonas, the sparkle is always yours to keep.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: From Shraddha, For You */}
      <div className="pb-[80px] md:pb-[100px] px-4">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.1em] text-black uppercase">
            FROM SHRADDHA, FOR YOU
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Artboard14_2_5d4bfe2c-a7cd-4844-be10-2cb37cd8de6c-13.webp"
              alt="Shraddha Kapoor for Palmonas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Quote Side */}
          <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-0">
            <blockquote className="relative">
              <p className="text-[15px] md:text-[16px] leading-[1.8] text-black italic md:not-italic font-normal max-w-[500px] mx-auto md:mx-0">
                &quot;A lot of us find real gold too expensive — and we don’t want our jewellery locked away. 
                At the same time, imitation jewellery fades, breaks, and doesn’t last. So at Palmonas, 
                we’re building something in the middle — a new category called{' '}
                <span className="font-semibold">Demifine</span> : 18k thick gold plating on premium metals, 
                so everyone can enjoy jewellery that’s trendy, lasting, and high on quality.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;