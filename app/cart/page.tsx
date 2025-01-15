import type { Metadata } from "next";
import Cart from "./Cart";

export const metadata: Metadata = {
  title: "Your Cart - OneMart",
  description:
    "Review the items in your cart and proceed to checkout for your construction materials order. Secure your high-quality materials with ease at OneMart.",
  openGraph: {
    title: "Your Cart - OneMart",
    description:
      "Review the items in your cart and proceed to checkout for your construction materials order. Secure your high-quality materials with ease at OneMart.",
    url: "https://www.onemart.com/cart",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OneMart Cart",
      },
    ],
  },
  twitter: {
    title: "Your Cart - OneMart",
    description:
      "Review the items in your cart and proceed to checkout for your construction materials order. Secure your high-quality materials with ease at OneMart.",
    images: "/logo.png",
  },
};

const CartPage = () => {
  return <Cart />;
};

export default CartPage;
