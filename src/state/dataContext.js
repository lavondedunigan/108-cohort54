import { createContext } from "react";

/**
 * its a promise of the data structure that will be shared
 * interface of the data that will be shared
 * blueprint of the data that will be shared
 */
const DataContext = createContext({   // Create a context object//    
    cart: [],
    user: [],

    addProductToCart: (product) => {},
    removeProductFromCart: (product) => {},
    clearCart: () => {},
});

export default DataContext;            // Export the context object//


