"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import SharedLayout from "@/components/shared-layout";
import { products, CATEGORIES, COLLECTION_MAP, getProductsByTag, getProductsByCategory } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

type SortOption = "featured" | "price-low" | "price-high" | "newest";

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden mb-3">
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
          className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#eee] hover:bg-black hover:text-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={16} fill={wishlisted ? "#631b14" : "none"} color={wishlisted ? "#631b14" : "currentColor"} />
        </button>
        <button
          onClick={() =>
            addItem({
              productId: product.id,
              title: product.title,
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.image,
              variant: product.variants[0]?.label || "Gold",
              slug: product.slug,
            })
          }
          className="absolute bottom-3 right-3 bg-white text-black text-[10px] font-semibold px-4 py-2 uppercase tracking-tight hover:bg-black hover:text-white transition-colors border border-[#eee]"
        >
          ADD TO BAG
        </button>
      </div>
      <div className="text-center px-2">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-[13px] font-medium text-black mb-1 line-clamp-1 hover:text-[#631b14] transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 text-[12px]">
          <span className="font-semibold text-black">
            ₹ {product.price.toLocaleString("en-IN")}.00
          </span>
          <span className="text-[#a0a0a0] line-through">
            ₹ {product.originalPrice.toLocaleString("en-IN")}.00
          </span>
          <span className="text-[#109b7c] font-medium">({product.discount})</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {product.variants.map((v, i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 rounded-full border border-gray-200"
              style={{ backgroundColor: v.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  const collection = COLLECTION_MAP[slug];
  const title = collection?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const description = collection?.description || "";

  const baseProducts = useMemo(() => {
    if (collection?.tag) return getProductsByTag(collection.tag);
    // Try as category
    const catProducts = getProductsByCategory(slug.toUpperCase());
    return catProducts.length > 0 ? catProducts : products;
  }, [slug, collection]);

  const filteredProducts = useMemo(() => {
    let result = baseProducts;
    if (activeCategory !== "ALL") {
      result = result.filter((p) => p.category === activeCategory);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = [...result].sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }
    return result;
  }, [baseProducts, activeCategory, sortBy, priceRange]);

  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8 max-w-[1240px]">
        {/* Breadcrumb */}
        <nav className="text-[12px] text-[#766b5b] mb-6">
          <Link href="/" className="hover:text-[#631b14]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{title}</span>
        </nav>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[24px] md:text-[30px] font-medium uppercase tracking-[0.1em] text-black mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-[14px] text-[#766b5b] max-w-[600px] mx-auto">{description}</p>
          )}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-[#eee] pb-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-wider hover:text-[#631b14] transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <p className="text-[13px] text-[#766b5b]">{filteredProducts.length} products</p>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-[#766b5b] hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-transparent border border-[#eee] px-3 py-1.5 pr-8 text-[13px] font-medium cursor-pointer outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-[220px] flex-shrink-0 hidden md:block">
              <div className="sticky top-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-wider">Filters</h3>
                  <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                    <X size={16} />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-3 text-[#766b5b]">
                    Category
                  </h4>
                  <div className="flex flex-col gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left text-[13px] py-1 px-2 transition-colors ${
                          activeCategory === cat
                            ? "bg-black text-white"
                            : "hover:bg-[#f5f5f5] text-black"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-3 text-[#766b5b]">
                    Price Range
                  </h4>
                  <div className="space-y-2">
                    {[
                      [0, 3000, "Under ₹3,000"],
                      [3000, 6000, "₹3,000 - ₹6,000"],
                      [6000, 10000, "₹6,000 - ₹10,000"],
                      [10000, 20000, "₹10,000+"],
                    ].map(([min, max, label]) => (
                      <button
                        key={String(label)}
                        onClick={() => setPriceRange([min as number, max as number])}
                        className={`text-left text-[13px] py-1 px-2 w-full transition-colors ${
                          priceRange[0] === min && priceRange[1] === max
                            ? "bg-black text-white"
                            : "hover:bg-[#f5f5f5] text-black"
                        }`}
                      >
                        {label as string}
                      </button>
                    ))}
                    <button
                      onClick={() => setPriceRange([0, 20000])}
                      className="text-[12px] text-[#631b14] underline mt-1"
                    >
                      Clear price filter
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Category tabs (mobile-friendly) */}
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-[11px] font-medium tracking-widest border transition-all ${
                    activeCategory === cat
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-[#eee] hover:border-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-[#766b5b]">
                <p className="text-[16px] mb-2">No products found.</p>
                <p className="text-[13px]">Try adjusting your filters or browse all collections.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
