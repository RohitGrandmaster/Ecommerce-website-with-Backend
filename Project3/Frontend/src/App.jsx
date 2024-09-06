import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Border, ProductForm, Product, ShoppingCart, Login, Signup, AdminCart, AdminLogin, BorderImage } from "./index";

function Main({ cartItems, setCartItems }) {
  return (
    <>
      <Border cartItemCount={cartItems.length} />
      <Product cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

function Main2({ cartItems }) {
  return (
    <>
      <Border cartItemCount={cartItems.length} />
      <ProductForm />
    </>
  );
}

function Main3() {
  return (
    <>
      <Border  />
      <BorderImage/>
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/border" element={<Main3 />} />
          <Route path="/store" element={<Main2 cartItems={cartItems} />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admincart" element={<AdminCart />} />
          <Route
            path="/home"
            element={<Main cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
