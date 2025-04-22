import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}
