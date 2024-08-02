import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PrefrencesProvider from "@/providers/PrefrencesProvider.tsx";
import { HardwareProvider } from "@/providers/HardwareProvider.tsx";
import AppProvider from "./assets/apps.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HardwareProvider>
    <PrefrencesProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </PrefrencesProvider>
  </HardwareProvider>
);
