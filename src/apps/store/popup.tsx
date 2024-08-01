import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppsContext } from "@/assets/apps";

export const Popup = ({
  app,
  closePopup,
  isOpen,
}: {
  app: any;
  closePopup: () => void;
  isOpen: boolean;
}) => {
  const { installApp, isAppInstalled, uninstallApp } = useContext(AppsContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
            duration: 0.3,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "var(--sys-color-background)",
            zIndex: 10,
          }}
        >
          <button onClick={closePopup}>
            <FaTimes style={{ width: "100%", height: "100%" }} />
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                width: "100%",
                padding: 6,
              }}
            >
              <img
                src={app.icons.scaleable}
                alt={app.name}
                style={{ width: "100px" }}
              />
              <div>
                <div>{app.name}</div>
                <div>{app.description}</div>
              </div>
            </div>
            {isAppInstalled(app.id) ? (
              <button onClick={() => uninstallApp(app.id)}>Uninstall</button>
            ) : (
              <button onClick={() => installApp(app.id)}>Install</button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
