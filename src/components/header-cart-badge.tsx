"use client";

import React from "react";
import Link from "next/link";
import { User, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function HeaderCartBadge() {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <Link href="/collections/best-seller" className="flex flex-col items-center group relative">
        <User className="w-6 h-6 text-black group-hover:text-brand-maroon transition-colors" />
      </Link>
      <Link href="/collections/gifts-for-her" className="flex flex-col items-center group relative">
        <Heart className="w-6 h-6 text-black group-hover:text-brand-maroon transition-colors" />
        <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
      </Link>
      <Link href="/cart" className="flex flex-col items-center group relative">
        <ShoppingBag className="w-6 h-6 text-black group-hover:text-brand-maroon transition-colors" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}
