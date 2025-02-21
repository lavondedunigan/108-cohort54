import { useContext, useState } from "react";
import react from "react";
import"./products.css";
import QuantityPicker from "./quantityPicker";
import DataContext from "../state/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const addProductToCart = useContext(DataContext).addProductToCart;
    

    function add() {
        /**
        * create a new object (prodForCart)
        * should have everything that props.data contains
        * and should also have quantity
        * 
        * send that obj to the global add
        */
        let prodForCart = {
            ...props.data,
            quantity: quantity
        };

        addProductToCart(prodForCart); 
    }
    function handleQuantity(qty) {
        console.log("quantity changed", qty);
        setQuantity(qty);
    }

    return (
        <div className="product">

            <img src={props.data.image} alt=""></img>
           
            <h4>{props.data.title}</h4>

        <div className="prices">
            <label className="total">${props.data.price * quantity}</label>
            <label className="price">${props.data.price}</label>
        </div>

        <div className= "controls">
            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <button onClick={add} className="btn btn-sm btn info">
                <i class="fa-solid fa-cart-plus"></i>
                Add
            </button>
                
        </div>  
    </div>    
    );

}

export default Product;