import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/dataContext";


function Navbar() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;


  // calculates the number of products in the cart
  function getProdsInCart() {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
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
            <span className="badge text-bg-light">{getProdsInCart()}</span>
            View Cart
        </Link>


        <a className="user-info" href="#">
          <i class="i-user fa-solid fa-circle-user"></i>
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

/** 
 * in Cart page:
 * render a H3 with something like:
 * We have X products of products.
 * 
 * Where X is the number of products.
 * 
 * 
 * Connect to the context { remember 2 imports}
 * 
 * 
 */
