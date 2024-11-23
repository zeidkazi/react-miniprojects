import { AnimatePresence, motion } from "motion/react";
import Background from "./components/Background";
import { useState } from "react";
import Drawer from "./components/Drawer";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div className="h-dvh max-h-screen flex items-center justify-center font-geist overflow-hidden">
      <Background />
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-6xl font-bold">Drawer.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDrawerOpen(true)}
          className="text-lg px-4 py-2 rounded-3xl border bg-white"
        >
          Open Drawer
        </motion.button>
      </div>
      <AnimatePresence mode="wai  t">
        {isDrawerOpen && <Drawer setDrawer={setIsDrawerOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
