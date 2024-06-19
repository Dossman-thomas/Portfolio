import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <ul className="nav d-flex align-items-center justify-content-between">
        <div>
          <li>
            <NavLink exact to="/" id="dev-name">
              Tom Dossman
            </NavLink>
          </li>
        </div>
        <div className="d-flex gap-5">
          <li>
            <NavLink to="/portfolio" className="text text-decoration-none ">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="text text-decoration-none">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text text-decoration-none">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
