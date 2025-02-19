import { useContext } from "react"; 
import "./cart.css";
import DataContext from "../state/dataContext";

function Cart() {

    let cart = useContext(DataContext).cart;
    

    function Cart() {
        return (
            <div className="cart">
                <h1>Ready to complete the order?</h1>
            </div>
        );
    return (
        <div className="cart">
           <h1>Ready to complete the order?</h1>
        </div>
    )

}

export default Cart;