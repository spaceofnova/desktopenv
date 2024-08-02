import React from "react";
import { WindowType } from "@/types/WindowTypes";

export const WindowManagerContext = React.createContext({
  windows: [] as WindowType[],
  addWindow: (_windowID: string) => {},
  removeWindow: (_window: WindowType) => {},
  bringToFront: (_windowName: string) => {},
});
