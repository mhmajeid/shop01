"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

type Slide = {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type Props = {
  slides: Slide[];
  className?: string;
};

export default function HeroSwiper({ slides, className = "" }: Props) {
  return (
    <section className={`relative main-slider ${className}`} aria-label="السلايدر">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="overflow-hidden"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative h-[200px] w-full md:h-[500px]">
              <Image
                src={s.src}
                alt={s.alt ?? ""}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
