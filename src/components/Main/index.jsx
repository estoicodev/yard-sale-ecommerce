import PropTypes from 'prop-types'
import CartContainer from '../CartContainer'
import ProductDetail from '../ProductDetail'

function Main({ children }) {
  return (
    <main className="flex flex-col w-full gap-y-8 max-w-2xl mx-auto py-14 px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative" id="main-container">
      <ProductDetail />
      <CartContainer />
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main