import AppProvider from "@/assets/apps";
import WindowManagerProvider from "@/providers/WindowManagerProvider";
import DockMain from "@/components/system/dock/DockMain";
import Wallpaper from "@/components/system/wallpaper/wallpaper";
import WindowManager from "@/components/system/windowmanager/WindowManager";

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
      <AppProvider>
        <WindowManagerProvider>
          <DockMain />
          <WindowManager />
          <Wallpaper />
        </WindowManagerProvider>
      </AppProvider>
    </div>
  );
}

export default App;
