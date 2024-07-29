import { useState } from "react";
import { WindowType } from "../../types/WindowTypes";
import { WindowManagerContext } from "./WindowManagerContext";
import { apps } from "../../assets/apps";

const WindowManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(0);

  const addWindow = (windowID: string) => {
    let window = apps.find((app) => app.processID === windowID);
    if (!window) {
      window = apps[0];
    }

    setWindows((prevWindows) => {
      const existingWindowIndex = prevWindows.findIndex(
        (w) => w.processID === window.processID
      );

      if (existingWindowIndex !== -1) {
        // Window already exists, toggle its minimized state
        return prevWindows.map((w, index) =>
          index === existingWindowIndex ? { ...w, minimized: !w.minimized } : w
        );
      } else {
        // Window doesn't exist, add it to the array
        setMaxZIndex(maxZIndex + 1);
        return [...prevWindows, { ...window, zIndex: maxZIndex + 1 }];
      }
    });
  };

  const bringToFront = (windowID: string) => {
    setWindows((prevWindows) => {
      const newMaxZIndex = maxZIndex + 1;
      setMaxZIndex(newMaxZIndex);
      return prevWindows.map((w) =>
        w.processID === windowID ? { ...w, zIndex: newMaxZIndex } : w
      );
    });
  };

  const removeWindow = (window: WindowType) => {
    setWindows(windows.filter((w) => w.name !== window.name));
  };

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        removeWindow,
        addWindow,
        bringToFront,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
};

export default WindowManagerProvider;
