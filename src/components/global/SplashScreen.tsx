import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Fingerprint from "./Fingerprint";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2400);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="overflow-hidden w-full h-full fixed z-50">
          <>
            <motion.div
              exit={{ transform: "translateX(-100%)" }}
              transition={{ duration: 1 }}
              className="bg-black absolute top-0 bottom-0 left-0 right-1/2"
            ></motion.div>

            <motion.div
              exit={{ transform: "translateX(100%)" }}
              transition={{ duration: 1 }}
              className="bg-black absolute top-0 bottom-0 right-0 left-1/2"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
            >
              <Fingerprint />
            </motion.div>
          </>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
