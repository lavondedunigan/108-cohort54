import { useContext } from "react";
import "./cart.css";
import DataContext from "../state/dataContext";

function Cart() {
  let cart = useContext(DataContext).cart;

  function calculateNumProds() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  }

  function getTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
       
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Ready to complete the order?</h1>
      <h3>We have {calculateNumProds()} products ready for you</h3>

      <div className="parent">
        <div className="prods">
          {cart.map((prod) => (
            <div className="prod-in-cart">
              <img src={prod.image} alt=""></img>
              <h5>{prod.title}</h5>

              <label>${prod.price.toFixed(2)}</label>
              <label>{prod.quantity}</label>
              <label>${prod.price * prod.quantity}</label>

              <div className="side-menu">
                <h3>Order Total</h3>
                <h5>${getTotal()}</h5>

                <button className="btn btn-sm btn-info">
                  <i class="fa-solid fa-cart-plus"></i>
                  Add More Products
                </button>
                <button className="btn btn-sm btn-primary">
                  <i class="fa-solid fa-trash"></i>
                  Delete Products
                </button>
                <button className="btn btn-sm btn-light">
                  <i class="fa-solid fa-check"></i>
                  Complete Order
                </button>
                <button className="btn btn-sm btn-danger">
                  <i class="fa-solid fa-xmark"></i>
                  Cancel Order
                </button>
                <button className="btn btn-sm btn-light">
                  <i class="fa-solid fa-eye"></i>
                  View Order Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
