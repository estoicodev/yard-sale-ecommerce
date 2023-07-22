import CardsList from "../../components/CardsList"
import Card from "../../components/Card"
import Searcher from "../../components/Searcher";
import { useOnlineStore } from "../../contexts";
import { useEffect } from "react";

function All() {
  const { filteredProducts, addProductToCart, showProductDetail, onlyAllActive } = useOnlineStore();

  useEffect(() => {
    onlyAllActive();
  }, [onlyAllActive]);

  return (
    <>
      <Searcher />
      <CardsList>
        {filteredProducts.map((product) => (
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

export default All