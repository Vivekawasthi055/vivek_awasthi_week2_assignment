import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default AppLayout;
