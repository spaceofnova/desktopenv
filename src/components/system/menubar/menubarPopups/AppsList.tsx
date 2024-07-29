import { AnimatePresence, motion } from "framer-motion";
import { apps } from "../../../../assets/apps";
import { useContext } from "react";
import { WindowManagerContext } from "../../../providers/WindowManagerContext";

export default function AppsList({ isOpen }: { isOpen: boolean }) {
  const { addWindow } = useContext(WindowManagerContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            position: "fixed",
            top: 40,
            left: 8,
            width: 400,
            height: 500,
            borderRadius: 12,
            border: "1px solid var(--sys-color-surface)",
            backgroundColor: "var(--sys-color-background)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 8,
            zIndex: 100000,
          }}
        >
          {apps.map((app) => (
            <div
              key={app.processID}
              style={{ width: "50%", cursor: "pointer" }}
              onClick={() => addWindow(app.processID)}
            >
              {app.name}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
