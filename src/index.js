import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// 👇️ IMPORTANT: div ID has to match with index.html
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
