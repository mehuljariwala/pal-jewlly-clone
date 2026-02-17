"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { products as storeProducts } from '@/lib/products';

const fineGoldProducts = storeProducts
  .filter((p) => p.tags.includes('fine-gold'))
  .map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    image: p.image,
    price: p.price,
    originalPrice: p.originalPrice,
    discount: p.badge ?? `Flat ${p.discount} Off`,
    variants: p.variants.map((v) => v.color),
  }));

const duplicatedProducts = [
  ...fineGoldProducts,
  ...fineGoldProducts.map((p, i) => ({ ...p, id: `${p.id}-dup-${i}` })),
].slice(0, 8);

const ProductCard = ({ product }: { product: typeof duplicatedProducts[number] }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-square overflow-hidden mb-3">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" fill={wishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="flex flex-col flex-grow text-left px-2">
        <h3 className="text-[12px] leading-[1.4] text-black font-normal line-clamp-2 min-h-[34px] mb-1">
          <Link href={`/product/${product.slug}`} className="hover:text-[#631b14] transition-colors">
            {product.title}
          </Link>
        </h3>

        <div className="flex flex-col gap-1 mt-auto">
          <p className="text-[14px] font-bold text-black">
            &#8377; {product.price.toLocaleString('en-IN')}.00
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[#2ba077] font-medium px-2 py-0.5 bg-[#eaf6f1] inline-block">
              {product.discount}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-2">
            {product.variants.map((color, idx) => (
              <div
                key={idx}
                className="w-3.5 h-3.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
            <span className="text-[11px] text-[#766b5b] ml-1">9KT Solid Gold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FineGoldGrid = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="container px-[15px] mx-auto max-w-[1240px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-[14px] font-medium tracking-[0.1em] text-black uppercase mb-2">
            9KT Fine Gold
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-[40px]">
          {duplicatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-[50px] flex justify-center">
          <Link
            href="/collections/fine-gold"
            className="inline-block px-[45px] py-[12px] bg-black text-white text-[13px] font-medium uppercase tracking-[0.1em] hover:bg-[#631b14] transition-colors duration-300 min-w-[160px] text-center"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FineGoldGrid;
