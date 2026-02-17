"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const POLICY_LINKS: { label: string; href: string }[] = [
  { label: 'Shipping & Delivery Policy', href: '/collections/best-seller' },
  { label: 'Return & Exchange Policy', href: '/collections/best-seller' },
  { label: 'Lifetime Warranty Policy', href: '/collections/best-seller' },
  { label: 'Lifetime BuyBack Policy', href: '/collections/best-seller' },
  { label: 'Payment Policy', href: '/collections/best-seller' },
  { label: 'Grievance Redressal Policy', href: '/collections/best-seller' },
];

const HELP_LINKS: { label: string; href: string }[] = [
  { label: "FAQ's", href: '/collections/best-seller' },
  { label: 'Contact Us', href: '/collections/best-seller' },
  { label: 'Terms of Service', href: '/collections/best-seller' },
  { label: 'Privacy Policy', href: '/collections/best-seller' },
  { label: 'Track Order', href: '/collections/best-seller' },
  { label: 'Return & Exchange', href: '/collections/best-seller' },
];

const ABOUT_LINKS: { label: string; href: string }[] = [
  { label: 'About Us', href: '/collections/best-seller' },
  { label: 'Blogs', href: '/collections/new-arrivals' },
  { label: 'Contact Us', href: '/collections/best-seller' },
  { label: 'Stores & Services', href: '/collections/best-seller' },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: 'https://www.facebook.com/palmmonas/', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/palmonas/', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/palmonas/', label: 'LinkedIn' },
  { Icon: Youtube, href: 'https://www.youtube.com/@palmonas', label: 'YouTube' },
];

