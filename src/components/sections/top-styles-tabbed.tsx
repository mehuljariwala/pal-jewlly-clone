"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { products as storeProducts } from '@/lib/products';

const CATEGORIES = [
  'ALL',
  'NECKLACES',
  'BRACELETS',
  'EARRINGS',
  'RINGS',
  'MENS',
  'MANGALSUTRA',
];

const PRODUCTS = storeProducts.slice(0, 8).map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  price: p.price,
  originalPrice: p.originalPrice,
  discount: `(${p.discount})`,
  image: p.image,
  category: p.category,
  badge: p.badge,
  variant: p.variants[0]?.label ?? 'Gold',
}));

const ProductCard = ({ product }: { product: typeof PRODUCTS[number] }) => {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToBag = () => {
    const storeProduct = storeProducts.find((p) => p.id === product.id);
    if (!storeProduct) return;
    addItem({
      productId: storeProduct.id,
      title: storeProduct.title,
      price: storeProduct.price,
      originalPrice: storeProduct.originalPrice,
      image: storeProduct.image,
      variant: storeProduct.variants[0]?.label ?? 'Gold',
      slug: storeProduct.slug,
    });
  };

  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full aspect-square overflow-hidden mb-[15px]">
        {product.badge && (
          <div className="absolute top-0 left-0 z-10 bg-[#f4e6e4] text-[#631b14] text-[10px] font-semibold px-2 py-1 uppercase tracking-wider">
            {product.badge}
          </div>
        )}

        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#eeeeee] hover:bg-black hover:text-white transition-colors duration-300"
          aria-label="Add to wishlist"
        >
          <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>

        <button
          onClick={handleAddToBag}
          className="absolute bottom-3 right-3 bg-white text-black text-[10px] font-semibold px-4 py-2 uppercase tracking-tight hover:bg-black hover:text-white transition-colors duration-300 shadow-sm border border-[#eeeeee]"
        >
          ADD TO BAG
        </button>
      </div>

      <div className="text-center w-full px-2">
        <h3 className="text-[13px] font-medium text-black mb-1 line-clamp-1">
          <Link href={`/product/${product.slug}`} className="hover:text-[#631b14] transition-colors">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center justify-center gap-1.5 text-[12px]">
          <span className="font-semibold text-black">&#8377; {product.price.toLocaleString('en-IN')}.00</span>
          <span className="text-[#a0a0a0] line-through">&#8377; {product.originalPrice.toLocaleString('en-IN')}.00</span>
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

      <div className="mt-12 text-center">
        <Link
          href="/collections/best-seller"
          className="inline-block px-10 py-2.5 text-[13px] font-medium tracking-[0.15em] border border-black text-black hover:bg-black hover:text-white transition-all duration-300 uppercase"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default TopStylesTabbed;
