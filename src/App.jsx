import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { useState } from "react"

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Mauricio Carrasco",
    email: "estoicodev@gmail.com",
    password: "123456",
  }); // TODO: Add user info here [name, email, password]
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]); // TODO: Add cart products here
  const [countCartProducts, setCountCartProducts] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});// TODO: Add product object here
  const [myOrders, setMyOrders] = useState([]); // TODO: Add my orders here [products, date, total]
  const [currentOrder, setCurrentOrder] = useState({}); // TODO: Add current order here [products, date, total]
  const [orderView, setOrderView] = useState({}); // TODO: Add order view here [products, date, total]

  const updateCurrentOrder = () => {
    if (cartProducts.length === 0) return;

    const totalAmount = parseFloat(cartProducts.reduce((acc, product) => acc + product.price, 0));
    setCurrentOrder({
      products: [...cartProducts],
      date: new Date(),
      total: totalAmount,
    });

    console.log("Update current order: ", {
      products: [...cartProducts],
      date: new Date(),
      total: totalAmount,
    });
  }

  const updateOrderView = (orderId) => {
    const order = myOrders.find(order => order.id === orderId);
    setOrderView(order);
  }

  const toggleProductDetail = () => {
    setIsProductDetailOpen(!isProductDetailOpen);
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  const removeProductFromCart = (id) => {
    const cartProductsCopy = [...cartProducts];
    const productId = cartProductsCopy.findIndex(product => product.id === id);
    console.log("Remove product from cart: ", cartProductsCopy[productId]);

    cartProductsCopy.splice(productId, 1);
    setCartProducts(cartProductsCopy);
    setCountCartProducts(countCartProducts - 1);
  }

  const addProductToCart = (id) => {
    const productId = products.findIndex(product => product.id === id);
    setCartProducts([...cartProducts, products[productId]]);
    console.log("Add product to cart: ", products[productId]);
    setCountCartProducts(countCartProducts + 1);
  }

  const showProductDetail = (id) => {
    // TODO: Show product detail page of the clicked product
    const productId = products.findIndex(product => product.id === id);
    setProductDetail(products[productId]);
    toggleProductDetail();
  }

  const updateUserInfo = ({ name, email, password }) => {
    setUserInfo({
      name,
      email,
      password,
    });
  }

  const addOrder = (order) => {
    if (order.length === 0) return;
    if (order.products.length === 0) return;
    if (order.total === 0) return;
    if (!order.date) return;
    if (!order.id) return;

    console.log("Add order: ", order);
    setMyOrders([...myOrders, order]);
    setCartProducts([]);
    setCountCartProducts(0);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout
            countCartProducts={countCartProducts}
            toggleCart={toggleCart}
            isCartOpen={isCartOpen}
            isProductDetailOpen={isProductDetailOpen}
            setIsProductDetailOpen={setIsProductDetailOpen}
            setIsCartOpen={setIsCartOpen}
            productDetail={productDetail}
            cartProducts={cartProducts}
            removeProductFromCart={removeProductFromCart}
            updateCurrentOrder={updateCurrentOrder}
          />} >
            <Route index element={<All
              products={products}
              setProducts={setProducts}
              onAddToCart={addProductToCart}
              showProductDetail={showProductDetail}
              />}
            />
            <Route path="electronics" element={<Electronics
              products={products}
              setProducts={setProducts}
              onAddToCart={addProductToCart}
              showProductDetail={showProductDetail}
              />}
            />
            <Route path="jewelry" element={<Jewelry
              products={products}
              setProducts={setProducts}
              onAddToCart={addProductToCart}
              showProductDetail={showProductDetail}
              />}
            />
            <Route path="mens-clothing" element={<MensClothing
              products={products}
              setProducts={setProducts}
              onAddToCart={addProductToCart}
              showProductDetail={showProductDetail}
              />}
            />
            <Route path="womens-clothing" element={<WomensClothing
              products={products}
              setProducts={setProducts}
              onAddToCart={addProductToCart}
              showProductDetail={showProductDetail}
              />}
            />
            <Route path="my-account" element={<MyAccount
              userInfo={userInfo}
              />}
            />
            <Route path="edit-account" element={<EditAccount
              updateUserInfo={updateUserInfo}
              />}
            />
            <Route path="my-order" element={<MyOrder
              cartProducts={cartProducts}
              countCartProducts={countCartProducts}
              addOrder={addOrder}
              />}
            />
            <Route path="my-orders" element={<MyOrders myOrders={myOrders} updateOrderView={updateOrderView}/>} />
            <Route path="my-order-view" element={<MyOrderView orderView={orderView}/>} />

          </Route>
          <Route path='login' element={<Login />} />
          <Route path='password-recovery' element={<PasswordRecovery />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
