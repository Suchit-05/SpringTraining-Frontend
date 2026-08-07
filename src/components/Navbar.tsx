import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SpringMIT</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">Customers</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;