import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider
      fallback={
        <div className="flex justify-center items-center h-48">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      }
    >
      <RouterProvider router={PublicRoute} />
    </AuthProvider>
  </StrictMode>
);
