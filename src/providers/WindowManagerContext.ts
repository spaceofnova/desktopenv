import React from "react";
import { WindowType } from "@/types/WindowTypes";

export const WindowManagerContext = React.createContext({
  windows: [{}],
  addWindow: (_windowID: string) => {},
  removeWindow: (_window: WindowType) => {},
  bringToFront: (_windowName: string) => {},
});
