import Image from "next/image";
import HeroSwiper from "../../components/ui/HeroSlider";
import Categories, { Category } from "../../components/ui/Categories";

const categories: Category[] = [
  {
    id: "1",
    name: "هواتف",
    slug: "phones",
    image: "/images/01.jpg",
  },
  {
    id: "2",
    name: "الاجهزة اللوحية",
    slug: "tablets",
    image: "/images/02.jpg",
  },
  {
    id: "3",
    name: "اللابتوبات",
    slug: "laptops",
    image: "/images/03.jpg",
  },
  {
    id: "4",
    name: "منتجات الالبان",
    slug: "dairy-products",
    image: "/images/04.jpg",
  },
  {
    id: "5",
    name: "سوبر ماركت",
    slug: "supermarket",
    image: "/images/05.jpg",
  },
  {
    id: "6",
    name: "أدوات مكتبية",
    slug: "office-supplies",
    image: "/images/06.jpg",
  },
  {
    id: "7",
    name: "أدوات منزلية",
    slug: "home-supplies",
    image: "/images/07.jpg",
  },
];

const slides = [
  {
    id: "1",
    src: "/images/slider1.jpg",
    alt: "Slide 1",
  },
  {
    id: "2",
    src: "/images/slider1.jpg",
    alt: "Slide 1",
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
        {/* بقية الصفحة */}
      </div>
    </>
  );
}
