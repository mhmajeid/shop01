"use client";
// import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';


type Props = {
  href: string;            // رابط الإعلان
  image: string;           // مسار الصورة (مثال: "/banners/sale.jpg" أو URL خارجي)
  alt?: string;            // نص بديل
  newTab?: boolean;        // فتح في تبويب جديد
  rel?: string;            // rel مخصص (nofollow, sponsored)
  className?: string;
  priority?: boolean;      // لو البنر فوق الطيّة
};

export default function AdBanner({
  href,
  image,
  alt = "",
  newTab = true,
  rel,
  className = "",
  priority = false,
}: Props) {
  const target = newTab ? "_blank" : undefined;
  const relAttr = newTab
    ? rel ?? "noopener noreferrer nofollow sponsored"
    : rel ?? "nofollow sponsored";

  return (
    <section className={`relative container overflow-hidden ${className}`}>
      <a href={href} target={target} rel={relAttr} aria-label={alt || "إعلان"}>
        <div className="relative h-36 w-full sm:h-52 md:h-64">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      </a>
    </section>
  );
}