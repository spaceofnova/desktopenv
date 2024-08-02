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
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "var(--sys-color-background)",
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            No notifications yet{" "}
          </div>
          <div
            style={{
              width: "98%",
              marginBottom: 5,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 2fr))",
              gap: 10,
            }}
          >
            <button style={{ width: "100%" }}>Button Label</button>
            <button style={{ width: "100%" }}>Button Label</button>
            <button style={{ width: "100%" }}>Button Label</button>
            <button style={{ width: "100%" }}>Button Label</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
