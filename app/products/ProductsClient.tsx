"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../context/CartProvider";
import AddCartBtn from "./AddCartBtn";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

interface ProductsProps {
  products: Product[];
  categories: { id: string; category: string; thumbnail: string }[];
}

const ProductsClient: React.FC<ProductsProps> = ({ products, categories }) => {
  // const { updateCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter(); // Initialize router for navigation

  // Function to filter products by category
  const filterByCategory = (category: string) => {
    if (category.toLowerCase() === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  // Function to handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  // // Function to add product to cart
  // const addToCart = (product: Product) => {
  //   updateCart(product, 1);
  // };

  // Helper function to create URL-friendly slugs
  const createSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  // Function to handle card click and navigate to product details
  const handleCardClick = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <div className="p-4 lg:mx-14 mt-10">
      <h1 className="heading-below-the-line text-3xl text-center text-cyan-900 mb-4">
        One stop solution for all your Construction needs
      </h1>
      <p className="text-lg">
        At One Mart, we provide a wide range of premium construction materials
        to meet the demands of your projects from residential to commercial
        builds. Whether you need cement, steel, bricks, or finishing products,
        we ensure top-grade materials at competitive prices.
      </p>
      <h1 className="text-2xl text-center font-bold my-4">Our Products</h1>

      {/* Search Bar */}
      <label className="input input-bordered flex items-center gap-2 m-4 bg-white border-yellow-400">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Filter Buttons */}
      <div className="category-container flex overflow-x-auto space-x-4 lg:space-x-10 p-4 no-scrollbar scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => filterByCategory(category.category)}
            className="cursor-pointer flex-none text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 relative">
              <Image
                src={category.thumbnail}
                alt={category.category}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="mt-2 text-center">{category.category}</p>
          </div>
        ))}
      </div>

      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const slug = createSlug(product.title);
          return (
            <div key={product.id}>
              {/* Card Container */}
              <div
                className="card card-compact shadow-md lg:m-2  flex flex-col h-full cursor-pointer border-2 border-black "
                onClick={() => handleCardClick(slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(slug);
                  }
                }}
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-w-4 aspect-h-3 flex m-2">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t border border-black"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                    quality={75} // Lower quality for smaller images
                  />
                </div>

                {/* Card Body */}
                <div className="card-body flex flex-col flex-grow">
                  <h2 className="text-center lg:text-2xl sm:text-xl font-bold">
                    {product.title}
                  </h2>
                  {/* Description visible only on larger screens */}
                  <p className="text-gray-900 hidden lg:block">
                    {product.description2}
                  </p>
                  <p className="font-bold text-lg">₹ {product.mrp}</p>
                  {/* Add to Cart Button */}
                  <AddCartBtn product={product} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsClient;
