import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../data"; // Assuming you have a products array
import AddCartBtn from "../AddCartBtn";

// Helper function to create slug from title
const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");

interface ProductParams {
  params: {
    title: string;
  };
}

// ProductDetails Component (Server and Client logic combined)
const ProductDetails = ({ params }: ProductParams) => {
  const { title } = params;

  // Find the product based on the slugified title
  const product = products.find(
    (p) => createSlug(p.title) === title.toLowerCase()
  );

  if (!product) {
    return notFound();
  }

  return (
    <div className="p-4 lg:mx-40 mt-10">
      <Link href="/products" className="text-blue-500 hover:underline">
        &larr; Back to Products
      </Link>
      <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Product Image */}
        <div className="w-80 relative h-80 border-2 border-black">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">
            {/* Placeholder for detailed description */}
            {product.description1}
          </p>
          <p className="text-gray-800 mb-4"> {product.description2}</p>

          <p className="text-xl mb-4">
            <strong>Category</strong>: {product.category}
          </p>
          <p className="text-xl font-semibold mb-4">Price: ₹ {product.mrp}</p>

          {/* Add to Cart Button */}
          <AddCartBtn product={product} />
        </div>
      </div>
      <div className="my-6">
        <div className="flex items-center space-x-4 my-5">
          <Image
            src="/products/reviews.png"
            alt="review"
            width={60}
            height={60}
          />
          <h2 className="font-bold lg:text-2xl">Reviews</h2>
        </div>

        <p className="text-gray-800 mb-4 flex items-center">
          <Image
            src="/products/user.png"
            alt="User"
            width={30}
            height={30}
            className="mr-2"
          />
          <strong>{product.person1}</strong> - {product.review1}
        </p>
        <p className="text-gray-800 mb-4 flex items-center">
          <Image
            src="/products/user.png"
            alt="User"
            width={30}
            height={30}
            className="mr-2"
          />
          <strong>{product.person2}</strong> - {product.review2}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
