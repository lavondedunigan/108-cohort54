import { useState, useEffect } from "react";
import "./admin.css";
import dataService from "../service/dataService";

function Admin() {  
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
   });

  /**
   *
   * create the handleProduct fn
   * the fn should write to product object using the 3 steps
   *
   * to each input, assign the onBlur and a name
   *
   * when the save product button is clicked, call a saveProduct fn
   * the fn should console log the product var
   *
   *
   */
  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;

    

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);

  }

  function saveCoupon() {
    console.log(coupon);

    let valid = {...coupon};
    valid.discount = parseFloat(valid.discount);
    dataService.saveCoupon(valid);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  /**
   * 3 steps to modify Obj or Arrays in State vars:
   * - Create a copy
   * - Modify the copy
   * - Set the copy back
   */
 
  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;

  
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  async function saveProduct() {
    console.log(product);
    

    let validProd = {...setProduct};  
    validProd.price = parseFloat(validProd.price);
    let saveProd = await dataService.saveProduct(validProd);
    console.log(saveProd);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }


  async function loadProducts() {
    let data = await dataService.getProducts();
    setAllProducts(data);
  }
  

  async function loadCoupons() {
    let data = await dataService.loadCoupons();
    setAllCoupons(data);
  }


  useEffect(() => {
    loadProducts();
    loadCoupons();
  }, []);

  return (
    <div className="admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="prods">
          <h5> Manage Products</h5>

          <div>
            <label className="form-label">Title</label>
            <input type="text" className="from-control"onBlur={handleProduct} name="title"/>
          </div>

          <div>
            <label className="form-label">Price</label>
            <input type="number" className="from-control" onBlur={handleProduct} name="price"/>
          </div>

          <div>
            <label className="form-label">Image</label>
            <input type="text" className="from-control" onBlur={handleProduct} name="image" />
          </div>

          <div>
            <label className="form-label">Category</label>
            <input type="text" className="from-control" onBlur={handleProduct} name="category" />
          </div>

          <div className="controls">
            <button className="btn  btn-danger" onClick={saveProduct}>Save Product</button>
          </div>

          {allProducts.map(product => <li>{product.title} - {product.category} - ${product.price}</li>)}
        </div>

        <div className="cpns">
          <h5>Manage Coupons</h5>

          <div>
            <label className="form-label">Code</label>
            <input
              type="text"
              className="form-control"
              onBlur={handleCoupon}
              name="code"
            />
          </div>

          <div>
            <label className="form-label">"Discount"</label>
            <input
              type="number"
              className="form-control"
              onBlur={handleCoupon}
              name="discount"
            />
          </div>

          <div>
            <label className="form-label">"Product"</label>
            <input
              type="text"
              className="form-control"
              onBlur={handleCoupon}
              name="product"
            />
          </div>

          <div className="controls">
            <button className="btn btn-success" onClick={saveCoupon}>
              Save Coupon
            </button>
            <button className="btn btn-danger">Delete Coupon</button>
            <button className="btn btn-warning">Clear</button>
            <button className="btn btn-primary">Total Coupons</button>
          </div>

          {allCoupons.map(coupon => <li>{coupon.code} - {coupon.discount}%</li>)}
        </div>
      </div>
    </div>
  );
}

export default Admin;

/**
 * when the page load, call a function 
 * the function should use the DataService to get the prods from the server
 * put the prods on the allProducts state variable
 */