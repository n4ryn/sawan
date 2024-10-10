import Image from "next/image";

export const Product = ({ item }) => {
  return (
    <div className="flex flex-col justify-center border-2 rounded-md">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2023/11/28/21/35/ural-owl-8418249_1280.jpg"
        }
        alt="abc"
        height={200}
        width={200}
      />
      <h2 className="text-lg font-bold px-2">{item.name}</h2>
      <div className="flex justify-between items-center gap-2 px-2 py-2">
        <p>${item.price}</p>{" "}
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
