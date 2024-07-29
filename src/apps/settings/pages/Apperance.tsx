import { useContext } from "react";
import { walls } from "../../../assets/walls";
import { PrefrencesContext } from "../../../components/providers/PrefrencesContext";

const AppearanceModifier = () => {
  const { preferences, updatePrefrence } = useContext(PrefrencesContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        Transparency Effects
        <label className="switch">
          <input
            checked={preferences.transparencyEffects}
            type="checkbox"
            onChange={(e) =>
              updatePrefrence("transparencyEffects", e.target.checked)
            }
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {walls.map((wall) => (
          <div
            key={wall.name}
            style={{
              width: "100%",
              maxWidth: 200,
              aspectRatio: 16 / 9,
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              (
                document.getElementById("wallpaper") as HTMLImageElement
              ).style.opacity = "0";
              setTimeout(() => {
                updatePrefrence("wallpaper", wall.url);
              }, 200);
            }}
          >
            <img src={wall.preview} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppearanceModifier;
