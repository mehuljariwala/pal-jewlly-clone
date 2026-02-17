import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Crystal Peak 9KT Gold Lab Grown Diamond Studs for Multiple Piercings",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR010-G-5_0040-25.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 2,
    title: "Orba Shine 9KT Gold Lab Grown Diamond Bracelet",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR004-G-5_0040-26.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 3,
    title: "Stellar Bloom 9KT Gold Lab Grown Diamond Pendant",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR001-G-5-27.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 4,
    title: "Floral Whisper 9KT Gold Lab Grown Diamond Studs for Multiple Piercings",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMN016-G-28.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 5,
    title: "Sweethex 9KT Gold Lab Grown Diamond Stud Earring",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR010-G-5_0040-25.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 6,
    title: "Celestical Dot 9KT Gold Lab Grown Diamond Necklace",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR001-G-5-27.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 7,
    title: "Starcore 9KT Gold Lab Grown Diamond Studs for Multiple Piercings",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMN016-G-28.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  },
  {
    id: 8,
    title: "Axis Dot 9KT Gold Lab Grown Diamond Single Stud Earring",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images/PMWSTMR010-G-5_0040-25.jpg",
    price: "Fetching...",
    discount: "Flat 5% Off",
    variants: ["#ceb2a0", "#c0c0c0", "#e5c07b"]
  }
];

const FineGoldGrid = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="container px-[15px] mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[14px] font-medium tracking-[0.1em] text-black uppercase mb-2">
            9KT Fine Gold
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-[40px]">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              {/* Product Image Area */}
              <div className="relative aspect-square overflow-hidden mb-3">
                <a href="#" className="block w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </a>
                <button 
                  className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4 text-black" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow text-left px-2">
                <h3 className="text-[12px] leading-[1.4] text-black font-normal line-clamp-2 min-h-[34px] mb-1">
                  <a href="#">{product.title}</a>
                </h3>
                
                <div className="flex flex-col gap-1 mt-auto">
                  <p className="text-[14px] font-bold text-black">
                    {product.price}
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
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-[50px] flex justify-center">
          <a
            href="/pages/gold-jewellery"
            className="inline-block px-[45px] py-[12px] bg-black text-white text-[13px] font-medium uppercase tracking-[0.1em] hover:bg-[#631b14] transition-colors duration-300 min-w-[160px] text-center"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default FineGoldGrid;