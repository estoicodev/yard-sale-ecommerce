import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { OnlineStoreProvider } from "./contexts/useOnlineStore"
import Layout from "./components/Layout"
import All from "./pages/All"
import Electronics from "./pages/Electronics"
import Jewelry from "./pages/Jewelry"
import MensClothing from "./pages/MensClothing"
import WomensClothing from "./pages/WomensClothing"
import MyAccount from "./pages/MyAccount"
import EditAccount from "./pages/EditAccount"
import MyOrders from "./pages/MyOrders"
import MyOrder from "./pages/MyOrder"
import MyOrderView from "./pages/MyOrderView"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PasswordRecovery from "./pages/PasswordRecovery"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <OnlineStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<All />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="mens-clothing" element={<MensClothing />} />
            <Route path="womens-clothing" element={<WomensClothing />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="edit-account" element={<EditAccount />} />
            <Route path="my-order" element={<MyOrder />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-order-view" element={<MyOrderView />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='password-recovery' element={<PasswordRecovery />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </OnlineStoreProvider>
  )
}

export default App
