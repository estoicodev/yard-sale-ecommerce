import PropTypes from "prop-types";
import Icon from "../Icon";
import { formatNumberWithComma } from "../../utils/format";
import { useEffect, useState, useRef } from "react";

function Card({ imageSrc, price, title, onAddToCart, onClickImage}) {
  const [titleWithLimit, setTitleWithLimit] = useState("");
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });
  const [isImageScaled, setIsImageScaled] = useState(false);
  const firstDivRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (title.length > 38) {
      setTitleWithLimit(title.slice(0, 38) + "...");
    } else {
      setTitleWithLimit(title);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  useEffect(() => {
    if (firstDivRef.current && imageRef.current) {
      const updateDivSize = () => {
        const width = firstDivRef.current.offsetWidth;
        const height = firstDivRef.current.offsetHeight;
        setDivSize({ width, height });
      };

      const updateImageSize = () => {
        const computedStyle = window.getComputedStyle(imageRef.current);
        const width = parseFloat(computedStyle.getPropertyValue("width"));
        const height = parseFloat(computedStyle.getPropertyValue("height"));
        setImageSize({ width, height });
      };

      updateDivSize();
      updateImageSize();

      window.addEventListener("resize", updateImageSize);

      return () => {
        window.removeEventListener("resize", updateImageSize);
      }
    }
  }, [firstDivRef, imageRef]);

  useEffect(() => {
    if (imageSize.height > divSize.height) {
      setIsImageScaled(true);
    } else {
      setIsImageScaled(false);
    }
  }, [imageSize, divSize]);

  return (
    <article className="max-w-sm">
      <div className="flex items-center w-full h-52 overflow-hidden mb-2 cursor-pointer" ref={firstDivRef}>
        <img
          className={`${isImageScaled ? "scale-75 left-8 top-8" : ""} relative w-full h-auto transform origin-top-left rounded-t-lg object-cover`}
          src={imageSrc}
          alt={title}
          onClick={onClickImage}
          ref={imageRef}
        />
        <div className="hidden">Removed from cart</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-sm">
          <span className="text-gray-800 font-bold">$ {formatNumberWithComma(price)}</span>
          <span className="text-gray-600">{titleWithLimit}</span>
          {/* <span className="text-gray-600">{`Image: ${imageSize.width}x${imageSize.height}`}</span>
          <span className="text-gray-600">{`Div: ${divSize.width}px x ${divSize.height}px`}</span>
          <span className="text-gray-600">{`Scale (${imageSize.height} < ${divSize.height})`}</span> */}
        </div>
        <Icon type="addToCart" color="#ACD9B2" size={8} onClick={onAddToCart} pointer/>
      </div>
    </article>
  )
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
}

export default Card