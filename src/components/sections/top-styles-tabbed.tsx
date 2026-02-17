"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  category: string;
  badge?: string;
}

const CATEGORIES = [
  'ALL',
  'NECKLACES',
  'BRACELETS',
  'EARRINGS',
  'RINGS',
  'MENS',
  'MANGALSUTRA',
];

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Hearts All Over Bracelet',
    price: 2229,
    originalPrice: 3184,
    discount: '(30%)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg',
    category: 'BRACELETS',
    badge: 'Buy 1 Get 1',
  },
  {
    id: 2,
    title: 'Crystal Love Bangle Bracelet',
    price: 2659,
    originalPrice: 3799,
    discount: '(30%)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg',
    category: 'BRACELETS',
    badge: 'Buy 1 Get 1',
  },
  {
    id: 3,
    title: 'Athena Solitaire Hoop Earrings',
    price: 2258,
    originalPrice: 3226,
    discount: '(30%)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PM-EARRINGS-032_3_0040-7.jpg',
    category: 'EARRINGS',
    badge: 'Buy 1 Get 1',
  },
  {
    id: 4,
    title: 'Diamond Affair Bracelet',
    price: 2553,
    originalPrice: 3647,
    discount: '(30%)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/NK-40_1_0040-9.jpg',
    category: 'BRACELETS',
    badge: 'Buy 1 Get 1',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full aspect-square overflow-hidden mb-[15px]">
        {product.badge && (
          <div className="absolute top-0 left-0 z-10 bg-[#f4e6e4] text-[#631b14] text-[10px] font-semibold px-2 py-1 uppercase tracking-wider">
            {product.badge}
          </div>
        )}
        
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <button 
          className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#eeeeee] hover:bg-black hover:text-white transition-colors duration-300"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </button>

        <button className="absolute bottom-3 right-3 bg-white text-black text-[10px] font-semibold px-4 py-2 uppercase tracking-tight hover:bg-black hover:text-white transition-colors duration-300 shadow-sm border border-[#eeeeee]">
          ADD TO BAG
        </button>
      </div>
      
      <div className="text-center w-full px-2">
        <h3 className="text-[13px] font-medium text-black mb-1 line-clamp-1">
          {product.title}
        </h3>
        <div className="flex items-center justify-center gap-1.5 text-[12px]">
          <span className="font-semibold text-black">₹ {product.price.toLocaleString('en-IN')}.00</span>
          <span className="text-[#a0a0a0] line-through">₹ {product.originalPrice.toLocaleString('en-IN')}.00</span>
          <span className="text-[#109b7c] font-medium">{product.discount}</span>
        </div>
      </div>
    </div>
  );
};

const TopStylesTabbed = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProducts = activeTab === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="py-[60px] container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.1em] text-black mb-6">
          PALMONAS TOP STYLES
        </h2>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 text-[12px] font-medium tracking-widest border transition-all duration-300 ${
                activeTab === category
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-black border-[#eeeeee] hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-[30px] px-[15px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-[#766b5b]">
            No products found in this category.
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <a
          href="/collections/best-seller"
          className="inline-block px-10 py-2.5 text-[13px] font-medium tracking-[0.15em] border border-black text-black hover:bg-black hover:text-white transition-all duration-300 uppercase"
        >
          VIEW ALL
        </a>
      </div>
    </section>
  );
};

export default TopStylesTabbed;