import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductsContext from "./contexts/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* providing context store to App */}
    <ProductsContext>
      <App />
    </ProductsContext>
  </StrictMode>
);
