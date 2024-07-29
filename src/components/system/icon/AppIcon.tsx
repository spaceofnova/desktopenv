import { useContext } from "react";
import { WindowManagerContext } from "../../providers/WindowManagerContext";
import { apps } from "../../../assets/apps";
import { BsQuestionCircle } from "react-icons/bs";

export const AppIcon = ({
  application,
  style,
}: {
  application: string;
  style?: React.CSSProperties;
}) => {
  const { addWindow, windows } = useContext(WindowManagerContext);
  const isOpen = windows.find((w: any) => w.processID === application);
  const app = apps.find((app) => app.processID === application);

  return (
    <div
      onClick={() => addWindow(application)}
      style={{
        aspectRatio: 1,
        height: "100%",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {app?.icons?.scalable ?? (
        <BsQuestionCircle
          style={{
            width: "80%",
            height: "80%",
          }}
        />
      )}
      <span
        style={{
          position: "absolute",
          bottom: -5,
          left: "50%",
          transform: "translateX(-50%)",
          width: isOpen ? "75%" : "0%",
          height: "7%",
          borderRadius: "12px",
          backgroundColor: "white",
          transition: "width 0.2s ease-in-out",
        }}
      ></span>
    </div>
  );
};
