import { useState } from "react";
import"./quantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    

    function increase() {
        const value = quantity + 1;
        setQuantity(value);   
    }

    function decrease() {
        if (quantity == 1) return;

        const value = quantity -1;
        setQuantity(value);
    }


    return ( 
        <div className="qt-picker">

        <button className="btn btn-sm btn-outline btn-primary"   disabled={quantity == 1} onClick={decrease}> - </button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-outline" onClick={increase}> + </button>

        </div>
    );
}

export default QuantityPicker;


/**
 * When the user clicks on - button
 * call a decrease function
 * and decrease quantity by 1
 */