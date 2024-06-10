import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Login from './components/LoginSignUp/Login.jsx'
import SignUp from './components/LoginSignUp/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Wishlist from './pages/Wishlist.jsx'
import SellerAd from './pages/SellerAd.jsx'
import Market from './pages/Market.jsx'
import OrderDetails from './components/Dashboarditems/Orders/OrderDetails/OrderDetail.jsx'
import Orders from './components/Dashboarditems/Orders/MyOrders/Orders.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'

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
        <Route path='/dashboard' element={<ProtectedRoute >
          <Dashboard />
        </ProtectedRoute>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/SellerAd' element={<SellerAd />} /> 
        <Route path='/market' element={<Market/>} />
        <Route path="/order/:id" element={<OrderDetails/>} />
        <Route path="/myorder" element={<Orders/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
