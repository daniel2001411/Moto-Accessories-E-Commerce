
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';
import { OrderHistory } from './Components/OrderHistory'; 
import { ProductDetails } from './Components/ProductDetails'; 
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path='/orders' element={<OrderHistory />}></Route>
        <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart} />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
