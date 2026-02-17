"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import SharedLayout from "@/components/shared-layout";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice, totalSavings } = useCart();

  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8 max-w-[1240px]">
        {/* Breadcrumb */}
        <nav className="text-[12px] text-[#766b5b] mb-6">
          <Link href="/" className="hover:text-[#631b14]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Shopping Bag</span>
        </nav>

        <h1 className="text-[24px] md:text-[30px] font-medium uppercase tracking-[0.1em] text-black mb-8">
          Shopping Bag
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto mb-4 text-[#ccc]" />
            <h2 className="text-[18px] font-medium mb-2">Your bag is empty</h2>
            <p className="text-[14px] text-[#766b5b] mb-6">
              Looks like you haven&apos;t added anything to your bag yet.
            </p>
            <Link
              href="/collections/best-seller"
              className="inline-block px-8 py-3 bg-black text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[#631b14] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-[#eee] text-[11px] font-semibold uppercase tracking-wider text-[#766b5b]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-[#eee]">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variant}`}
                    className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-6 flex gap-4">
                      <Link href={`/product/${item.slug}`} className="relative w-[80px] h-[80px] flex-shrink-0 overflow-hidden bg-[#fafafa]">
                        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="80px" />
                      </Link>
                      <div className="flex flex-col justify-center">
                        <Link href={`/product/${item.slug}`} className="text-[14px] font-medium text-black hover:text-[#631b14] transition-colors line-clamp-2">
                          {item.title}
                        </Link>
                        <p className="text-[12px] text-[#766b5b] mt-1">Variant: {item.variant}</p>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="flex items-center gap-1 text-[12px] text-[#999] hover:text-[#631b14] mt-2 md:hidden transition-colors"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center hidden md:block">
                      <span className="text-[14px] font-semibold">₹ {item.price.toLocaleString("en-IN")}.00</span>
                      {item.originalPrice > item.price && (
                        <span className="text-[12px] text-[#a0a0a0] line-through block">
                          ₹ {item.originalPrice.toLocaleString("en-IN")}.00
                        </span>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center border border-[#eee]">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="px-2 py-1.5 hover:bg-[#f5f5f5] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1.5 text-[13px] font-medium min-w-[32px] text-center border-x border-[#eee]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="px-2 py-1.5 hover:bg-[#f5f5f5] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Total + Remove */}
                    <div className="col-span-2 flex items-center justify-end gap-3">
                      <span className="text-[14px] font-semibold">
                        ₹ {(item.price * item.quantity).toLocaleString("en-IN")}.00
                      </span>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="hidden md:block text-[#ccc] hover:text-[#631b14] transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#eee]">
                <Link
                  href="/collections/best-seller"
                  className="text-[13px] font-medium text-[#766b5b] hover:text-black underline transition-colors"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-[13px] font-medium text-[#999] hover:text-[#631b14] transition-colors"
                >
                  Clear Bag
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#fafafa] p-6 sticky top-4">
                <h2 className="text-[16px] font-semibold uppercase tracking-wider mb-5">
                  Order Summary
                </h2>

                <div className="space-y-3 text-[14px] mb-5">
                  <div className="flex justify-between">
                    <span className="text-[#766b5b]">Subtotal ({totalItems} items)</span>
                    <span className="font-medium">₹ {totalPrice.toLocaleString("en-IN")}.00</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-[#109b7c]">
                      <span className="flex items-center gap-1">
                        <Tag size={14} /> You Save
                      </span>
                      <span className="font-medium">₹ {totalSavings.toLocaleString("en-IN")}.00</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#766b5b]">Shipping</span>
                    <span className="font-medium text-[#109b7c]">Free</span>
                  </div>
                </div>

                <div className="border-t border-[#eee] pt-4 mb-6">
                  <div className="flex justify-between text-[16px] font-bold">
                    <span>Total</span>
                    <span>₹ {totalPrice.toLocaleString("en-IN")}.00</span>
                  </div>
                  <p className="text-[11px] text-[#766b5b] mt-1">Tax included</p>
                </div>

                <button
                  onClick={() => alert('Thank you! Checkout functionality coming soon.')}
                  className="w-full py-3.5 bg-[#631b14] text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[#4a1410] transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  Checkout <ArrowRight size={16} />
                </button>

                {/* Trust Message */}
                <div className="text-center text-[11px] text-[#766b5b] mt-4 space-y-1">
                  <p>Secure checkout with 256-bit SSL encryption</p>
                  <p>Free shipping on all orders above ₹999</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SharedLayout>
  );
}
