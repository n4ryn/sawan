import Image from "next/image";
import { Product } from "./components/Product";

const data = [
  { id: 1, name: "Product 6", price: 60, img: "/yt-100.png" },
  { id: 2, name: "Product 1", price: 10, img: "/yt-1k.png" },
  { id: 3, name: "Product 2", price: 20, img: "/yt-2k.png" },
  { id: 4, name: "Product 3", price: 30, img: "/yt-3k.png" },
  { id: 5, name: "Product 4", price: 40, img: "/yt-4k.png" },
  { id: 6, name: "Product 5", price: 50, img: "/yt-5k.png" },
  { id: 7, name: "Product 7", price: 70, img: "/yt-4k-watch.png" },
  { id: 8, name: "Product 8", price: 80, img: "/yt-2k-4k.png" },
];

export default function Home() {
  return (
    <>
      <Image src="/business.png" alt="abc" height={300} width={600} />
      <div className="w-full flex flex-wrap justify-center gap-4 py-4">
        <div></div>
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
