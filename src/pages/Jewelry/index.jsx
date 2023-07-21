import CardsList from "../../components/CardsList"
import Card from "../../components/Card"
import { useEffect } from "react";
import { useOnlineStore } from "../../contexts";

function Jewelry() {
  const { products, setProducts, addProductToCart, showProductDetail } = useOnlineStore();

  useEffect(() => {
    setProducts([]);
    fetch('https://fakestoreapi.com/products/category/jewelery')
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
            onAddToCart={() => addProductToCart(product.id)}
            onClickImage={() => showProductDetail(product.id)}
          />
        ))}
      </CardsList>
    </>
  )
}

export default Jewelry