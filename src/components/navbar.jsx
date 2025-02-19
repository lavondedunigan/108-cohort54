import { useContext } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getProdsInCart() {
      let sum = 0;

      for (let i = 0; i < cart.length; i++) {
        let prod = cart[i];
        sum += prod.quantity;
        }
      }


      return sum;
    
    }

    function getUserOptions() {

      }

  return (
    <div>
      <nav id="test">
        <div className="navbar-menu">
          <span className="title">Organika</span>
          <Link to="./home">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="about">About</Link>
          <Link to="admin">Admin</Link>
        

          <Link className="end" to="/cart">
            <span class="badge rounded-pill text-bg-success">Success</span>
          </Link> 
        </div>
      </nav>
    </div>
  );


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

