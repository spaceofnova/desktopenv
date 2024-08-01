import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PrefrencesProvider from "@/providers/PrefrencesProvider.tsx";
import { HardwareProvider } from "@/providers/HardwareProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HardwareProvider>
    <PrefrencesProvider>
      <App />
    </PrefrencesProvider>
  </HardwareProvider>
);
