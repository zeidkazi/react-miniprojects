import { useState } from "react";
import { ProductType } from "../App";
import { AnimatePresence, motion } from "motion/react";

interface ProductCardType {
  product: ProductType;
  setSelectedCard: (product: ProductType) => void;
}

const ProductCard = ({ product, setSelectedCard }: ProductCardType) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <motion.div
      key={product.id}
      layoutId={`card-container-${product.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCard(product)}
      className="h-[300px] w-[400px] border rounded-[20px] flex flex-col overflow-hidden shadow-md"
    >
      <motion.div
        className={`w-full h-full  overflow-hidden px-2 pt-2 ${
          !imageLoaded ? "bg-gray-200 animate-pulse" : " "
        }`}
      >
        <img
          onLoad={() => setImageLoaded(true)}
          className={`w-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } `}
          src={product.images[0]}
          alt={product.title}
        />
      </motion.div>
      <motion.div className="w-full h-[80px] border-t px-4 py-2 flex flex-col gap-2">
        <motion.p
          layoutId={`card-title-${product.id}`}
          className="font-semibold text-xl text-ellipsis text-nowrap overflow-hidden "
        >
          {product.title}
        </motion.p>
        <motion.p
          layoutId={`card-price-${product.id}`}
          className="font-bold text-lg text-blue-600"
        >
          ${product.price}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
