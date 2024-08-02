import { useContext } from "react";
import { WindowManagerContext } from "@/providers/WindowManagerContext";
import { BsQuestionCircle } from "react-icons/bs";
import { AppsContext } from "@/assets/apps";

export const AppIcon = ({
  application,
  style,
}: {
  application: string;
  style?: React.CSSProperties;
}) => {
  const { apps } = useContext(AppsContext);
  const { addWindow, windows } = useContext(WindowManagerContext);
  const isOpen = windows.find((w: any) => w.processID === application);
  const app = apps.find((app: any) => app.processID === application);

  return (
    app && (
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
        {app.icons?.scalable ? (
          app.icons.scalable
        ) : (
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
    )
  );
};
