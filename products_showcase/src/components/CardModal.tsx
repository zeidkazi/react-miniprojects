import { useState } from "react";
import { ProductType } from "../App";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ModalType {
  product: ProductType;
  setSelectedCard: (product: ProductType | null) => void;
}

const CardModal = ({ product, setSelectedCard }: ModalType) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCard(null)}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <motion.div
        layoutId={`card-container-${product.id}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl h-[500px] w-full flex flex-col"
      >
        <div
          className={`relative w-full h-full max-h-[250px]  overflow-hidden px-2 pt-2 ${
            !imageLoaded ? "bg-gray-200 animate-pulse" : " "
          }`}
        >
          <img
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full  object-contain  transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } `}
            src={product.images[currentImageIndex]}
            alt={product.title}
          />
          {product.images.length > 1 && (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextImage}
                className="absolute top-24 right-8 p-2 rounded-full bg-gray-200"
              >
                <ArrowRight className="text-slate-600" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevImage}
                className="absolute top-24 left-8 p-2 rounded-full bg-gray-200"
              >
                <ArrowLeft className="text-slate-600" />
              </motion.div>
            </>
          )}
        </div>
        <motion.div className="border-t p-6 ">
          <motion.h2
            layoutId={`card-title-${product.id}`}
            className="text-3xl font-bold mb-4"
          >
            {product.title}
          </motion.h2>
          <motion.p className="text-gray-600 mb-4">
            {product.description}
          </motion.p>
          <motion.p
            layoutId={`card-price-${product.id}`}
            className="text-2xl font-bold text-blue-600 mb-4"
          >
            ${product.price.toFixed(2)}
          </motion.p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold">
            Add to Cart
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardModal;
