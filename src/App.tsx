import DockMain from "./components/system/dock/DockMain";
import MenubarMain from "./components/system/menubar/MenubarMain";
import Wallpaper from "./components/system/wallpaper/wallpaper";
import WindowManager from "./components/system/windowmanager/WindowManager";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <MenubarMain />
      <DockMain />
      <WindowManager />
      <Wallpaper />
    </div>
  );
}

export default App;
