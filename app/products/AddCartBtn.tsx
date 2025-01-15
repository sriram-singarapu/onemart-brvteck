"use client";
import { Product } from "./data";
import { useCart } from "../context/CartProvider";

interface AddCartBtnProps {
  product: Product;
}

const AddCartBtn: React.FC<AddCartBtnProps> = ({ product }) => {
  const { updateCart } = useCart();

  // Reusable add to cart logic
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the card
    updateCart(product, 1);
  };

  return (
    <button
      onClick={addToCart}
      className="px-6 py-2 bg-black text-[#E0C080] rounded hover:bg-[#E0C080] hover:text-black font-semibold lg:text-xl"
    >
      Add to Cart
    </button>
  );
};

export default AddCartBtn;
