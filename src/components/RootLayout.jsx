import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      {/* placeholder for selected component */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
