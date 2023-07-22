import PropTypes from 'prop-types'
import CartContainer from '../CartContainer'
import ProductDetail from '../ProductDetail'
import { useEffect } from 'react'
import { useOnlineStore } from '../../contexts'

function Main({ children }) {
  const { setProducts, setFilteredProducts } = useOnlineStore();
  useEffect(() => {
    setProducts([]);
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
        setProducts(json);
        setFilteredProducts(json);
        console.log(json);
      })
      .catch(err=>console.error(err));
  }, [setProducts, setFilteredProducts]);

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