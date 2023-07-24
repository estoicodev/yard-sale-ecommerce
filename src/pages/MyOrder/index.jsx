import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import CardPayment from "../../components/CardPayment";
import { useOnlineStore } from "../../contexts";
import { formatNumberWithComma } from "../../utils/format";
import { useNavigate } from "react-router-dom";

function MyOrder() {
  const navigate = useNavigate();
  const { cartProducts, countCartProducts, addOrder } = useOnlineStore();
  const [totalCartPayment, setTotalCartPayment] = useState(0);
  const [date] = useState((new Date().toLocaleDateString()));

  useEffect(() => {
    const totalAmount = parseFloat(cartProducts.reduce((acc, product) => acc + product.price, 0));
    setTotalCartPayment(totalAmount);
    // setOrder([{
    //   products: [...cartProducts],
    //   date: new Date(),
    //   total: totalAmount,
    // }]);
  }, [cartProducts])

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="w-full max-w-md mx-auto pt-10 main-container">
      <div className="flex px-1 mb-10">
        <button className="flex items-center" onClick={goBack}>
          <Icon type="leftArrow" />
        </button>
        <h1 className="font-semibold text-lg md:text-xl text-start ml-4">My order</h1>
      </div>
      <div className="w-full min-h-max flex justify-between items-center py-4 px-4 mb-8 rounded-lg text-lg font-bold bg-[#f7f7f7] text-black decoration-0 general-info">
        <div className="flex flex-col justify-center general-info__left">
          <span className="text-base md:text-lg">{date}</span>
          <span className="text-gray-500 text-base font-medium info">{countCartProducts} articles</span>
        </div>
        <span className="text-[#232830] text-lg font-bold price">$ {formatNumberWithComma(totalCartPayment.toFixed(2))}</span>
      </div>
      <section className="w-full pl-2 pr-4 orders-container">
        {cartProducts.map((product, idx) => (
          <CardPayment
            key={idx}
            title={product.title}
            imageSrc={product.image}
            price={product.price}
            permanent
          />
        ))}
      </section>
      <Link
        to="/my-orders"
        onClick={() => {
          addOrder({
            id: Math.random().toString(36).substr(2, 9),
            products: [...cartProducts],
            date: date,
            total: totalCartPayment,
          });
        }}
        className="flex justify-center items-center mt-5 mx-auto bg-[#acd9b2] text-white w-full max-w-sm h-14 border-none rounded-lg text-xl font-medium decoration-0 cursor-pointer btn button button__primary"
        id="save-order-btn"
      >
        Save order
      </Link>

    </div>
  )
}

export default MyOrder