import { AnimatePresence, motion } from "framer-motion";

export default function QuickSettings({ isOpen }: { isOpen: boolean }) {
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
            right: 8,
            width: 350,
            height: 300,
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
          QuickSettings
        </motion.div>
      )}
    </AnimatePresence>
  );
}
