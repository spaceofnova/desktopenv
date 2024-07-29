import { AnimatePresence, motion } from "framer-motion";

export const QSPanel = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            x: 400,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: 400,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
            duration: 0.3,
          }}
          style={{
            position: "fixed",
            bottom: 48,
            right: 8,
            width: 300,
            height: 400,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
