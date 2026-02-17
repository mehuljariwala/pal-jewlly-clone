import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#f1f1f1] pt-[50px] font-jost">
      <div className="container max-w-[1240px] px-[15px] mx-auto">
        {/* Top Section: Newsletter and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[40px]">
          {/* Newsletter Column */}
          <div className="flex flex-col">
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Subscribe to receive exciting offers!</h3>
            <div className="relative mb-[30px] w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-b border-[#eeeeee] py-[10px] pr-[40px] text-[14px] outline-none hover:border-[#000000] focus:border-[#000000] bg-transparent transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#000000]">
                <Mail size={18} />
              </button>
            </div>
            <div className="mt-auto">
              <h4 className="text-[13px] font-bold mb-[10px] tracking-[0.05em]">DEMIFINE FASHION PVT LTD</h4>
              <div className="flex items-start gap-2 text-[13px] text-[#766b5b] leading-[1.6]">
                <MapPin size={16} className="mt-1 shrink-0" />
                <p>
                  Registered Address : Office No 501/502/503/504/505(A) 5th Floor, Verdant 84, Plot 1, Lane Z, Koregaon Park Annexe, Mundhwa, Pune, Maharashtra 411036.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Column */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Policy</h3>
            <ul className="space-y-[12px]">
              {['Shipping & Delivery Policy', 'Return & Exchange Policy', 'Lifetime Warranty Policy', 'Lifetime BuyBack Policy', 'Payment Policy', 'Grievance Redressal Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Help</h3>
            <ul className="space-y-[12px]">
              {["FAQ's", 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Track Order', 'Return & Exchange'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">About Us</h3>
            <ul className="space-y-[12px]">
              {['About Us', 'Blogs', 'Contact Us', 'Stores & Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Social and App Download */}
        <div className="flex flex-col items-center py-[20px] border-b border-[#f1f1f1]">
          {/* Social Icons */}
          <div className="flex gap-[15px] mb-[30px]">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Youtube, href: '#' }
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-[36px] h-[36px] flex items-center justify-center border border-[#eeeeee] rounded-full text-[#000000] hover:bg-[#631b14] hover:text-white hover:border-[#631b14] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* App Download Box */}
          <div className="bg-[#fff3f4] text-center p-[20px] max-w-[340px] w-full border border-[#fbd6d9]">
            <h4 className="text-[16px] font-semibold mb-[4px] tracking-[0.02em]">Download the PALMONAS App</h4>
            <p className="text-[12px] text-[#766b5b] mb-[15px]">( 5L+ Downloads | <span className="text-[#f59e0b]">4.4 ★</span> )</p>
            <div className="flex gap-[10px] justify-center mb-[10px]">
              <a href="#" className="transition-transform active:scale-95">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Mobile_1-29.webp" 
                  alt="Get it on Google Play" 
                  width={140} 
                  height={42} 
                  className="rounded-[4px]"
                />
              </a>
              <a href="#" className="transition-transform active:scale-95">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Desktop_W-30.webp" 
                  alt="Download on the App Store" 
                  width={140} 
                  height={42} 
                  className="rounded-[4px]"
                />
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#631b14]">Get Exclusive Offers On App</p>
          </div>
        </div>

        {/* Bottom Section: SEO Links / Popular Searches */}
        <div className="py-[40px] border-b border-[#f1f1f1]">
          <h3 className="text-[18px] font-semibold mb-[20px]">Popular Searches</h3>
          <div className="space-y-[15px] text-[12px] text-[#766b5b] leading-[1.8]">
            <p>
              <span className="font-semibold text-[#000000]">For Women</span><br />
              Demi-Fine Jewellery | Rings For Women | Earrings For Women | Bracelet For Women | Pendants For Women | Necklaces For Women
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">For Men</span><br />
              Rings For Men | Pendant For Men | Chain For Men
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Mangalsutra</span><br />
              Gold Mangalsutra | Diamond Mangalsutra | Infinity Mangalsutra
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Pendants</span><br />
              Gold Pendants | Diamond Pendants | Solitaire Pendants | Evil Eye Pendants
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Bracelets</span><br />
              Gold Bracelets | Diamond Bracelets | Pearl Bracelets | Evil Eye Bracelets | Chain Bracelets | Stone Bracelets | Cuff Bracelets
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Necklace</span><br />
              Gold Necklace | Diamond Necklace | Pearl Necklace | Necklaces For Women | Evil Eye Necklace | Name Necklace | Emerald Necklace
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Rings</span><br />
              Diamond Rings | Gold Rings | Silver Rings | Solitaire Rings | Gemstone Rings | Mens Rings | Engagement Ring | Couple Ring | Wedding Ring | Statement Ring | Emerald Ring
            </p>
            <div className="h-[1px] bg-[#f1f1f1] w-full" />
            <p>
              <span className="font-semibold text-[#000000]">Earrings</span><br />
              Gold Earrings | Diamond Earrings | Solitaire Earrings | Hoop Earrings | Stud Earrings | Pearl Earrings | Emerald Earrings | Daily Wear Earrings | Dangler Earrings
            </p>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="py-[30px] flex flex-col items-center gap-[10px] text-[12px] text-[#766b5b]">
          <p>All Rights Reserved © Palmonas</p>
          <a href="#" className="hover:text-[#631b14] transition-colors">Annual Returns 2023-24</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;