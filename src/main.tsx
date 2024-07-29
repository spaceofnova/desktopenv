import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PrefrencesProvider from "./components/providers/PrefrencesProvider.tsx";
import WindowManagerProvider from "./components/providers/WindowManagerProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrefrencesProvider>
    <WindowManagerProvider>
      <App />
    </WindowManagerProvider>
  </PrefrencesProvider>
);
