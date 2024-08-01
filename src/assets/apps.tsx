import { BiSolidTerminal } from "react-icons/bi";
import Browser from "@/apps/browser";
import Settings from "@/apps/settings";
import { Icon } from "@/apps/settings/Icon";
import { WindowType } from "@/types/WindowTypes";
import { FaFirefoxBrowser, FaStore } from "react-icons/fa";
import Store from "@/apps/store";
import React, { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import installableApps from "@/store/apps";

const systemApps: WindowType[] = [
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
  {
    name: "Store",
    component: <Store />,
    processID: "system.store",
    icons: {
      scalable: <FaStore style={{ width: "85%", height: "85%" }} />,
    },
  },
];

export const AppsContext = React.createContext({
  apps: systemApps,
  installApp(_newapp: any) {},
  isAppInstalled: (_newapp: any) => false,
  uninstallApp: (_newapp: any) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [installedApps, setInstalledApps] = useLocalStorage<string[]>(
    "installedApps",
    []
  );
  const [apps, setApps] = React.useState(systemApps);

  useEffect(() => {
    const fetchApps = () => {
      installedApps.forEach((appID: string) => {
        const appData = installableApps.find((app: any) => app.id === appID);
        if (appData) {
          setApps([...apps, appData]);
        } else {
          console.log("App not found");
        }
      });
    };
    fetchApps();
  }, []);

  const installApp = (NewAppID: any) => {
    setInstalledApps([...installedApps, NewAppID]);
  };

  const isAppInstalled = (AppID: any) => {
    return AppID && installedApps.find((app: any) => app.id === AppID);
  };

  const uninstallApp = (NewAppID: any) => {
    setInstalledApps(installedApps.filter((app: any) => app.id !== NewAppID));
  };

  return (
    <AppsContext.Provider
      value={{
        apps,
        installApp,
        isAppInstalled,
        uninstallApp,
      }}
    >
      {children}
    </AppsContext.Provider>
  );
};

export default AppProvider;
