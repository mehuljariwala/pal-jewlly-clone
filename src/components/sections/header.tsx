import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import HeaderCartBadge from '@/components/header-cart-badge';

const Header = () => {
  return (
    <div className="w-full bg-white border-b border-[#eeeeee]">
      {/* Announcement Bar */}
      <div className="bg-[#631b14] py-[10px] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-[12px] font-semibold tracking-wider uppercase text-center flex items-center gap-2">
              FLAT 50% OFF | Use Code - <span className="text-[#ff0000] underline font-bold">NOTLATE</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="container mx-auto px-[15px] lg:px-[30px] flex items-center justify-between py-[15px] lg:py-[20px] gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-[145px] lg:w-[200px]">
          <a href="/" className="block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/Palmonas_Logo_Open_File-02-1.webp"
              alt="PALMONAS"
              width={200}
              height={71}
              priority
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Search and Pincode Section */}
        <div className="hidden lg:flex flex-1 max-w-[600px] items-center bg-[#fafafa] rounded-none border border-[#eeeeee] h-[45px]">
          {/* Category Dropdown */}
          <div className="px-4 border-r border-[#eeeeee] hidden xl:flex items-center">
            <select className="bg-transparent text-[13px] font-medium outline-none cursor-pointer pr-2">
              <option>All Categories</option>
              <option>Necklaces</option>
              <option>Earrings</option>
              <option>Bracelets</option>
              <option>Rings</option>
              <option>Mangalsutra</option>
            </select>
          </div>

          {/* Pincode Trigger */}
          <div className="flex items-center px-4 gap-2 border-r border-[#eeeeee] whitespace-nowrap cursor-pointer hover:opacity-80">
            <MapPin className="w-4 h-4 text-brand-maroon" />
            <div className="flex items-center">
              <span className="text-[12px] font-medium text-[#766b5b]">Update Delivery Pincode</span>
              <ChevronDown className="w-3 h-3 ml-1 text-[#766b5b]" />
            </div>
          </div>

          {/* Search Input */}
          <div className="flex-1 flex items-center px-4">
            <input
              type="text"
              placeholder="Search term"
              className="w-full bg-transparent text-[13px] outline-none"
            />
            <button className="p-1 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        <HeaderCartBadge />
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:block border-t border-[#eeeeee] py-[12px]">
        <div className="container mx-auto px-[15px]">
          <ul className="flex justify-center items-center gap-[30px]">
            <li>
              <Link href="/collections/new-arrivals" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">New Arrivals</Link>
            </li>
            <li>
              <Link href="/collections/best-seller" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">Best Seller</Link>
            </li>
            <li>
              <Link href="/collections/best-seller" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">Fine Silver</Link>
            </li>
            <li className="relative">
              <Link href="/collections/fine-gold" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">
                9KT Fine Gold
                <span className="absolute -top-[15px] right-[-15px] bg-[#c9bca9] text-white text-[9px] px-1 py-0.5 font-bold rounded-sm">LUXE</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/collections/new-arrivals" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">
                Emily In Paris
                <span className="absolute -top-[15px] right-[-25px] bg-[#631b14] text-white text-[9px] px-1 py-0.5 font-bold rounded-sm whitespace-nowrap">À LA MODE</span>
              </Link>
            </li>
            <li>
              <Link href="/collections/best-seller" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">Shraddha&apos;s Favourite</Link>
            </li>
            <li>
              <Link href="/collections/shop-by-category" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">Demi-fine Jewellery</Link>
            </li>
            <li>
              <Link href="/collections/gifts-for-her" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">Gifting</Link>
            </li>
            <li>
              <Link href="/collections/best-seller" className="text-[13px] font-medium uppercase tracking-wider hover:text-brand-maroon transition-colors">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;