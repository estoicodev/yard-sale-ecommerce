import PropTypes from "prop-types"
import CardPayment from "../../components/CardPayment";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { formatNumberWithComma } from "../../utils/format";

function MyOrderView({
  orderView,
}) {

  return (
    <section className="w-full max-w-md mx-auto pt-10 main-container">
      <div className="flex px-1 mb-10">
        <Link to="/my-orders" className="flex items-center">
          <Icon type="leftArrow" />
        </Link>
        <h1 className="font-semibold text-lg md:text-xl text-start ml-4">See order</h1>
      </div>
      <Link to="/my-orders" className="w-full min-h-max flex justify-between items-center py-4 px-4 mb-8 rounded-lg text-lg font-bold bg-[#f7f7f7] text-black decoration-0 general-info">
        <div className="flex flex-col justify-center general-info__left">
          <span className="text-base md:text-lg">{orderView.date.toLocaleDateString()}</span>
          <span className="text-gray-500 text-base font-medium info">{orderView.products.length} articles</span>
        </div>
        <span className="text-[#232830] text-lg font-bold price">$ {formatNumberWithComma(orderView.total.toFixed(2))}</span>
      </Link>
      <section className="w-full pl-2 pr-4 orders-container">
        {orderView.products.map((product, idx) => (
          <CardPayment
            key={idx}
            title={product.title}
            imageSrc={product.image}
            price={product.price}
            permanent
          />
        ))}
      </section>
  </section>
  )
}

MyOrderView.propTypes = {
  orderView: PropTypes.object.isRequired,
}

export default MyOrderView