import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

const OnlineStoreContext = createContext()

const OnlineStoreProvider = ( { children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // TODO: Add filtered products here [products, date, total
  const [cartProducts, setCartProducts] = useState([]); // TODO: Add cart products here
  const [countCartProducts, setCountCartProducts] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({});// TODO: Add product object here
  const [currentOrder, setCurrentOrder] = useState({}); // TODO: Add current order here [products, date, total]
  const [orderView, setOrderView] = useState({}); // TODO: Add order view here [products, date, total]
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isAllActive, setIsAllActive] = useState(true);
  const [isElectronicsActive, setIsElectronicsActive] = useState(false);
  const [isJewelryActive, setIsJewelryActive] = useState(false);
  const [isMensClothingActive, setIsMensClothingActive] = useState(false);
  const [isWomensClothingActive, setIsWomensClothingActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState(true);
  const [userAccount, setUserAccount] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(true); // TODO: Add loading products here [products, date, total

  useEffect(() => {
    // Recuperar los datos de localStorage cuando la aplicación se monte
    const storedUserData = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUserData !== null  || JSON.stringify(storedUserData) === "{}") {
      console.log(storedUserData);
      setUserAccount(storedUserData);
      console.log("User account: ", storedUserData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // const getOrdersFromLocalStorage = () => {
  //   const users = JSON.parse(localStorage.getItem("usersDb"));
  //   const user = users.find(user => user.email === userAccount.email);
  //   const tmpUser = { ...user };
  //   const { orders } = tmpUser;
  //   return orders;
  // }

  const updateOrderView = (orderId) => {
    const order = userAccount.orders.find(order => order.id === orderId);
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

  const updateUserAccount = ({ name, email, password }) => {
    const user = {
      name,
      email,
      password,
      orders: userAccount.orders,
    };
    setUserAccount(user);
    const newUsers = JSON.parse(localStorage.getItem("usersDb"));
    newUsers.splice(newUsers.findIndex(user => user.email === email), 1, user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("usersDb", JSON.stringify(newUsers));
  }

  const closeAllMenus = () => {
    setIsProfileMenuOpen(false);
    setIsMenuMobileOpen(false);
    setIsCartOpen(false);
  };

  const allNavInactive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
    closeAllMenus();
    setIsNavActive(false);
  }

  const onlyAllActive = () => {
    setIsAllActive(true);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
    setIsNavActive(true);
  }
  const onlyElectronicsActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(true);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
    setIsNavActive(true);
  }
  const onlyJewelryActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(true);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
    setIsNavActive(true);
  }
  const onlyMensClothingActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(true);
    setIsWomensClothingActive(false);
    setIsNavActive(true);
  }
  const onlyWomensClothingActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(true);
    setIsNavActive(true);
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const addOrder = (order) => {
    if (order.length === 0) return;
    if (order.products.length === 0) return;
    if (order.total === 0) return;
    if (!order.date) return;
    if (!order.id) return;

    console.log("Add order: ", order);
    // const { orders } = userAccount;
    const users = JSON.parse(localStorage.getItem("usersDb"));
    const usersWithoutCurrent = users.filter(user => user.email !== userAccount.email);
    const currentOrders = users.find(user => user.email === userAccount.email).orders;

    let newOrders = [];
    if (currentOrders.length === 0) {
      newOrders = [order];
    } else {
      newOrders = [...currentOrders, order];
    }
    
    // eslint-disable-next-line no-unused-vars
    const { orders, ...userWithoutOrders } = userAccount;
    const newUserAccount = { ...userWithoutOrders, orders: newOrders };

    console.log("New User Account: ", newUserAccount);

    setUserAccount(newUserAccount);

    localStorage.setItem("currentUser", JSON.stringify(newUserAccount));
    localStorage.setItem("usersDb", JSON.stringify([
      ...usersWithoutCurrent,
      newUserAccount,
    ]));

    setCartProducts([]);
    setCountCartProducts(0);
  }

  return (
    <OnlineStoreContext.Provider value={
      {
        userAccount,
        setUserAccount,
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
        updateUserAccount,
        addOrder,
        filteredProducts,
        setFilteredProducts,
        isProfileMenuOpen,
        setIsProfileMenuOpen,
        isMenuMobileOpen,
        setIsMenuMobileOpen,
        toggleProfileMenu,
        toggleMenuMobile,
        closeAllMenus,
        allNavInactive,
        onlyAllActive,
        onlyElectronicsActive,
        onlyJewelryActive,
        onlyMensClothingActive,
        onlyWomensClothingActive,
        isAllActive,
        isElectronicsActive,
        isJewelryActive,
        isMensClothingActive,
        isWomensClothingActive,
        isNavActive,
        setIsNavActive,
        loadingProducts,
        setLoadingProducts
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
