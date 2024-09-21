"use client";
import { useProducts } from "@/contexts/ProductsContext";
// const callouts = [
//   {
//     name: "Desk and Office",
//     description: "Work from home accessories",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
//     imageAlt:
//       "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
//     href: "#",
//   },
//   {
//     name: "Self-Improvement",
//     description: "Journals and note-taking",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
//     imageAlt:
//       "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
//     href: "#",
//   },
//   {
//     name: "Travel",
//     description: "Daily commute essentials",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
//     imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
//     href: "#",
//   },
// ];

import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const res = await fetch(
    "https://ecommerceBackend.azurewebsites.net/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// const products = [
//   {
//     img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
//     title: "Nike Air Monarch IV",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "white",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
//     title: "Nike Air Vapormax Plus",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "red",
//     category: "sneakers",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
//     title: "Nike Waffle One Sneaker",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "green",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
//     title: "Nike Running Shoe",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Adidas",
//     color: "black",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
//     title: "Flat Slip On Pumps",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Vans",
//     color: "green",
//     category: "flats",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
//     title: "Knit Ballet Flat",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Adidas",
//     color: "black",
//     category: "flats",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
//     title: "Loafer Flats",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Vans",
//     color: "white",
//     category: "flats",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
//     title: "Nike Zoom Freak",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "green",
//     category: "sneakers",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
//     title: "Nike Men's Sneaker",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Adidas",
//     color: "blue",
//     category: "sneakers",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
//     title: "PUMA BLACK-OCE",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Puma",
//     color: "green",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
//     title: "Pacer Future Sneaker",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Puma",
//     color: "red",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
//     title: "Unisex-Adult Super",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Puma",
//     color: "black",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
//     title: "Roma Basic Sneaker",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Puma",
//     color: "white",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
//     title: "Pacer Future Doubleknit",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Puma",
//     color: "black",
//     category: "sneakers",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
//     title: "Fusion Evo Golf Shoe",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "100",
//     company: "Puma",
//     color: "green",
//     category: "sneakers",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
//     title: "Rainbow Chex Skate",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "100",
//     company: "Vans",
//     color: "red",
//     category: "flats",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
//     title: "Low-Top Trainers",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "100",
//     company: "Vans",
//     color: "white",
//     category: "sandals",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
//     title: "Vans Unisex Low-Top",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "100",
//     company: "Vans",
//     color: "blue",
//     category: "sandals",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
//     title: "Classic Bandana Sneakers",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Nike",
//     color: "black",
//     category: "sandals",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
//     title: "Chunky High Heel",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Vans",
//     color: "black",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
//     title: "Slip On Stiletto High Heel",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "100",
//     company: "Puma",
//     color: "black",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
//     title: "DREAM PAIRS Court Shoes",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Nike",
//     color: "red",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
//     title: "Nike Air Vapormax Plus",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "red",
//     category: "sneakers",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
//     title: "Low Mid Block Heels",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "black",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
//     title: "Chunky High Heel",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Adidas",
//     color: "black",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
//     title: "Amore Fashion Stilettos",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "150",
//     company: "Adidas",
//     color: "white",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
//     title: "Bridal Sandals Glitter",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Adidas",
//     color: "black",
//     category: "heels",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
//     title: "Wedding Prom Bridal",
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "50",
//     company: "Adidas",
//     color: "black",
//     category: "flats",
//   },
// ];

export default function Products() {
  const { filteredData, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
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
