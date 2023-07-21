import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

const OnlineStoreContext = createContext()

const OnlineStoreProvider = ( { children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Mauricio Carrasco",
    email: "estoicodev@gmail.com",
    password: "123456",
  }); // TODO: Add user info here [name, email, password]
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // TODO: Add filtered products here [products, date, total
  const [cartProducts, setCartProducts] = useState([]); // TODO: Add cart products here
  const [countCartProducts, setCountCartProducts] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});// TODO: Add product object here
  const [myOrders, setMyOrders] = useState([]); // TODO: Add my orders here [products, date, total]
  const [currentOrder, setCurrentOrder] = useState({}); // TODO: Add current order here [products, date, total]
  const [orderView, setOrderView] = useState({}); // TODO: Add order view here [products, date, total]

  useEffect(() => {
    setProducts([]);
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
        setProducts(json);
        setFilteredProducts(json);
      })
      .catch(err=>console.error(err));
  }, []);

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
    <OnlineStoreContext.Provider value={
      {
        userInfo,
        setUserInfo,
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        countCartProducts,
        setCountCartProducts,
        isProductDetailOpen,
        setIsProductDetailOpen,
        isCartOpen,
        setIsCartOpen,
        productDetail,
        setProductDetail,
        myOrders,
        setMyOrders,
        currentOrder,
        setCurrentOrder,
        orderView,
        setOrderView,
        updateCurrentOrder,
        updateOrderView,
        toggleProductDetail,
        toggleCart,
        removeProductFromCart,
        addProductToCart,
        showProductDetail,
        updateUserInfo,
        addOrder,
        filteredProducts,
        setFilteredProducts,
      }
    }>
      {children}
    </OnlineStoreContext.Provider>

  )
}

OnlineStoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { OnlineStoreProvider, OnlineStoreContext }
