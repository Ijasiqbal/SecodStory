import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import Login from "./components/LoginSignUp/Login.jsx";
import SignUp from "./components/LoginSignUp/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SellerAd from "./pages/SellerAd.jsx";
import ChatWidget from "./components/ChatWidget/index.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listed-product" element={<SellerAd />} />
        </Routes>
      </Router>
      <ChatWidget />
    </>
  );
}

export default App;