const POPULAR_SEARCHES: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'For Women',
    links: [
      { label: 'Demi-Fine Jewellery', href: '/collections/shop-by-category' },
      { label: 'Rings For Women', href: '/collections/best-seller' },
      { label: 'Earrings For Women', href: '/collections/best-seller' },
      { label: 'Bracelet For Women', href: '/collections/best-seller' },
      { label: 'Pendants For Women', href: '/collections/best-seller' },
      { label: 'Necklaces For Women', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'For Men',
    links: [
      { label: 'Rings For Men', href: '/collections/gifts-for-him' },
      { label: 'Pendant For Men', href: '/collections/gifts-for-him' },
      { label: 'Chain For Men', href: '/collections/gifts-for-him' },
    ],
  },
  {
    heading: 'Mangalsutra',
    links: [
      { label: 'Gold Mangalsutra', href: '/collections/best-seller' },
      { label: 'Diamond Mangalsutra', href: '/collections/best-seller' },
      { label: 'Infinity Mangalsutra', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'Pendants',
    links: [
      { label: 'Gold Pendants', href: '/collections/fine-gold' },
      { label: 'Diamond Pendants', href: '/collections/fine-gold' },
      { label: 'Solitaire Pendants', href: '/collections/best-seller' },
      { label: 'Evil Eye Pendants', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'Bracelets',
    links: [
      { label: 'Gold Bracelets', href: '/collections/fine-gold' },
      { label: 'Diamond Bracelets', href: '/collections/best-seller' },
      { label: 'Pearl Bracelets', href: '/collections/best-seller' },
      { label: 'Evil Eye Bracelets', href: '/collections/best-seller' },
      { label: 'Chain Bracelets', href: '/collections/best-seller' },
      { label: 'Stone Bracelets', href: '/collections/best-seller' },
      { label: 'Cuff Bracelets', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'Necklace',
    links: [
      { label: 'Gold Necklace', href: '/collections/fine-gold' },
      { label: 'Diamond Necklace', href: '/collections/best-seller' },
      { label: 'Pearl Necklace', href: '/collections/best-seller' },
      { label: 'Necklaces For Women', href: '/collections/best-seller' },
      { label: 'Evil Eye Necklace', href: '/collections/best-seller' },
      { label: 'Name Necklace', href: '/collections/best-seller' },
      { label: 'Emerald Necklace', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'Rings',
    links: [
      { label: 'Diamond Rings', href: '/collections/best-seller' },
      { label: 'Gold Rings', href: '/collections/fine-gold' },
      { label: 'Silver Rings', href: '/collections/best-seller' },
      { label: 'Solitaire Rings', href: '/collections/best-seller' },
      { label: 'Gemstone Rings', href: '/collections/best-seller' },
      { label: 'Mens Rings', href: '/collections/gifts-for-him' },
      { label: 'Engagement Ring', href: '/collections/best-seller' },
      { label: 'Couple Ring', href: '/collections/best-seller' },
      { label: 'Wedding Ring', href: '/collections/best-seller' },
      { label: 'Statement Ring', href: '/collections/party-wear' },
      { label: 'Emerald Ring', href: '/collections/best-seller' },
    ],
  },
  {
    heading: 'Earrings',
    links: [
      { label: 'Gold Earrings', href: '/collections/fine-gold' },
      { label: 'Diamond Earrings', href: '/collections/best-seller' },
      { label: 'Solitaire Earrings', href: '/collections/best-seller' },
      { label: 'Hoop Earrings', href: '/collections/best-seller' },
      { label: 'Stud Earrings', href: '/collections/best-seller' },
      { label: 'Pearl Earrings', href: '/collections/best-seller' },
      { label: 'Emerald Earrings', href: '/collections/best-seller' },
      { label: 'Daily Wear Earrings', href: '/collections/daily-wear' },
      { label: 'Dangler Earrings', href: '/collections/best-seller' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#f1f1f1] pt-[50px] font-jost">
      <div className="container max-w-[1240px] px-[15px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[40px]">
          <div className="flex flex-col">
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Subscribe to receive exciting offers!</h3>
            <form onSubmit={handleNewsletterSubmit} className="relative mb-[30px] w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-[#eeeeee] py-[10px] pr-[40px] text-[14px] outline-none hover:border-[#000000] focus:border-[#000000] bg-transparent transition-colors"
                required
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#000000] hover:text-[#631b14] transition-colors">
                <Mail size={18} />
              </button>
            </form>
            {subscribed && (
              <p className="text-[12px] text-[#109b7c] font-medium mb-4">Thank you for subscribing!</p>
            )}
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

          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Policy</h3>
            <ul className="space-y-[12px]">
              {POLICY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">Help</h3>
            <ul className="space-y-[12px]">
              {HELP_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-[20px] tracking-[0.05em]">About Us</h3>
            <ul className="space-y-[12px]">
              {ABOUT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-[#000000] hover:text-[#631b14] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center py-[20px] border-b border-[#f1f1f1]">
          <div className="flex gap-[15px] mb-[30px]">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] flex items-center justify-center border border-[#eeeeee] rounded-full text-[#000000] hover:bg-[#631b14] hover:text-white hover:border-[#631b14] transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="bg-[#fff3f4] text-center p-[20px] max-w-[340px] w-full border border-[#fbd6d9]">
            <h4 className="text-[16px] font-semibold mb-[4px] tracking-[0.02em]">Download the PALMONAS App</h4>
            <p className="text-[12px] text-[#766b5b] mb-[15px]">( 5L+ Downloads | <span className="text-[#f59e0b]">4.4 &#9733;</span> )</p>
            <div className="flex gap-[10px] justify-center mb-[10px]">
              <a href="https://play.google.com/store/apps/details?id=com.palmonas.app" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Mobile_1-29.webp"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="rounded-[4px]"
                />
              </a>
              <a href="https://apps.apple.com/in/app/palmonas/id6504807889" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
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

        <div className="py-[40px] border-b border-[#f1f1f1]">
          <h3 className="text-[18px] font-semibold mb-[20px]">Popular Searches</h3>
          <div className="space-y-[15px] text-[12px] text-[#766b5b] leading-[1.8]">
            {POPULAR_SEARCHES.map((section) => (
              <React.Fragment key={section.heading}>
                <p>
                  <span className="font-semibold text-[#000000]">{section.heading}</span><br />
                  {section.links.map((link, idx) => (
                    <React.Fragment key={link.label}>
                      {idx > 0 && ' | '}
                      <Link href={link.href} className="hover:text-[#631b14] transition-colors">
                        {link.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </p>
                <div className="h-[1px] bg-[#f1f1f1] w-full" />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="py-[30px] flex flex-col items-center gap-[10px] text-[12px] text-[#766b5b]">
          <p>All Rights Reserved &copy; Palmonas</p>
          <Link href="/collections/best-seller" className="hover:text-[#631b14] transition-colors">Annual Returns 2023-24</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
