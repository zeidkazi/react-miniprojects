import { ProductType } from "../App";

interface ProductCardType {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardType) => {
  return (
    <div className="h-[300px] w-[400px] border rounded-[20px] flex flex-col overflow-hidden">
      <div className="w-full h-full  overflow-hidden px-2 pt-2">
        <img className="w-full object-cover " src={product.images[0]} alt="" />
      </div>
      <div className="w-full h-[80px] border-t px-4 py-2 flex flex-col gap-2">
        <p className="font-semibold text-xl ">{product.title}</p>
        <p className="font-bold text-lg text-blue-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
