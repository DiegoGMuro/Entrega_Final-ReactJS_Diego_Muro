import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FooterPag from "./components/FooterPag/FooterPag";
import Nosotros from "./components/Nosotros/Nosotros";

import Cart from "./components/Cart/Cart";              //

import { CartProvider } from "./context/CartContext";

/* import Checkout from "./components/Checkout/Checkout"; */




function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <CartProvider >

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/continente/:continenteId' element={<ItemListContainer />} />
            <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />

            <Route path='/cart' element={<Cart />} />

{/*              <Route path='/checkout' element={<Checkout/>} />    */}


            <Route path='*' element={<h1 className="color-error">404 NOT FOUND</h1>} />
          </Routes>

        </CartProvider>

      </BrowserRouter>
      <hr />
      <hr />
      <Carrusel />
      <hr />
      <hr />
      <FooterPag />
    </div>
  );
}

export default App;


