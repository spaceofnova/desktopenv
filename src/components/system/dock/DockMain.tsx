import { AppIcon } from "../icon/AppIcon";

const DockMain = () => {
  return (
    <div
      style={{
        height: 32,
        padding: "8px 12px",
        backgroundColor: "var(--sys-color-background)",
        border: "1px solid var(--sys-color-surface)",
        borderRadius: "12px",
        zIndex: 960,
        position: "absolute",
        bottom: 4,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <AppIcon application={"system.settings"} />
    </div>
  );
};

export default DockMain;
