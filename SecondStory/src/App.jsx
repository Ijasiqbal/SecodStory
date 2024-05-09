import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>

      
    </>
  )
}

export default App
