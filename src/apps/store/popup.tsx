import { FaTimes } from "react-icons/fa";
import { useAppInstall } from "@/assets/apps";

export const Popup = ({
  app,
  closePopup,
}: {
  app: any;
  closePopup: () => void;
}) => {
  const { isInstalled, install, uninstall, installing } = useAppInstall(
    app.processID
  );
  return (
    <>
      <button onClick={closePopup}>
        <FaTimes style={{ width: "100%", height: "100%" }} />
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            width: "100%",
            padding: 6,
          }}
        >
          <img
            src={app.icons.scaleable}
            alt={app.name}
            style={{ width: "100px" }}
          />
          <div>
            <div>{app.name}</div>
            <div>{app.description}</div>
          </div>
        </div>
        {isInstalled() ? (
          <button onClick={uninstall}>Uninstall</button>
        ) : (
          <button onClick={install}>Install</button>
        )}
        {installing ? "Installing..." : ""}
      </div>
    </>
  );
};
