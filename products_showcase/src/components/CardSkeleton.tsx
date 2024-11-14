const CardSkeleton = () => {
  return (
    <div className="h-[300px] w-[400px] border rounded-[20px] flex flex-col overflow-hidden">
      <div className="w-full h-full bg-gray-200 overflow-hidden px-2 pt-2 animate-pulse"></div>
      <div className="w-full h-[80px] border-t px-4 py-2 flex flex-col gap-2">
        <p className="font-semibold text-xl w-60 h-6  bg-gray-200 animate-pulse"></p>
        <p className="font-semibold text-xl w-28 h-6  bg-gray-200 animate-pulse"></p>
      </div>
    </div>
  );
};

export default CardSkeleton;
