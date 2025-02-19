import { useState } from "react";
import"./quantityPicker.css";


function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);
    

    function increase() {
        const value = quantity + 1;
        setQuantity(value);
        props.onChange(value);  
    }

    function decrease() {
        if (quantity == 1) return;

        const value = quantity -1;
        setQuantity(value);
        props.onChange(value);
    }


    return ( 
        <div className="qt-picker">

        <button className="btn btn-sm btn-outline btn-warning"   disabled={quantity == 1} onClick={decrease}> - </button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={increase}> + </button>
        </div>
        
    );
}

export default QuantityPicker;


/**
 * When the user clicks on - button
 * call a decrease function
 * and decrease quantity by 1
 */