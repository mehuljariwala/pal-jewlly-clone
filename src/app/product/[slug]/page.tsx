"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, Star, Truck, RotateCcw, Shield, ChevronDown } from "lucide-react";
import SharedLayout from "@/components/shared-layout";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getProductsByCategory(product.category)
      .filter((p) => p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <SharedLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-[24px] font-medium mb-4">Product Not Found</h1>
          <p className="text-[#766b5b] mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/collections/best-seller" className="inline-block px-8 py-2.5 bg-black text-white text-[13px] uppercase tracking-wider hover:bg-[#631b14] transition-colors">
            Browse Products
          </Link>
        </div>
      </SharedLayout>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      variant: product.variants[selectedVariant]?.label || "Gold",
      slug: product.slug,
    });
  };

  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-6 max-w-[1240px]">
        {/* Breadcrumb */}
        <nav className="text-[12px] text-[#766b5b] mb-6">
          <Link href="/" className="hover:text-[#631b14]">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/collections/${product.category.toLowerCase()}`} className="hover:text-[#631b14]">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.title}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-2 w-[70px]">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-black" : "border-[#eee]"
                  }`}
                >
                  <Image src={img} alt={`${product.title} ${i + 1}`} fill className="object-cover" sizes="70px" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 relative aspect-square overflow-hidden bg-[#fafafa]">
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#f4e6e4] text-[#631b14] text-[10px] font-semibold px-2 py-1 uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#eee] hover:bg-black hover:text-white transition-colors z-10"
              >
                <Heart size={18} fill={wishlisted ? "#631b14" : "none"} color={wishlisted ? "#631b14" : "currentColor"} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-[20px] md:text-[24px] font-medium text-black mb-3 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                    color="#f59e0b"
                  />
                ))}
              </div>
              <span className="text-[13px] text-[#766b5b]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[24px] font-bold text-black">
                ₹ {product.price.toLocaleString("en-IN")}.00
              </span>
              <span className="text-[16px] text-[#a0a0a0] line-through">
                ₹ {product.originalPrice.toLocaleString("en-IN")}.00
              </span>
              <span className="text-[14px] text-white bg-[#109b7c] px-2 py-0.5 font-medium">
                {product.discount} OFF
              </span>
            </div>

            <p className="text-[13px] text-[#766b5b] mb-1">Tax included. Shipping calculated at checkout.</p>

            {/* Variant Selector */}
            <div className="mb-6 mt-4">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-3">
                Color: {product.variants[selectedVariant]?.label}
              </h4>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedVariant === i ? "border-black scale-110" : "border-gray-200"
                    }`}
                    style={{ backgroundColor: v.color }}
                    aria-label={v.label}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider mb-3">Quantity</h4>
              <div className="flex items-center border border-[#eee] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 text-[14px] font-medium min-w-[40px] text-center border-x border-[#eee]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart & Buy Now */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) handleAddToCart();
                }}
                className="w-full py-3.5 bg-black text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[#333] transition-colors"
              >
                Add to Bag
              </button>
              <Link
                href="/cart"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) handleAddToCart();
                }}
                className="w-full py-3.5 bg-[#631b14] text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[#4a1410] transition-colors text-center"
              >
                Buy It Now
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-[#eee] mb-6">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Truck size={20} className="text-[#631b14]" />
                <span className="text-[11px] text-[#766b5b]">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <RotateCcw size={20} className="text-[#631b14]" />
                <span className="text-[11px] text-[#766b5b]">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Shield size={20} className="text-[#631b14]" />
                <span className="text-[11px] text-[#766b5b]">Lifetime Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            {[
              { key: "description", label: "Description", content: product.description },
              { key: "material", label: "Material & Care", content: `Material: ${product.material}\n\nCare Instructions: Store in a cool, dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.` },
              { key: "shipping", label: "Shipping & Returns", content: "Free shipping on all orders above ₹999. Standard delivery within 5-7 business days. Easy 15-day return and exchange policy. Lifetime warranty on all products." },
            ].map((section) => (
              <div key={section.key} className="border-b border-[#eee]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === section.key ? null : section.key)}
                  className="flex items-center justify-between w-full py-4 text-[13px] font-semibold uppercase tracking-wider"
                >
                  {section.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openAccordion === section.key ? "rotate-180" : ""}`}
                  />
                </button>
                {openAccordion === section.key && (
                  <div className="pb-4 text-[13px] text-[#766b5b] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 mb-8">
            <h2 className="text-[20px] font-medium uppercase tracking-[0.1em] text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <Link href={`/product/${p.slug}`} key={p.id} className="group flex flex-col">
                  <div className="relative aspect-square overflow-hidden mb-3">
                    {p.badge && (
                      <div className="absolute top-0 left-0 z-10 bg-[#f4e6e4] text-[#631b14] text-[10px] font-semibold px-2 py-1 uppercase tracking-wider">
                        {p.badge}
                      </div>
                    )}
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-[13px] font-medium text-center line-clamp-1">{p.title}</h3>
                  <div className="flex items-center justify-center gap-1.5 text-[12px] mt-1">
                    <span className="font-semibold">₹ {p.price.toLocaleString("en-IN")}.00</span>
                    <span className="text-[#a0a0a0] line-through">₹ {p.originalPrice.toLocaleString("en-IN")}.00</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </SharedLayout>
  );
}
