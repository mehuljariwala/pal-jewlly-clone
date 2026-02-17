"use client";

import React, { useState, useEffect } from "react";

const announcements = [
  {
    text: "FLAT 50% OFF | Use Code -",
    linkText: "NOT_LATE",
    link: "/collections/post-valentine-sale",
    isBadge: true,
  },
  {
    text: "⚡ FREE STUDS worth ₹1495 on orders above ₹2999",
    link: null,
  },
  {
    text: "LIMITED TIME OFFER - ",
    linkText: "FLAT ₹999",
    link: "/collections/republic-day-sale",
  },
  {
    text: "BUY 2 AT ₹1898 | USE CODE : ",
    linkText: "EXTRA100",
    link: "/collections/republic-day-sale",
  },
];

export default function AnnouncementBar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="shopify-section-announcement-bar"
      className="shopify-section t4-section t4-section-announcement-bar"
      style={{ 
        backgroundColor: "#000000",
        minHeight: "40px"
      }}
    >
      <div className="relative overflow-hidden w-full py-2.5">
        <div className="container mx-auto px-4 box-border">
          <div className="relative h-5">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="text-white text-center flex items-center justify-center whitespace-nowrap">
                  <p className="font-announcement leading-tight m-0 flex items-center gap-1 tracking-wider text-[11px] md:text-[12px] font-semibold uppercase">
                    <span dangerouslySetInnerHTML={{ __html: announcement.text }} />
                    {announcement.linkText && (
                      <a
                        href={announcement.link || "#"}
                        className={`inline-block transition-all hover:opacity-80 ${
                          announcement.isBadge
                            ? "bg-[#ff0000] text-white px-2 py-0.5 rounded-sm font-bold ml-1"
                            : "underline font-bold"
                        }`}
                      >
                        {announcement.linkText}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-announcement {
          font-family: var(--font-jost), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        
        #shopify-section-announcement-bar strong {
          font-weight: 700;
        }

        @media (max-width: 767px) {
          .font-announcement {
            font-size: 10px;
            letter-spacing: 0.03em;
          }
        }
      `}</style>
    </div>
  );
}