import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Main from '../Main'
import PropTypes from 'prop-types'

function Layout( {
  countCartProducts,
  toggleCart,
  isCartOpen,
  setIsCartOpen,
  isProductDetailOpen,
  setIsProductDetailOpen,
  productDetail,
  cartProducts,
  removeProductFromCart,
  updateCurrentOrder,
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white/80">
      <Header countCartProducts={countCartProducts} toggleCart={toggleCart}/>
      <Main
        isCartOpen={isCartOpen}
        isProductDetailOpen={isProductDetailOpen}
        setIsProductDetailOpen={setIsProductDetailOpen}
        setIsCartOpen={setIsCartOpen}
        productDetail={productDetail}
        cartProducts={cartProducts}
        removeProductFromCart={removeProductFromCart}
        updateCurrentOrder={updateCurrentOrder}
      >
        <Outlet />
      </Main>
    </div>
  )
}

Layout.propTypes = {
  countCartProducts: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  isProductDetailOpen: PropTypes.bool.isRequired,
  setIsProductDetailOpen: PropTypes.func.isRequired,
  productDetail: PropTypes.object.isRequired,
  cartProducts: PropTypes.array.isRequired,
  setIsCartOpen: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  updateCurrentOrder: PropTypes.func.isRequired,
}

export default Layout