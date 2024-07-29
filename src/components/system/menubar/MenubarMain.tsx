import { useEffect, useState } from "react";
import "./menubar.css";
import AppsList from "./menubarPopups/AppsList";
import QuickSettings from "./menubarPopups/QS";

export default function MenubarMain() {
  const [appsListOpen, setAppsListOpen] = useState(false);
  const [qsOpen, setQsOpen] = useState(false);

  const handleDocumentClick = (e: MouseEvent | any) => {
    if (e.target?.className !== "menubar-item") {
      setAppsListOpen(false);
      setQsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [appsListOpen]);
  return (
    <div className="menubar-main">
      <p
        className="menubar-item"
        onClick={() => setAppsListOpen(!appsListOpen)}
      >
        Apps List
      </p>
      <p
        className="menubar-item"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Time
      </p>
      <p className="menubar-item" onClick={() => setQsOpen(!qsOpen)}>
        Quick Settings
      </p>
      <AppsList isOpen={appsListOpen} />
      <QuickSettings isOpen={qsOpen} />
    </div>
  );
}
