import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Travel Journal Logs. All rights reserved.</p>
        <ul className="footer-links">
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
      </div>
    </footer>
  );
};
export default Footer;
