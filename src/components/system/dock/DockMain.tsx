import React from "react";
import { AppIcon } from "@/components/system/icon/AppIcon";
import { DateTime } from "./DateTime";
import { QSPanel } from "./pages/QSPanel";
import { AppList } from "./pages/AppList";
import { useBattery } from "@uidotdev/usehooks";
import { useFullscreen } from "rooks";

const DockMain = () => {
  const { supported, level } = useBattery();
  const { isFullscreenEnabled, toggleFullscreen } = useFullscreen();

  const [QSOpen, setQSOpen] = React.useState(false);
  const [appListOpen, setAppListOpen] = React.useState(false);

  const pinnedApps = ["system.store", "system.settings", "system.about"];

  return (
    <>
      <AppList isOpen={appListOpen} setIsOpen={setAppListOpen} />
      <QSPanel isOpen={QSOpen} setIsOpen={setQSOpen} />
      <div
        style={{
          width: "100%",
          height: 32,
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          backgroundColor: "var(--sys-color-background)",
          padding: "4px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            width: "100%",
            height: "100%",
          }}
        >
          <button onClick={() => setAppListOpen(!appListOpen)}>Apps</button>
          {pinnedApps.map((app) => (
            <AppIcon application={app} key={app} />
          ))}
        </div>
        <button
          style={{
            display: "flex",
            gap: 10,
            height: "100%",
            marginRight: 8,
            width: "5rem",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)",
          }}
          onClick={() => setQSOpen(!QSOpen)}
        >
          <DateTime />
          {supported && <p>{level}%</p>}
        </button>
        <button
          onClick={toggleFullscreen}
          style={{
            display: "flex",
            gap: 10,
            height: "100%",
            marginRight: 8,
            width: isFullscreenEnabled ? "8rem" : "5rem",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          {isFullscreenEnabled ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </>
  );
};

export default DockMain;
