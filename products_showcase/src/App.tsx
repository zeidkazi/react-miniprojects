import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/smartphones?&limit=6&skip=${currentPage}`
      );
      const data = await response.json();
      setProducts(data?.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const refreshProducts = () => {
    setCurrentPage((prev) => prev + 6);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  console.log(currentPage, products);

  return (
    <div className="w-full min-h-screen mx-auto p-2 font-geist">
      <div className="flex items-center justify-center text-5xl font-bold mb-12">
        Product Showcase
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-5">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
