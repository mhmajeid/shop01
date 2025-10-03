"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export type Testimonial = {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  date?: string;
};

type Props = {
  items: Testimonial[];
  title?: string;
  subtitle?: string;
  slider?: boolean;
  autoplay?: boolean;
  className?: string;
};

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  const FullStar = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="currentColor"
      />
    </svg>
  );

  const HalfStar = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="url(#half)"
        stroke="currentColor"
        strokeWidth={0.5}
        strokeLinejoin="round"
      />
    </svg>
  );

  const EmptyStar = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="inline-flex items-center gap-1 text-amber-500">
      {Array.from({ length: full }).map((_, i) => <FullStar key={`f${i}`} />)}
      {hasHalf && <HalfStar />}
      {Array.from({ length: 5 - full - (hasHalf ? 1 : 0) }).map((_, i) => <EmptyStar key={`e${i}`} />)}
      <span className="ms-2 text-xs text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  if (!src) {
    const initial = name.trim().charAt(0) || "م";
    return (
      <div className="grid h-12 w-12 place-content-center rounded-full bg-gray-200 text-base font-semibold text-gray-700">
        {initial}
      </div>
    );
  }
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      <Image src={src} alt={name} fill sizes="48px" className="object-cover" />
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  const d = t.date ? new Date(t.date) : null;
  return (
    <article className="h-full rounded-2xl shadow-sm bg-white p-4">
      <div className="flex items-center gap-3">
        <Avatar name={t.name} src={t.avatar} />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-gray-900">{t.name}</h3>
        </div>
      </div>

      <div className="mt-3">
        <Stars rating={t.rating} />
      </div>

      <p className="mt-3 text-sm leading-6 text-gray-700">
        {t.text}
      </p>
    </article>
  );
}

export default function Testimonials({
  items,
  title = "آراء العملاء",
  subtitle,
  slider = false,
  autoplay = false,
  className = "",
}: Props) {
  return (
    <section className={`space-y-4 ${className}`}>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>

      {slider && (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={12}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={autoplay ? { delay: 4500, disableOnInteraction: false } : false}
          className="!pb-10"
        >
          {items.map((t) => (
            <SwiperSlide key={t.id}>
              <Card t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
