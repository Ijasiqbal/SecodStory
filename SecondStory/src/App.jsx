import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Login from './components/LoginSignUp/Login.jsx'
import SignUp from './components/LoginSignUp/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<SignUp/>}/>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path='/dashboard' element={< Dashboard/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
