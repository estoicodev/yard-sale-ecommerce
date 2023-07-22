import PropTypes from "prop-types";
import Icon from "../Icon";
import CardPayment from "../CardPayment";
import { useState, useEffect } from "react";
import { formatNumberWithComma } from "../../utils/format";
import { Link } from "react-router-dom";
import { useOnlineStore } from "../../contexts";

function CartContainer() {
  const {
    isCartOpen: isOpen,
    setIsCartOpen: setIsOpen,
    cartProducts,
    removeProductFromCart,
    updateCurrentOrder,
    setCartProducts,
    setCountCartProducts,
    closeAllMenus,
    allNavInactive
  } = useOnlineStore();

  const [totalCartPayment, setTotalCartPayment] = useState(0);

  useEffect(() => {
    const totalAmount = parseFloat(cartProducts.reduce((acc, product) => acc + product.price, 0));
    setTotalCartPayment(totalAmount);
  }, [cartProducts])

  const checkoutOrder = () => {
    updateCurrentOrder();
    closeAllMenus();
    allNavInactive();
  }

  const clearAllCartProducts = () => {
    setCartProducts([]);
    setCountCartProducts(0);
  }

  return (
    <aside className={`w-full max-w-lg h-auto flex flex-col items-center pb-8 pt-8 px-6 bg-white shadow overflow-y-hidden z-10 rounded-b-lg cart-container ${isOpen ? "fixed": "hidden"} right-0 top-12`}>
      <div className="w-full min-w-max max-w-md flex items-center mb-5 text-start cart__title">
        <Icon type="leftArrow" size={4} onClick={() => setIsOpen(false)} pointer />
        <h1 className="text-xl ml-4">My shopping cart</h1>
      </div>
      <button className={`${cartProducts.length === 0 ? "hidden": null} ${cartProducts.length > 1 ? "mb-3": null} ml-auto pr-4 xs:pr-9 text-base font-medium text-gray-900 hover:underline `} onClick={() => clearAllCartProducts()}>Clear All</button>
      <div className="w-full min-w-min max-w-md h-full max-h-40 sm:md:max-h-60 md:max-h-80 overflow-y-auto orders-container">
        {cartProducts.length > 0 ? cartProducts.map((product, idx) => (
          <CardPayment
            key={idx}
            title={product.title}
            imageSrc={product.image}
            price={product.price}
            onRemoveProduct={() => removeProductFromCart(product.id)}
          />
        )) : (<div className="text-center mt-4 text-base font-medium">Add your first product!</div>)}
      </div>
      <div className="w-full min-w-max max-w-md orders-checkout">
        <div className="grid grid-cols-2 gap-4 items-center bg-white mt-5 rounded-md px-4 orders-resume" id="orders-resume">
          <p className="text-start text-xl font-bold py-5"><span>Total</span></p>
          <p className="text-right text-lg font-bold py-5" id="total-order">$ {formatNumberWithComma(totalCartPayment.toFixed(2))}</p>
        </div>
        <Link
          to="/my-order"
          onClick={() => checkoutOrder()}
          className="flex justify-center items-center mt-5 mx-auto bg-[#acd9b2] text-white w-full max-w-sm h-14 border-none rounded-lg text-xl font-medium decoration-0 cursor-pointer btn button button__primary"
          id="checkout-btn"
        >
          Checkout
        </Link>
      </div>
    </aside>
  )
}

CartContainer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  cartProducts: PropTypes.array,
  removeProductFromCart: PropTypes.func,
  updateCurrentOrder: PropTypes.func,
}

export default CartContainer