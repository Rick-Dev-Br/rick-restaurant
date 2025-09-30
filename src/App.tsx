import { GlobalCss } from '../styles/GlobalStyles'
import { CartProvider } from './contexts/CartContext'
import AppRoutes from './routes'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'

function App() {
  return (
    <CartProvider>
      <GlobalCss />
      <AppRoutes />
      <CartSidebar />
      <Footer />
    </CartProvider>
  )
}

export default App
