import ProductsClient from "./ProductsClient";
import { products, categories } from "./data";

export const metadata = {
  title: "Products | OneMart - Construction Materials Supplier",
  description:
    "Discover a wide selection of construction materials at OneMart. Quality products for all your building and construction needs.",
  openGraph: {
    title: "Products | OneMart - Construction Materials Supplier",
    description:
      "Discover a wide selection of construction materials at OneMart. Quality products for all your building and construction needs.",
    url: "https://onemart.com/products",
    siteName: "OneMart",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Our Products at OneMart",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | OneMart - Construction Materials Supplier",
    description:
      "Discover a wide selection of construction materials at OneMart. Quality products for all your building and construction needs.",
    images: "/logo.png",
    creator: "@yourtwitterhandle",
  },
};

const Products = () => {
  return <ProductsClient products={products} categories={categories} />;
};

export default Products;
