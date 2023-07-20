/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Icon from "../Icon";
import { formatNumberWithComma } from "../../utils/format";
import { useState } from "react";

function ProductDetail({ isOpen, setIsOpen, product }) {
  const [isActiveImageOne, setIsActiveImageOne] = useState(true);
  const [isActiveImageTwo, setIsActiveImageTwo] = useState(false);
  const [isActiveImageThree, setIsActiveImageThree] = useState(false);

  return (
    <aside className={`w-full max-w-lg h-[94%] max-h-max bg-white shadow rounded-bl-lg z-10 overflow-y-auto product-detail ${isOpen ? "fixed": "hidden"} right-0 top-12`}>
      <div className="grid place-items-center absolute top-5 left-4 z-20 rounded-full bg-slate-50 p-3 cursor-pointer icon-close-container">
        <Icon type="close" size={8} onClick={() => setIsOpen(false)} rounded/>
      </div>
      <figure className="w-full h-full max-h-96 relative product-image-container">
        <img src={product.image} alt={product.title} className="w-full h-full rounded-s-2xl object-cover product__image" />
      </figure>
      <ul className="flex justify-center my-4 mx-6 points">
        <li className={`w-2 h-2 mr-2 rounded-full bg-[#c7c7c7] list-none ${isActiveImageOne ? "bg-gray-500" : ""}`}></li>
        <li className={`w-2 h-2 mr-2 rounded-full bg-[#c7c7c7] list-none ${isActiveImageTwo ? "bg-gray-500" : ""}`}></li>
        <li className={`w-2 h-2 mr-2 rounded-full bg-[#c7c7c7] list-none ${isActiveImageThree ? "bg-gray-500" : ""}`}></li>
      </ul>
      <div className="w-full flex flex-col px-5 text-lg product-info">
        <span className="mb-1 text-[#232830] font-bold product-info__price">$ {formatNumberWithComma(product.price)}</span>
        <span className="mb-5 text-gray-500 font-medium product-info__name">{product.title}</span>
        <p className="text-[#8c8c8c] text-base product-info__description">{product.description}</p>
        <button className="flex justify-center items-center my-5 bg-[#acd9b2] text-white font-bold w-full h-12 border-none rounded-xl text-lg decoration-0 button button__primary" id="button-add-to-cart">
          <Icon type="addToCart" fill="white"/>
          Add to cart
        </button>
      </div>
    </aside>
)
}

ProductDetail.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  }),
}

export default ProductDetail