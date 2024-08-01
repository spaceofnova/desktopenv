import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { WindowManagerContext } from "@/providers/WindowManagerContext";
import { AppsContext } from "@/assets/apps";
import { useClickAway } from "@uidotdev/usehooks";

export const AppList = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const { addWindow } = useContext(WindowManagerContext);
  const { apps } = useContext(AppsContext);

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // @ts-ignore fuck you react types this works fine
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            bottom: 40,
            left: 0,
            width: 200,
            height: 400,
            backgroundColor: "var(--sys-color-background)",
            zIndex: 10,
          }}
        >
          {apps.map((app) => (
            <button
              key={app.name}
              style={{
                width: "100%",
                height: 32,
                alignItems: "center",
                display: "flex",
                gap: 10,
                padding: "0 10px",
              }}
              onClick={() => {
                addWindow(app.processID);
                setIsOpen(false);
              }}
            >
              <div>{app.icons?.scalable}</div>
              {app.name}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
