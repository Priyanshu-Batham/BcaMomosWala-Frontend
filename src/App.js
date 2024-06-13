import './style/app.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer'
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
