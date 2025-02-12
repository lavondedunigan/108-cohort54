import { startTransition } from "react";
import "./catalog.css";
import Product from "./products.jsx";

const catalog = [
    {
        "title": "Lavender",
        "image": "/images/lavender.jpg",
        "price": 44.90,
        "category": "flowers",
        _id: "1892389"
    },
    {
        "title": "Rare Antique",
        "image": "/images/rare antique.jpg",
        "price": 24.670,
        "category": "vases",
        _id: "344561x"
    },
    {

        "title": "Seed Containers",
        "image": "/images/containers.jpg",
        "price": 11.70,
        "category": "small containers",
        _id: "hxckskc"
    },
    {
        "title": "Miracle Gro",
        "image": "/images/miracle grow.jpg",
        "price": 11.70,
        "category": "miracle grow",
        _id: "hxckskc"
    },
    {
        "title": "Soil",
        "image": "/images/soil.jpg",
        "price": 11.70,
        "category": "soil/dirt",
        _id: "hxckskc"
    },
    {
        "title": "Melons",
        "image": "/images/watermelon.jpg",
        "price": 11.70,
        "category": "melon seeds",
        _id: "hxckskc"
    },
    {
        "title": "Flower Pots",
        "image": "/images/mexican pottery.jpg",
        "price": 11.70,
        "category": "garden pots",
        _id: "hxckskc"
    },
    {  
        "title": "Garden Shears",
        "image": "/images/garden shears.jpg",
        "price": 11.70,
        "category": "shears",
        _id: "hxckskc"
    }


];


const categories = ["flowers","vases", "seed container", "miracle grow", "soil", "seeds", "flower pots","garden shears"];


function Catalog() {
    return (
        <div className="catalog page">
            <h1>Check out our flowers and products.</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-outline-success
                ">{cat}</button> ) }
            </div>
            

        
            {catalog.map(prod => <Product data={prod} /> ) }
        </div>
        
        
        

    
    );

}

export default Catalog;
