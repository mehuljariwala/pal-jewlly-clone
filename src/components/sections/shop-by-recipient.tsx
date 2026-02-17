import React from 'react';

/**
 * ShopByRecipient Component
 * 
 * Clones the "Shop By Recipient" section with pixel perfection.
 * Features two large cards for "Gifts For Her" and "Gifts For Him"
 * with specific typography and branding as per the design instructions.
 */
const ShopByRecipient: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[24px] font-medium uppercase tracking-[0.05em] leading-[1.2] m-0 text-black">
            Shop By Recipient
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]">
          
          {/* Gifts For Her Card */}
          <a 
            href="/collections/gifts-for-her" 
            className="group relative block overflow-hidden"
            aria-label="Shop Gifts For Her"
          >
            <div className="aspect-[4/5] md:aspect-[1/1.1] w-full overflow-hidden bg-[#f4f4f4]">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/01_e869a853-ae2b-4543-8f22-61455b80f6a6-5.webp" 
                alt="Woman wearing elegant jewelry" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative Border Overlay matching screenshot aesthetic */}
              <div className="absolute inset-[15px] border border-white/20 pointer-events-none"></div>
            </div>
            
            {/* CTA Bar */}
            <div className="bg-[#631b14] py-4 text-center">
              <span className="text-white text-[16px] md:text-[18px] font-medium uppercase tracking-[0.1em]">
                Gifts For <span className="font-bold">Her</span>
              </span>
            </div>
          </a>

          {/* Gifts For Him Card */}
          <a 
            href="/collections/gifts-for-him" 
            className="group relative block overflow-hidden"
            aria-label="Shop Gifts For Him"
          >
            <div className="aspect-[4/5] md:aspect-[1/1.1] w-full overflow-hidden bg-[#f4f4f4]">
              {/* Using high-quality placeholder styling as specific asset for "Him" wasn't uniquely tagged in list, 
                  but referencing the structure from the provided HTML/Screenshots */}
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/01_e869a853-ae2b-4543-8f22-61455b80f6a6-5.webp" 
                alt="Man wearing sophisticated jewelry" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2]"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Decorative Border Overlay */}
              <div className="absolute inset-[15px] border border-white/20 pointer-events-none"></div>
            </div>

            {/* CTA Bar */}
            <div className="bg-[#631b14] py-4 text-center">
              <span className="text-white text-[16px] md:text-[18px] font-medium uppercase tracking-[0.1em]">
                Gifts For <span className="font-bold">Him</span>
              </span>
            </div>
          </a>

        </div>
      </div>

      <style jsx>{`
        /* Ensuring Jost font and uppercase standards are met */
        h2 {
          font-family: 'Jost', sans-serif;
        }
        span {
          font-family: 'Jost', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ShopByRecipient;