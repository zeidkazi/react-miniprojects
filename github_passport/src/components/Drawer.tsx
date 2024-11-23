import { motion } from "motion/react";

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
      className="absolute inset-0 bg-black/20 flex items-end justify-center"
    >
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
        className="bg-white  w-full h-96"
      ></motion.div>
    </div>
  );
};

export default Drawer;
