import { BiSolidTerminal } from "react-icons/bi";
import Browser from "../apps/browser";
import Settings from "../apps/settings";
import { Icon } from "../apps/settings/Icon";
import { WindowType } from "../types/WindowTypes";
import { FaFirefoxBrowser } from "react-icons/fa";

export const apps: WindowType[] = [
  {
    name: "Not Found",
    component: <div>Not Found</div>,
    processID: "system.unknown",
    hidden: true,
  },
  {
    name: "About",
    component: <div>About</div>,
    processID: "system.about",
  },
  {
    name: "Settings",
    component: <Settings />,
    processID: "system.settings",
    icons: {
      scalable: <Icon />,
    },
  },
  {
    name: "Browser",
    component: <Browser />,
    processID: "system.browser",
    icons: {
      scalable: <FaFirefoxBrowser style={{ width: "85%", height: "85%" }} />,
    },
  },
  {
    name: "Terminal",
    component: <div>Terminal</div>,
    processID: "system.terminal",
    icons: {
      scalable: <BiSolidTerminal style={{ width: "85%", height: "85%" }} />,
    },
  },
];
