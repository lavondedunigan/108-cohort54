import"./products.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {


    function add() {
        console.log("clicked")
    }


    return (
        <div className="product">

            <img src={props.data.image} alt=""></img>
           
            <h4>{props.data.title}</h4>

            <label>{props.data.price}</label>

            <div className= "controls">
            <QuantityPicker></QuantityPicker>

            <button onClick={add} className="btn btn-sm btn info">Add</button>
        </div>
    </div>    
    );

}

export default Product;

/**
* when closed, call add function
* function should console log any message
*
*/