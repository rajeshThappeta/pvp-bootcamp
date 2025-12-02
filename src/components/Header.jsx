import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="test1">
            Test1
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products-store">
            ProductsStore
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
