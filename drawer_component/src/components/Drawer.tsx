import { animate } from "motion";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

interface DrawerPropType {
  setDrawer: (arg: boolean) => void;
}

const Drawer = ({ setDrawer }: DrawerPropType) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ translateY: 0 });
  }, []);

  return (
    <div
      onClick={() => setDrawer(false)}
      className="absolute inset-0 bg-black/20 flex items-end justify-center overflow-hidden"
    >
      <motion.div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        initial={{ translateY: "100%" }}
        animate={controls}
        exit={{ translateY: "100%" }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
        className="bg-white w-full h-full max-h-96 px-4 py-2 flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-tr-2xl"
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0}
        onDragEnd={(event, info) => {
          const threshold = 200;
          const velocity = 100;
          if (info.offset.y > threshold || info.velocity.y > velocity) {
            setDrawer(false);
          } else {
            controls.start({
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.2,
              },
            });
          }
          console.log(info.offset.y, info.velocity.y);
        }}
      >
        <div className="w-10 h-2 rounded-lg bg-gray-200"></div>
        <div className="w-full max-w-lg h-full flex flex-col items-start gap-4">
          <p className="text-gray-500 font-bold">Drawer component.</p>
          <p className="text-gray-500">Inspired by Emil Kowalski</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Drawer;
