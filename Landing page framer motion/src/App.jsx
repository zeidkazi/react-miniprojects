import React from "react";
import Title from "./components/Title";
import Tiles from "./components/Tiles";

const App = () => {
  return (
    <>
      <div className="h-screen w-full  bg-[#111111] py-48 px-4 pb-4 text-white overflow-auto font-geist">
        <div className="h-fit w-full flex justify-end relative">
         <Title/>
         <Tiles/>
        </div>
      </div>
    </>
  );
};

export default App;
