import { BiSolidTerminal } from "react-icons/bi";
import Browser from "@/apps/browser";
import Settings from "@/apps/settings";
import { WindowType } from "@/types/WindowTypes";
import { FaFirefoxBrowser, FaStore } from "react-icons/fa";
import Store from "@/apps/store";
import React, { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import installableApps from "@/store/apps";
import { MdError, MdQuestionMark, MdSettings } from "react-icons/md";

const systemApps: WindowType[] = [
  {
    name: "Not Found",
    component: <div>Not Found</div>,
    processID: "system.unknown",
    hidden: true,
    icons: {
      scalable: <MdError style={{ width: "100%", height: "100%" }} />,
    },
  },
  {
    name: "About",
    component: <div>About</div>,
    processID: "system.about",
    icons: {
      scalable: <MdQuestionMark style={{ width: "100%", height: "100%" }} />,
    },
  },
  {
    name: "Settings",
    component: <Settings />,
    processID: "system.settings",
    icons: {
      scalable: <MdSettings style={{ width: "100%", height: "100%" }} />,
    },
  },
  {
    name: "Browser",
    component: <Browser />,
    processID: "system.browser",
    icons: {
      scalable: <FaFirefoxBrowser style={{ width: "100%", height: "100%" }} />,
    },
  },
  {
    name: "Terminal",
    component: <div>Terminal</div>,
    processID: "system.terminal",
    icons: {
      scalable: <BiSolidTerminal style={{ width: "100%", height: "100%" }} />,
    },
  },
  {
    name: "Store",
    component: <Store />,
    processID: "system.store",
    icons: {
      scalable: <FaStore style={{ width: "100%", height: "100%" }} />,
    },
  },
];

export const AppsContext = React.createContext({
  apps: systemApps,
  installApp() {},
  isAppInstalled: () => false,
  uninstallApp: () => {},
} as {
  apps: WindowType[];
  installApp: (NewAppID: string) => void;
  isAppInstalled: (AppID: string) => boolean;
  uninstallApp: (AppID: string) => void;
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
        const appData = installableApps.find(
          (app: any) => app.processID === appID
        );
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
    if (installedApps.find((app: any) => app.processID === NewAppID)) {
      return console.log("App already installed");
    }
    setInstalledApps([...installedApps, NewAppID]);

    setApps([
      // @ts-expect-error
      ...apps,
      // @ts-expect-error
      installableApps.find((app: WindowType) => app.processID === NewAppID),
    ]);
  };

  const isAppInstalled = (AppID: string) => {
    if (installedApps.includes(AppID)) {
      return true;
    }
    return false;
  };

  const uninstallApp = (AppID: string) => {
    console.log(installedApps);
    if (!isAppInstalled(AppID)) {
      return console.log("App not installed");
    }
    setInstalledApps(
      installedApps.filter((app: any) => app.processID === AppID)
    );
    setApps(apps.filter((app: WindowType) => app.processID !== AppID));
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

export const useAppInstall = (appID: string) => {
  const { apps, installApp, uninstallApp } = React.useContext(AppsContext);
  const [installing, setInstalling] = React.useState(false);

  const isInstalled = () => {
    if (apps.find((app: WindowType) => app.processID === appID)) {
      return true;
    }
    return false;
  };

  const install = () => {
    if (isInstalled()) {
      return console.log("App already installed");
    }
    setInstalling(true);
    setTimeout(() => {
      setInstalling(false);
      installApp(appID);
    }, 1000);
  };

  const uninstall = () => {
    if (!isInstalled()) {
      return console.log("App not installed");
    }
    setInstalling(true);
    setTimeout(() => {
      setInstalling(false);
      uninstallApp(appID);
    }, 1000);
  };

  return { isInstalled, install, uninstall, installing };
};
