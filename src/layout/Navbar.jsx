import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="../public/logo.png" alt="logo" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Entry</NavLink>
        </li>
        <li>
          <NavLink to="/view">View Entries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
