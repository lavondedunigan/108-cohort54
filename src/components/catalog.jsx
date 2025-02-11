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
        "title": "Rare Antique",
        "image": "/images/lilac and willow.jpg",
        "price": 24.670,
        "category": "vases",
        _id: "344561x"
    },
    {

        "title": "Miracle Grow",
        "image": "/images/miracle grow.jpg",
        "price": 11.70,
        "category": "plant growth",
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
        "image": "/images/.jpg",
        "price": 11.70,
        "category": "soil/dirt",
        _id: "hxckskc"
    },
    {
        "title": "Melons",
        "image": "/images/watermelon.jpg",
        "price": 11.70,
        "category": "seeds",
        _id: "hxckskc"
    },
    {
        "title": "Flower Pots",
        "image": "/images/lilly.jpg",
        "price": 11.70,
        "category": "garden pots",
        _id: "hxckskc"
    },
    {  
        "title": "Garden Shears",
        "image": "/images/lilly.jpg",
        "price": 11.70,
        "category": "shears",
        _id: "hxckskc"
    }


];


const categories = ["flowers","vases", "seed container", "miracle grow", "soil","seeds"];


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
