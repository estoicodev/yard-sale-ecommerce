import PropTypes from 'prop-types'
import CartContainer from '../CartContainer'
import ProductDetail from '../ProductDetail'

function Main({
  children,
  isCartOpen,
  isProductDetailOpen,
  setIsProductDetailOpen,
  setIsCartOpen,
  productDetail,
  cartProducts,
  removeProductFromCart,
  updateCurrentOrder,
}) {
  return (
    <main className="flex flex-col w-full gap-y-10 max-w-2xl mx-auto py-14 px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative" id="main-container">
      <ProductDetail
        isOpen={isProductDetailOpen}
        setIsOpen={setIsProductDetailOpen}
        product={productDetail}
      />
      <CartContainer
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartProducts={cartProducts}
        removeProductFromCart={removeProductFromCart}
        updateCurrentOrder={updateCurrentOrder}
      />
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  isProductDetailOpen: PropTypes.bool.isRequired,
  setIsProductDetailOpen: PropTypes.func.isRequired,
  setIsCartOpen: PropTypes.func.isRequired,
  productDetail: PropTypes.object.isRequired,
  cartProducts: PropTypes.array.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  updateCurrentOrder: PropTypes.func.isRequired,
}

export default Main