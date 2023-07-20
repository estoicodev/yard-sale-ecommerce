import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'
import PropTypes from 'prop-types'
import { formatNumberWithComma } from '../../utils/format'

function MyOrders({ myOrders, updateOrderView }) {

  console.log("My orders: ",myOrders);

  return (
    <section className="w-full max-w-md mx-auto pt-10 main-container">
      <div className="flex px-1 mb-10">
        <Link to="/" className="flex items-center">
          <Icon type="leftArrow" />
        </Link>
        <h1 className="font-semibold text-lg md:text-xl text-start ml-4">My orders</h1>
      </div>
      {myOrders.map((order, idx) => (
        <Link
          key={idx}
          to="/my-order-view"
          className="w-full min-h-max flex justify-between items-center py-4 px-5 mb-8 rounded-lg text-lg font-bold bg-[#f7f7f7] text-black decoration-0 general-info"
          onClick={() => {updateOrderView(order.id)}}
        >
          <div className="flex flex-col justify-center general-info__left">
            <span className="text-base md:text-lg date">{order.date.toLocaleDateString()}</span>
            <span className="text-gray-500 text-base font-medium info">{order.products.length} articles</span>
          </div>
          <div className="flex general-info__right">
            <span className="text-[#232830] text-lg font-bold mr-4 general-info__price price">$ {formatNumberWithComma(order.total.toFixed(2))}</span>
            <Icon type="rightArrow" />
          </div>
        </Link>
      ))}
    </section>
  )
}

MyOrders.propTypes = {
  myOrders: PropTypes.array,
  updateOrderView: PropTypes.func,
}

export default MyOrders