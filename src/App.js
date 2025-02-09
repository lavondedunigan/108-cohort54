import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from './components/catalog';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from './components/about';
import Admin from './components/admin';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    
      <Catalog></Catalog>
      <About />
      <Admin />

      <Footer />
    </div>
  
  
  );
} 



export default App;
