import CardsList from "../../components/CardsList"
import Card from "../../components/Card"
import PropTypes from "prop-types"
import { useEffect } from "react";

function All( { products, setProducts, onAddToCart, showProductDetail }) {
  useEffect(() => {
    setProducts([]);
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .catch(err=>console.error(err));
  }, [setProducts]);

  return (
    <>
      <CardsList>
        {products.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.image}
            price={product.price}
            title={product.title}
            onAddToCart={() => onAddToCart(product.id)}
            onClickImage={() => showProductDetail(product.id)}
          />
        ))}
      </CardsList>
    </>
  )
}

All.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  showProductDetail: PropTypes.func.isRequired,
}

export default All