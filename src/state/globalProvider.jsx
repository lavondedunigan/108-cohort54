import { useState } from "react";
import DataContext from "./dataContext";

function GlobalStateProvider (props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Vonda"});

    function addProductToCart(product) {
    }

    function removeProductFromCart(product) {
    }

    function clearCart() {
    }

    return (
      <DataContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart, 
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart
     
      }}>
        {props.children}
      </DataContext.Provider>
    )

}
export default GlobalStateProvider;