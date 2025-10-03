import Image from "next/image";
import HeroSwiper from "../../components/ui/HeroSlider";
import Categories, { Category } from "../../components/ui/Categories";
import ProductsSwiper from "../../components/ui/ProductsSwiper";
import AdBanner from "../../components/ui/AdBanner";
import AdBannersGrid, { BannerItem as AdBannerItem } from "../../components/ui/AdBannersGrid";

import Testimonials, { type Testimonial } from "../../components/ui/Testimonials";

const categories: Category[] = [
  {
    id: "1",
    name: "هواتف",
    slug: "phones",
    image: "./images/01.jpg",
  },
  {
    id: "2",
    name: "الاجهزة اللوحية",
    slug: "tablets",
    image: "./images/02.jpg",
  },
  {
    id: "3",
    name: "اللابتوبات",
    slug: "laptops",
    image: "./images/03.jpg",
  },
  {
    id: "4",
    name: "منتجات الالبان",
    slug: "dairy-products",
    image: "./images/04.jpg",
  },
  {
    id: "5",
    name: "سوبر ماركت",
    slug: "supermarket",
    image: "./images/05.jpg",
  },
  {
    id: "6",
    name: "أدوات مكتبية",
    slug: "office-supplies",
    image: "./images/06.jpg",
  },
  {
    id: "7",
    name: "أدوات منزلية",
    slug: "home-supplies",
    image: "./images/07.jpg",
  },
];

const slides = [
  {
    id: "1",
    src: "./images/slider1.jpg",
    alt: "Slide 1",
  },
  {
    id: "2",
    src: "./images/slider1.jpg",
    alt: "Slide 1",
  },
];

const products = [
  {
    id: "1",
    name: "آيفون 13",
    slug: "iphone-13",
    price: 2999,
    image: "./images/products/iphone-13.jpg",
  },
  {
    id: "2",
    name: "سامسونج جالاكسي S21",
    slug: "samsung-galaxy-s21",
    price: 2499,
    image: "./images/products/samsung-galaxy-s21.jpg",
  },
  {
    id: "3",
    name: "هواوي P40",
    slug: "huawei-p40",
    price: 1999,
    image: "./images/products/huawei-p40.jpg",
  },
  {
    id: "4",
    name: "شاومي مي 11",
    slug: "xiaomi-mi-11",
    price: 1799,
    image: "./images/products/xiaomi-mi-11.jpg",
  },
  {
    id: "5",
    name: "ون بلس 9",
    slug: "oneplus-9",
    price: 2099,
    image: "./images/products/oneplus-9.jpg",
  },
  {
    id: "6",
    name: "جوجل بيكسل 6",
    slug: "google-pixel-6",
    price: 2399,
    image: "./images/products/google-pixel-6.jpg",
  },
  {
    id: "7",
    name: "سوني إكسبيريا 1 III",
    slug: "sony-xperia-1-iii",
    price: 2799,
    image: "./images/products/sony-xperia-1-iii.jpg",
  },
  {
    id: "8",
    name: "أوبو فايند X3 برو",
    slug: "oppo-find-x3-pro",
    price: 2599,
    image: "./images/products/oppo-find-x3-pro.jpg",
  },
];


const adBanners: AdBannerItem[] = [
  {
    id: "1",
    href: "https://example.com/promo1",
    image: "./images/banner.jpg",
    alt: "عرض ترويجي 1",
    newTab: true,
  },
  {
    id: "2",
    href: "https://example.com/promo2",
    image: "./images/banner.jpg",
    alt: "عرض ترويجي 2",
    newTab: true,
  },
  {
    id: "3",
    href: "https://example.com/promo3",
    image: "./images/banner.jpg",
    alt: "عرض ترويجي 3",
    newTab: true,
  },
];

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "محمد العتيبي",
    rating: 4.5,
    text: "تجربة ممتازة! التوصيل كان سريع وخدمة العملاء رائعة. أنصح بالتعامل معهم.",
    date: "2025-08-20"
  },
  {
    id: "t2",
    name: "سارة أحمد",
    rating: 5,
    text: "جودة المنتجات فوق المتوقع، رجّعت أطلب مرة ثانية 👍",
    date: "2025-09-05"
  },
  {
    id: "t3",
    name: "خالد",
    rating: 4,
    text: "الأسعار مناسبة جدًا مقارنة بالسوق، شكراً لكم.",
  },
  {
    id: "t4",
    name: "خالد",
    rating: 4,
    text: "الأسعار مناسبة جدًا مقارنة بالسوق، شكراً لكم.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSwiper slides={slides} className="mb-8" />
      <div className="container mx-auto">
        <Categories
          categories={categories}
          title="أبرز الأقسام"
          className="mt-6"
        />
        <ProductsSwiper
          title="جميع المنتجات"
          seeAllHref="/products"
          products={products}
        />
        <ProductsSwiper
          title="منتجات مميزة"
          seeAllHref="/products"
          products={products}
        />
        
        <AdBanner
        href="https://example.com/super-sale"
        image="./images/banner.jpg"
        alt="عرض ضخم لوقت محدود"
        priority
        className="my-8"
      />
        
        <ProductsSwiper
          title="عروض مميزة"
          seeAllHref="/products"
          products={products}
          autoplay
          className="mt-8"
        />
        <Testimonials
          items={testimonials}
          title="تقييمات العملاء"
          slider
          autoplay
        />
        <ProductsSwiper
          title="الأكثر مبيعاً"
          seeAllHref="/products"
          products={products}
          className="mb-16"
        />
        <AdBannersGrid items={adBanners} />
      </div>
    </>
  );
}
