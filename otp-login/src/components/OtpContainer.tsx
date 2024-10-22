import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingSuccess from "./LoadingSuccess";

const OtpContainer = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <motion.div className="h-[250px] w-[600px] bg-white/50 rounded-[45px] flex items-center justify-center p-2 font-geist transition-all">
      <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-white flex flex-col gap-5 p-6">
        <p className=" w-fit text-2xl font-bold text-neutral-600">Verify :</p>
        <div className="w-full h-fit flex items-center justify-between  gap-5 ">
          <input
            className="outline-none border-[2px] border-[#ced9e3] focus:border-[#605ae5] focus:ring-8 focus:ring-[#d2cff7] rounded-[30px] size-[115px] flex items-center justify-center text-center font-bold text-[60px]"
            type="text"
          />
          <input
            className="outline-none border-[2px] border-[#ced9e3] focus:border-[#605ae5] focus:ring-8 focus:ring-[#d2cff7] rounded-[30px] size-[115px] flex items-center justify-center text-center font-bold text-[60px]"
            type="text"
          />
          <input
            className="outline-none border-[2px] border-[#ced9e3] focus:border-[#605ae5] focus:ring-8 focus:ring-[#d2cff7] rounded-[30px] size-[115px] flex items-center justify-center text-center font-bold text-[60px]"
            type="text"
          />
          <input
            className="outline-none border-[2px] border-[#ced9e3] focus:border-[#605ae5] focus:ring-8 focus:ring-[#d2cff7] rounded-[30px] size-[115px] flex items-center justify-center text-center font-bold text-[60px]"
            type="text"
          />
        </div>
        <LoadingSuccess
          isLoading={isLoading}
          isSubmit={isSubmit}
          isSuccess={isSuccess}
        />
      </div>
    </motion.div>
  );
};

export default OtpContainer;
