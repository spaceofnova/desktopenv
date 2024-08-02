import React, { useContext, useEffect } from "react";
import { AppIcon } from "@/components/system/icon/AppIcon";
import { DateTime } from "./DateTime";
import { QSPanel } from "./pages/QSPanel";
import { AppList } from "./pages/AppList";
import { useBattery } from "@uidotdev/usehooks";
import { useFullscreen } from "rooks";
import { WindowManagerContext } from "@/providers/WindowManagerContext";
import { WindowType } from "@/types/WindowTypes";
import Network from "./Network";

const DockMain = () => {
  const { supported, level } = useBattery();
  const { isFullscreenEnabled, toggleFullscreen } = useFullscreen();
  const { windows }: { windows: WindowType[] } =
    useContext(WindowManagerContext);

  const [QSOpen, setQSOpen] = React.useState(false);
  const [appListOpen, setAppListOpen] = React.useState(false);

  const pinnedApps = ["system.store", "system.settings", "system.about"];
  const [openApps, setOpenApps] = React.useState<any[]>([]);
  useEffect(() => {
    setOpenApps(
      windows.filter((window) => !pinnedApps.includes(window.processID))
    );
  }, [windows]);
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
          zIndex: 200,
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
          {openApps.map((app) => (
            <AppIcon application={app.processID} key={app.processID} />
          ))}
        </div>
        <button
          style={{
            display: "flex",
            gap: 10,
            height: "100%",
            marginRight: 8,
            width: supported ? "8rem" : "5rem",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)",
          }}
          onClick={() => setQSOpen(!QSOpen)}
        >
          <DateTime />
          <Network />
          {supported && <p>{level && level * 100}%</p>}
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
