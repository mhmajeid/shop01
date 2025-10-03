"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard, { type Product } from "../../components/ui/ProductCard";

type Props = {
  title?: string;
  products: Product[];
  seeAllHref?: string;
  autoplay?: boolean;
  className?: string;
};

export default function ProductsSwiper({
  title = "المنتجات",
  products,
  autoplay = false,
  className = "",
}: Props) {
  return (
    <section className={`container mx-auto relative ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] mb-5 font-semibold">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={autoplay ? { delay: 3500, disableOnInteraction: false } : false}
        className="!pb-10 rounded-2xl"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}