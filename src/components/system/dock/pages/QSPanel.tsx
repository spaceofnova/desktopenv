import { useClickAway } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";

export const QSPanel = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // @ts-ignore fuck you react types this works fine
          ref={ref}
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
            bottom: 40,
            right: 0,
            width: 300,
            height: "calc(100% - 40px)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            backgroundColor: "var(--sys-color-background)",
          }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
