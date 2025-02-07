import "./catalog.css";
import Product from "./products";

const catalog = [
    {
        "title": "Spring poppies",
        "image": "/images/watermelon.jpg",
        "price": 44.90,
        "category": "flowers",
        _id: "1892389"
    },
    {
        "title": "Coffee",
        "image": "/images/watermelon.jpg",
        "price": 24.670,
        "category": "beverages",
        _id: "344561"
    },
    {
        "title": "Banana",
        "image": "/images/watermelon.jpg",
        "price": 11.70,
        "category": "fruits",
        _id: "hxckskc"
    }
];


const categories = ["fruits","beverages", "merchandise", "dairy and eggs"];


function Catalog() {
    return (
        <div className="catalog page">
            <h1>Check our fresh products.</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-outline-success">{cat}</button> ) }
            </div>
            

        
            {catalog.map(prod => <Product data={prod} /> ) }
        </div>
        
        
        

    
    );

}

export default Catalog;
