import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import LoadingSuccess from "./LoadingSuccess";

const OtpContainer = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const run = () => {
    setIsSubmit(true);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false); // Hide spinner after 2 seconds
    }, 3000);

    // Show success after 4 seconds
    setTimeout(() => {
      setIsSuccess(true);
    }, 4000);

    // Start exit animations after 6 seconds
    setTimeout(() => {
      setIsSuccess(false); // Start exit animation for tick mark
    }, 6000);

    setTimeout(() => {
      setIsSubmit(false); // Start exit animation for tick mark
    }, 7000);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = e.target;
    const val = value.substring(value.length - 1); //if multiple added only consider the last one
    const newOtp: string[] = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    //focus calc
    if (val && index < otp.length - 1) setActiveOTPIndex(index + 1);

    //submit trigger
    const combinedOtp = newOtp.join("");
    console.log(otp.length);
    console.log(combinedOtp.length);
    if (combinedOtp.length === otp.length) {
      run();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { key } = e;
    if (key === "Backspace" && !otp[index] && index > 0) {
      setActiveOTPIndex(index - 1);
    }
  };

  const handleOnClick = (index: number) => {
    inputRefs.current[index]?.setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[activeOTPIndex]?.focus();
  }, [activeOTPIndex]);

  return (
    <motion.div className="h-[250px] w-[600px] bg-white/50 rounded-[45px] flex items-center justify-center p-2 font-geist transition-all">
      <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-white flex flex-col gap-5 p-6">
        <p className=" w-fit text-2xl font-bold text-neutral-600">Verify :</p>
        <div className="w-full h-fit flex items-center justify-between  gap-5 ">
          {otp.map((_, index) => (
            <input
              ref={(inputElement) => (inputRefs.current[index] = inputElement)}
              key={index}
              value={otp[index]}
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              onClick={() => handleOnClick(index)}
              className="outline-none border-[2px] border-[#ced9e3] focus:border-[#605ae5] focus:ring-8 focus:ring-[#d2cff7] rounded-[30px] size-[115px] flex items-center justify-center text-center font-bold text-[60px]"
              type="tel"
            />
          ))}
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
