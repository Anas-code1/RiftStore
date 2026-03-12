import { useState } from "react";
import PopularProducts from "./components/Home/PopularProducts";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { CartContext } from "./contextAPIs";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(false);

  const handleInc = (product, amount = 1) => {
    const prod = cartItems.find((item) => item._id === product._id);

    // if product doesn't exists in cart
    if (!prod) {
      // 1. Removed the 'return' from here!
      setCartItems((prev) => [...prev, { ...product, qty: amount }]);
    } else {
      // 2. Added an 'else' block for existing items
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty + amount : item.qty,
      }));
      setCartItems(_items);
    }

    // 3. Now the code will ALWAYS reach this point and show the toast!
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  const handleDec = (product) => {
    const prod = cartItems.find((item) => item._id === product._id);
    if (prod && prod.qty > 1) {
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty - 1 : item.qty,
      }));
      return setCartItems(_items);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec, toast }}>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetail} exact />
        <Route path="/cart" component={Cart} exact />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
