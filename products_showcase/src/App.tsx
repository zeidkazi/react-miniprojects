import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { RefreshCcw } from "lucide-react";
import CardSkeleton from "./components/CardSkeleton";
import CardModal from "./components/CardModal";
import { AnimatePresence } from "motion/react";

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
  const [selectedCard, setSelectedCard] = useState<ProductType | null>(null);

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
      <div className="flex items-center justify-center text-5xl font-bold mb-2 mt-2">
        Product Showcase
      </div>
      <div className="flex justify-end -translate-x-36 pb-5">
        <button
          onClick={refreshProducts}
          disabled={isLoading}
          className="px-4 py-2 border rounded-3xl bg-blue-500 text-white  flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCcw
            size={19}
            className={`shrink-0 ${isLoading ? "animate-spin " : ""}`}
          />
          <span>Refresh</span>
        </button>
      </div>
      {isLoading ? (
        <>
          <div className="w-full flex flex-wrap items-center justify-center gap-5">
            {Array(6)
              .fill(null)
              .map((_) => (
                <CardSkeleton />
              ))}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {products.map((product) => (
            <ProductCard product={product} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {selectedCard && (
          <CardModal product={selectedCard} setSelectedCard={setSelectedCard} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
