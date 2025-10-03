"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

type Props = {
  categories: Category[];
  title?: string;
  showCount?: boolean;
  className?: string;
};

export default function Categories({
  categories,
  title = "الأقسام",
  className = "",
}: Props) {
  return (
    <section className={`${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>



      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="overflow-hidden"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="relative h-72 sm:h-96">
              <Link
                key={cat.id}
                href={`/c/${cat.slug}`}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
                aria-label={`اذهب إلى قسم ${cat.name}`}
              >
                <div className="relative aspect-square w-full">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition group-hover:scale-[1.03]"
                    />
                  ) : (
                    // بديل لو ما في صورة: خلفية تدرّج وحرف أول
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <span className="text-2xl font-semibold text-gray-700">
                        {cat.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between px-3 py-2">
                  <span className="line-clamp-1 text-sm font-medium text-gray-900">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
