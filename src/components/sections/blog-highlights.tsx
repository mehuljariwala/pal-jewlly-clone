import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  date: {
    day: string;
    month: string;
  };
  title: string;
  excerpt: string;
  bgColor: string;
  href: string;
}

const BlogCard = ({ date, title, excerpt, bgColor, href }: BlogCardProps) => {
  return (
    <Link href={href} className="flex flex-col h-full group cursor-pointer">
      <div
        className="relative w-full aspect-square mb-[15px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-white rounded-full flex flex-col items-center justify-center text-center shadow-subtle z-10">
          <span className="text-[14px] font-bold leading-none">{date.day}</span>
          <span className="text-[10px] uppercase font-medium leading-none mt-1">{date.month}</span>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-[16px] font-semibold text-[#000000] leading-[1.3] mb-[12px] uppercase line-clamp-2 group-hover:text-[#631b14] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] text-[#766b5b] leading-[1.6] mb-[20px] line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

const BlogHighlights = () => {
  const blogs = [
    {
      date: { day: '17', month: 'FEB' },
      title: "How to Style Minimal Jewellery in 9KT Gold & Silver - For Every Occasion",
      excerpt: "If there is anything to be learned from the \"less is more\" era, it is that minimal jewellery does not imply ...",
      bgColor: "#e2b6a8",
      href: "/collections/fine-gold",
    },
    {
      date: { day: '15', month: 'FEB' },
      title: "Don't Do Your Jewellery Dirty: Everyday Care Tips That Actually Work",
      excerpt: "Imagine your demi-fine jewellery to be like your favourite white sneakers, your everyday tote, or that one p...",
      bgColor: "#d8c9ae",
      href: "/collections/daily-wear",
    },
    {
      date: { day: '13', month: 'FEB' },
      title: "What Is the Best Gold Karat for Different Types of Gold Jewellery?",
      excerpt: "If gold were a person, it would be that friend who's effortlessly glamorous. But here's the thing: not all g...",
      bgColor: "#dadbd5",
      href: "/collections/fine-gold",
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-[40px]">
          <h2 className="text-[24px] font-medium tracking-[0.05em] text-[#000000]">
            BLOGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[40px]">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              date={blog.date}
              title={blog.title}
              excerpt={blog.excerpt}
              bgColor={blog.bgColor}
              href={blog.href}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[30px] md:mt-[50px]">
          <Link
            href="/collections/new-arrivals"
            className="inline-flex items-center justify-center px-[40px] py-[12px] border border-[#000000] text-[12px] font-medium tracking-[0.15em] transition-all duration-300 hover:bg-[#000000] hover:text-white uppercase"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
