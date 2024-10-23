  const Circle = () => {
    return (
      <>
        <div className=" absolute top-0 left-0 -translate-x-20 -translate-y-24">
          <div className="size-[200px] rounded-full bg-white/20  pointer-events-none" />
        </div>
        <div className=" absolute bottom-0 right-0 translate-x-14 translate-y-14">
          <div className="size-[300px] rounded-full bg-white/15  pointer-events-none" />
        </div>
      </>
    );
  };

  export default Circle;
