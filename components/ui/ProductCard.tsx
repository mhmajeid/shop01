import Image from "next/image";
import Link from "next/link";
export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
};


const ProductCard = ({ id, name, slug, price, image }: Product) => {
  return (
    <div data-id={id} className="rounded bg-[#f6f8fe]">
      <Link href={`/products/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full mt-2 h-48 object-scale-down mb-4 rounded-lg"
        />
      </Link>
      <h3 className="px-3"><Link href={`/products/${slug}`}>{name}</Link></h3>
      <p className="px-3 font-semibold">{price} ر.س</p>
      <div className="flex justify-between mt-2 px-3 mb-3 gap-2">
        <button className="bg-[#313ad9] flex gap-1 justify-center text-white px-3 flex-1 py-2 rounded hover:bg-[#2c2fbb] transition text-[14px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
          إضافة إلى العربة</button>
        <button className="bg-transparent text-[#313ad9] border-1 border-[#313ad9] px-2 py-2 rounded hover:bg-[#313ad9] hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
