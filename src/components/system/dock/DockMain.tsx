import React from "react";
import { AppIcon } from "../icon/AppIcon";
import { DateTime } from "./DateTime";
import { QSPanel } from "./pages/QSPanel";

const DockMain = () => {
  const [QSOpen, setQSOpen] = React.useState(false);
  return (
    <>
      <QSPanel isOpen={QSOpen} />
      <div
        style={{
          width: "100%",
          height: 32,
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          <AppIcon application={"system.terminal"} />
          <AppIcon application={"system.settings"} />
          <AppIcon application={"system.browser"} />
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            height: "100%",
            marginRight: 10,
            width: "5rem",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)",
            cursor: "pointer",
          }}
          onClick={() => setQSOpen(!QSOpen)}
        >
          <DateTime />
        </div>
      </div>
    </>
  );
};

export default DockMain;
