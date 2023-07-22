import CardsList from "../../components/CardsList"
import Card from "../../components/Card"
import Searcher from "../../components/Searcher";
import { useOnlineStore } from "../../contexts";
import { useEffect } from "react";

function MensClothing() {
  const { filteredProducts, addProductToCart, showProductDetail, onlyMensClothingActive } = useOnlineStore();

  useEffect(() => {
    onlyMensClothingActive();
  }, [onlyMensClothingActive]);

  return (
    <>
      <Searcher />
      <CardsList>
        {filteredProducts.filter((product) => product.category === "men's clothing").map((product) => (
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

export default MensClothing