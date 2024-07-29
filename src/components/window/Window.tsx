import { Rnd } from "react-rnd";
import "./window.css";
import { PrefrencesContext } from "../providers/PrefrencesContext";
import React from "react";
import { icons } from "../../assets/Icons";
import { apps } from "../../assets/apps";
import { WindowType } from "../../types/WindowTypes";
import { WindowManagerContext } from "../providers/WindowManagerContext";

const Window = ({
  id,
  minimized,
  zIndex,
}: {
  id: string;
  minimized?: boolean;
  zIndex: number;
}) => {
  const { preferences } = React.useContext(PrefrencesContext);
  const { removeWindow, bringToFront } = React.useContext(WindowManagerContext);
  const [process, setProcess] = React.useState<WindowType | undefined>();
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setProcess({
      ...apps.find((app) => app.processID === id)!,
    });
    setLoading(false); // TODO: Fix loading
    setOpen(true);
  }, []);

  const handleWindowClick = () => {
    bringToFront(id);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      removeWindow(process!);
    }, 200);
  };

  return (
    <Rnd
      default={{
        x: 200,
        y: 200,
        width: 500,
        height: 500,
      }}
      style={{
        zIndex,
        opacity: open ? 1 : 0,
      }}
      onMouseDown={handleWindowClick}
      minWidth={300}
      minHeight={300}
      dragHandleClassName="draggable"
      className={`window  ${
        preferences.transparencyEffects && "transparencyEnabled"
      }`}
      // bounds={"parent"}
    >
      <div className="header window-header draggable">
        <div className="title">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "80%",
              aspectRatio: 1,
              marginRight: 4,
            }}
          >
            {process?.icons?.scalable}{" "}
          </div>
          {process?.name} {minimized && "MINIMIZED"}
        </div>
        <div className="controls">
          <button className="close" onClick={handleClose}>
            {
              icons.find((icon) => icon.name === preferences.iconPack)?.icons
                .close
            }
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        </div>
      ) : (
        <div className="window-content">
          {process?.component ?? <>Not Found</>}
        </div>
      )}
    </Rnd>
  );
};

export default Window;
