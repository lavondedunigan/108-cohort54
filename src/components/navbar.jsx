import { useContext } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";

function Navbar() {

    const user = useContext(DataContext).user

  return (
    <div>
      <nav id="test">
        <div className="navbar-menu">
          <span className="title">Organika</span>
          <Link to="./home">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="about">About</Link>
          <Link to="admin">Admin</Link>
          <Link to="/cart">Cart</Link>

          <Link className="end" to="/cart">View Cart</Link>
          <a className="user-info" href="#">
              <i class="i=user fa solid fa-circle-user"></i>
              {user.name}
            </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

/***
 * create an About page
 * cerate the basic component on the jsx
 * render a H1 with your name
 * render a h5 with your email
 *
 *
 * on app.js
 * render About below <Catalog>
 *
 */
