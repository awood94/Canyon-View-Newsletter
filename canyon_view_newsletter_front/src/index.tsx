import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CanyonViewHome } from "./screens/CanyonViewHome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CanyonViewHome />
  </StrictMode>,
);
