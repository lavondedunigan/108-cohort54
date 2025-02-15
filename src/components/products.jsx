import { useState } from "react";
import react from "react";
import"./products.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    console.log("props... ", props);
    
    function add() {
        console.log("clicked");
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

            <button onClick={add} className="btn btn-sm btn info">Add</button>
                <i class="i= add fa-solid fa-cart-plus"></i>
        </div>  
    </div>    
    );

}

export default Product;