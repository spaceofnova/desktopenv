import React from "react";
import { PrefrencesContext } from "@/providers/PrefrencesContext";

const Wallpaper = () => {
  const { preferences } = React.useContext(PrefrencesContext);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "black",
      }}
    >
      <img
        id="wallpaper"
        src={`${preferences.wallpaper}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -10,
          transition: "opacity 0.5s",
          opacity: 0,
        }}
        onLoad={() => {
          (
            document.getElementById("wallpaper") as HTMLImageElement
          ).style.opacity = "1";
        }}
        alt={preferences.wallpaper}
      />
    </div>
  );
};

export default Wallpaper;
