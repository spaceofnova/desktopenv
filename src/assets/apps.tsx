import Browser from "../apps/browser";
import Settings from "../apps/settings";
import { Icon } from "../apps/settings/Icon";
import { WindowType } from "../types/WindowTypes";

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
  },
];
