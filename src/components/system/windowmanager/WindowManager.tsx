import { useContext } from "react";
import { WindowManagerContext } from "@/providers/WindowManagerContext";
import Window from "@/components/window/Window";

const WindowManager = () => {
  const { windows }: { windows: any[] } = useContext(WindowManagerContext);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      }}
    >
      {windows.map((window) => (
        <Window
          id={window.processID}
          minimized={window.minimized}
          key={window.processID}
          zIndex={window.zIndex}
        />
      ))}
    </div>
  );
};

export default WindowManager;
