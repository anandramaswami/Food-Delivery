import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestaurantMenu from './pages/RestaurantMenu'
import Cart from './pages/Cart'
import PaymentGateway from './pages/PaymentGateway'
import OrderSuccess from './pages/OrderSuccess'
import OrderHistory from './pages/OrderHistory'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { OrderProvider } from './context/OrderContext'
import Layout from './components/layout/Layout'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-dark">
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:id" element={<RestaurantMenu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/payment-gateway" element={<PaymentGateway />} />
                <Route path="/success" element={<OrderSuccess />} />
              </Route>
            </Routes>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
