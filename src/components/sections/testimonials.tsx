"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Amila M.",
    content: "They are soooo pretty. I always wished to have such earrings in real gold, but gold is sooo expensive now. So i am glad i stumbled into Palmonas. Thank you and keep up the awesome work. Love and God bless you all.",
    product: "Golden Heart Love Hoops",
    productSlug: "athena-solitaire-hoop-earrings",
  },
  {
    name: "Yash K.",
    content: "My experience was amazing after purchasing this product. I was eagerly waiting to buy this. Price and quality is amazing you can buy it. It's give a tough competition to gold products.",
    product: "Small Heart Hoop Earrings",
    productSlug: "athena-solitaire-hoop-earrings",
  },
  {
    name: "Deepali B.",
    content: "Its the exact product shown in the image. Great for styling in different occasion and everyday use too.",
    product: "Chevron Ring",
    productSlug: "solitaire-promise-ring",
  },
  {
    name: "Meenakshi",
    content: "Super quality I love the product very much",
    product: "Sarvani Mangalsutra Bracelet | 18K Gold Vermeil",
    productSlug: "pearl-drop-mangalsutra",
  },
  {
    name: "Joshna D.",
    content: "This piece is just amazing, I want to purchase 1 more set but it was out of stock. I wish I could get more",
    product: "Nail Bangle Bracelet",
    productSlug: "hearts-all-over-bracelet",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-white py-[60px] text-center overflow-hidden">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        <h2 className="text-[24px] font-[500] uppercase tracking-[0.05em] mb-10 font-jost" style={{ textTransform: 'none', fontStyle: 'italic', fontFamily: 'var(--font-jost)' }}>
          Trusted by our community
        </h2>

        <div className="relative max-w-[800px] mx-auto min-h-[400px] flex flex-col items-center">
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          <div className="w-full transition-all duration-500 ease-in-out">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="black" stroke="black" />
              ))}
            </div>

            <p className="text-[14px] font-[500] mb-4 font-jost">{current.name}</p>

            <div className="max-w-[600px] mx-auto mb-8 px-4">
              <p className="text-[14px] leading-[1.6] text-foreground font-jost">
                {current.content}
              </p>
            </div>

            <Link
              href={`/product/${current.productSlug}`}
              className="inline-flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-none hover:shadow-subtle transition-all duration-300 border border-transparent hover:border-border group"
            >
              <div className="w-[50px] h-[50px] bg-white flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[#eee] flex items-center justify-center text-[10px] text-muted-foreground">
                  IMG
                </div>
              </div>
              <span className="text-[13px] font-[500] uppercase tracking-[0.05em] border-b border-black group-hover:text-primary transition-colors">
                {current.product}
              </span>
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="/collections/best-seller"
              className="inline-block px-[30px] py-[10px] border border-black text-[12px] font-[600] uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-all duration-300 font-jost"
            >
              VIEW ALL REVIEWS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
