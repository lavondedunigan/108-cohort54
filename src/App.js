import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import Admin from "./components/admin";
import Home from "./components/home";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route className="end" top="/cart">View Cart</Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
