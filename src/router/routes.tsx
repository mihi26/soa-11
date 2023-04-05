import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import App from '../App'
import CartView from '../views/CartView/CartView'
import CheckoutView from '../views/CheckoutView/CheckoutView'
import HomeView from '../views/HomeView/HomeView'
import ListingView from '../views/ListingView/ListingView'
import NotFoundView from '../views/NotFoundView/NotFoundView'
import ProductView from '../views/ProductView/ProductView'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<HomeView />} />
      <Route path="cart" element={<CartView />} />
      <Route path="listing" element={<ListingView />} />
      <Route path="checkout" element={<CheckoutView />} />
      <Route path="product/:productId" element={<ProductView />} />
      <Route path="*" element={ <NotFoundView />} />
    </Route>
  ),{}
)
