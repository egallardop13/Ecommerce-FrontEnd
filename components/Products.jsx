"use client";
import { useProducts } from "@/contexts/ProductsContext";
export default function Products() {
  const { filteredData, isLoading, isError, error } = useProducts();

  if (isLoading) return <p className="mt-2">Loading products...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;

  const products = filteredData;
  console.log("products", products);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt="Shoe photo"
                    src={product.img}
                    className="h-full w-full object-contain border rounded-lg object-center"
                  />
                </div>
                <h3 className="lg:text-base xl:text-lg text-lg text-gray-500 inline-flex justify-between  flex-wrap w-full">
                  <span className="absolute inset-0 " />
                  {product.title}
                  <span className="xl:text-base text-base lg:text-xs text-black font-semibold ">
                    {product.reviews}
                  </span>
                </h3>
                <p className="xl:text-base text-base lg:text-sm font-semibold text-gray-900">
                  <span className="font-bold line-through">
                    {product.prevPrice}{" "}
                  </span>
                  ${product.newPrice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
