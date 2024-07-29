import { useContext } from "react";
import { WindowManagerContext } from "../../providers/WindowManagerContext";
import Window from "../../window/Window";

const WindowManager = () => {
  const { windows }: { windows: any[] } = useContext(WindowManagerContext);
  return (
    <div
      style={{
        position: "fixed",
        top: 30,
        left: 0,
        width: "100vw",
        height: "calc(100vh - 30px)",
        zIndex: 100,
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
