import React from "react";
import "./index.css";
import { Popup } from "./popup";
import installableApps from "@/store/apps";
import { motion } from "framer-motion";

const Store = () => {
  const [search, setSearch] = React.useState("");

  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupApp, setPopupApp] = React.useState<any>();
  const openPopup = (app: any) => {
    setPopupOpen(true);
    setPopupApp(app);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setPopupApp(undefined);
  };
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          width: "100%",
          margin: 6,
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          style={{ width: "calc(100% - 36px)" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {installableApps.map((app) => (
        <div
          key={app.processID}
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            width: "fit-content",
            height: "52px",
            padding: "6px",
            borderRadius: "6px",
            backgroundColor: "var(--sys-color-surface)",
          }}
          onClick={() => openPopup(app)}
        >
          {app.icons.scalable}
          <div>
            <div>{app.name}</div>
            <div>{app.description}</div>
          </div>
        </div>
      ))}
      {popupOpen && (
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
          <Popup app={popupApp} closePopup={closePopup} />
        </motion.div>
      )}
    </div>
  );
};

export default Store;
