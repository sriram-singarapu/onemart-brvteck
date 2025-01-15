"use client";

import { useCart } from "../context/CartProvider";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const {
    items: cartItems,
    updateCart,
    removeFromCart,
    countTotalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="p-4 sm:p-6 lg:mx-24 mt-10">
      <h1 className="text-center heading-with-lines text-2xl sm:text-3xl font-bold mb-6">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-lg sm:text-2xl m-4">Your cart is empty.</p>
          <Link
            href="/products"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((cartItem) => (
            <div
              key={cartItem.product.id}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border-b pb-4"
            >
              <Image
                src={cartItem.product.thumbnail}
                alt={cartItem.product.title}
                width={80}
                height={80}
                className="object-cover rounded"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {cartItem.product.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Price: ₹{cartItem.product.mrp.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Subtotal: ₹
                  {(cartItem.product.mrp * cartItem.count).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCart(cartItem.product, -1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                >
                  -
                </button>
                <span className="text-sm sm:text-base">{cartItem.count}</span>
                <button
                  onClick={() => updateCart(cartItem.product, 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(cartItem.product)}
                  className="px-3 py-1 btn btn-outline btn-error text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h2 className="text-lg sm:text-2xl font-bold text-center sm:text-left">
            Total: ₹{countTotalPrice()}
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-[#E0C080] text-black rounded hover:bg-black hover:text-[#E0C080] text-sm sm:text-base"
            >
              Clear Cart
            </button>
            <Link
              href="/products"
              className="px-4 py-2 bg-black text-[#E0C080] rounded hover:bg-[#E0C080] hover:text-black text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
