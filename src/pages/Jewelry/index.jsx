import CardsList from "../../components/CardsList"
import Card from "../../components/Card"
import Searcher from "../../components/Searcher";
import { useOnlineStore } from "../../contexts";

function Jewelry() {
  const { filteredProducts, addProductToCart, showProductDetail } = useOnlineStore();

  return (
    <>
      <Searcher />
      <CardsList>
        {filteredProducts.filter((product) => product.category === "jewelery").map((product) => (
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