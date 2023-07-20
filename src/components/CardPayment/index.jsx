import PropTypes from "prop-types";
import Icon from "../Icon";
import { formatNumberWithComma } from "../../utils/format";
import { useEffect, useState } from "react";

function CardPayment({ title, imageSrc, price, onRemoveProduct, permanent }) {
  const [titleWithLimit, setTitleWithLimit] = useState("");
  const [limitTitle, setLimitTitle] = useState(14);

  const updateTitleLimit = () => {
    if (window.innerWidth < 475) {
      setLimitTitle(14);
    } else if (window.innerWidth < 768) {
      setLimitTitle(18);
    } else if (window.innerWidth < 1024) {
      setLimitTitle(24);
    } else {
      setLimitTitle(38);
    }
    console.log(window.innerWidth);
  }

  useEffect(() => {
    updateTitleLimit();
  }, []);

  useEffect(() => {
    if (title.length > limitTitle) {
      setTitleWithLimit(title.slice(0, limitTitle) + "...");
      console.log(limitTitle);
    } else {
      setTitleWithLimit(title);
    }

    window.addEventListener("resize", updateTitleLimit);

    return () => {
      window.removeEventListener("resize", updateTitleLimit);
    }
  }, [title, limitTitle]);

  return (
    <article className={`relative w-full grid ${permanent ? "grid-cols-3" : "grid-cols-5"} items-center gap-0 py-3 order`}>
      <figure className="w-16 h-16 xs:w-20 xs:h-20">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full rounded-3xl object-cover scale-90 order__image"
        />
      </figure>
      <div className={`${permanent ? "col-span-2" : "col-span-3"} flex flex-col items-center xs:flex-row xs:justify-between`}>
        <p className="text-center xs:text-start text-gray-500 text-base font-medium basis-2/3 order__name info">{titleWithLimit}</p>
        <p className="text-[#232830] text-base xs:text-lg font-bold basis-1/3 order__price price text-right">$ {formatNumberWithComma(price)}</p>
      </div>
      {permanent ? null : (
        <span className="absolute top-9 right-4 xs:right-9">
          <Icon type="close" size={6} onClick={onRemoveProduct} pointer/>
        </span>
      )}
    </article>
  )
}

CardPayment.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  price: PropTypes.number,
  onRemoveProduct: PropTypes.func,
  permanent: PropTypes.bool,
}

export default CardPayment