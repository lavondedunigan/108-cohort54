import "./catalog.css";
import Product from "./products";

const catalog = [
    {
        "title": "Lavender",
        "image": "/images/lavender.jpg",
        "price": 44.90,
        "category": "flowers",
        _id: "1892389"
    },
    {
        "title": "Lilac and Willow",
        "image": "/images/lilac and willow.jpg",
        "price": 24.670,
        "category": "flowers",
        _id: "344561"
    },
    {
        "title": "Miracle Grow",
        "image": "/images/miracle grow.jpg",
        "price": 11.70,
        "category": "plant food",
        _id: "hxckskc"
    },
    {
        "title": "Lilly",
        "image": "/images/lilly.jpg",
        "price": 11.70,
        "category": "flowers",
        _id: "hxckskc"
    },
    {
        "title": "Lilly",
        "image": "/images/lilly.jpg",
        "price": 11.70,
        "category": "flowers",
        _id: "hxckskc"
    },
    {
        "title": "Lilly",
        "image": "/images/lilly.jpg",
        "price": 11.70,
        "category": "flowers",
        _id: "hxckskc"
    }



];


const categories = ["flowers","vases", "plant food", "miracle grow", "soil","seeds"];


function Catalog() {
    return (
        <div className="catalog page">
            <h1>Check our flowers and products.</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-outline-success">{cat}</button> ) }
            </div>
            

        
            {catalog.map(prod => <Product data={prod} /> ) }
        </div>
        
        
        

    
    );

}

export default Catalog;
