import { Product } from "./components/Product";

const data = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
  { id: 6, name: "Product 6", price: 60 },
  { id: 7, name: "Product 7", price: 70 },
  { id: 8, name: "Product 8", price: 80 },
];

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between">
      <div className="w-full bg-slate-100 flex justify-between p-4">
        <h1 className="font-bold">Sawan</h1>

        <ul className="flex justify-center gap-4">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4 py-4">
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full bg-slate-100 text-center p-4">
        <p>Privacy Policy | Terms of Service | FAQ</p>
        <p>Contact: email@example.com | Phone: 123-456-7890</p>
        <p>Follow us: [Social Icons]</p>
      </div>
    </div>
  );
}
