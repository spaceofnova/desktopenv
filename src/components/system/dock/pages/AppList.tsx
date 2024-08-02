import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { WindowManagerContext } from "@/providers/WindowManagerContext";
import { AppsContext } from "@/assets/apps";
import { useClickAway } from "@uidotdev/usehooks";
import "./applist.css";
import { WindowType } from "@/types/WindowTypes";

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
            gap: 0,
            bottom: 40,
            left: 0,
            width: 200,
            height: 400,
            backgroundColor: "var(--sys-color-background)",
            zIndex: 10,
          }}
        >
          {apps.map((app: WindowType) => (
            <div
              className="tab"
              key={app.name}
              onClick={() => {
                addWindow(app.processID);
                setIsOpen(false);
              }}
            >
              <div
                style={{
                  marginLeft: 10,
                }}
              >
                {app.icons?.scalable}
              </div>
              {app.name}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
