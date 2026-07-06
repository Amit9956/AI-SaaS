import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { SettingsProvider } from "./context/SettingsContext"; // ✅ Add this
import AuthProvider from "./context/AuthContext";
import { ResumeProvider } from "./context/ResumeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <SettingsProvider>  {/* ✅ Add SettingsProvider here */}
          <ResumeProvider>
            <App />
          </ResumeProvider>
        </SettingsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);