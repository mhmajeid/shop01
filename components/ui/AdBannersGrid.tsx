"use client";

import AdBanner from "./AdBanner";

export type BannerItem = {
  id: string;
  href: string;
  image: string;
  alt?: string;
  newTab?: boolean;
  rel?: string;
};

type Props = {
  items: BannerItem[];
  title?: string;
  className?: string;
};

export default function AdBannersGrid({ items, title = "", className = "" }: Props) {
  return (
    <section className={`container mx-auto ${className}`}>
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      <div className="banners grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-2">
        {items.map((b) => (
          <AdBanner
            key={b.id}
            href={b.href}
            image={b.image}
            alt={b.alt}
            newTab={b.newTab}
            rel={b.rel}
            className="my-3"
          />
        ))}
      </div>
    </section>
  );
}
