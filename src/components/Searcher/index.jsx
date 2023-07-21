import { useOnlineStore } from "../../contexts"

function Searcher() {
  const { products, setFilteredProducts } = useOnlineStore();

  return (
    <input
      type="search"
      className="w-full max-w-xs h-12 bg-[#f7f7f7] text-black text-base outline-none border-gray-500 px-4 border-2 rounded-lg focus:bg-opacity-60 mx-auto mt-8"
      placeholder="Search a product"
      onChange={(e) => {
        console.log(e.target.value);
        if (e.target.value.length > 0) {
          const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
          setFilteredProducts(filteredProducts);
        } else {
          setFilteredProducts(products);
        }
      }}
    />
  )
}

export default Searcher