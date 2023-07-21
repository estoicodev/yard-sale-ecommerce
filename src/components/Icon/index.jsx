import AddToCartSVG from "./AddToCart";
import AddedToCartSVG from "./AddedToCart";
import IconClose from "./IconClose";
import IconMenu from "./IconMenu";
import IconShoppingCart from "./IconShoppingCart";
import IconLogo from "./IconLogo";
import IconDownArrow from "./IconDownArrow";
import IconLeftArrow from "./IconLeftArrow";
import IconRightArrow from "./IconRightArrow";
import PropTypes from "prop-types";

const Icon = ({ color, type, size, rounded, shadow, onClick, pointer, sizeType }) => {
  const icons = {
    addToCart: <AddToCartSVG fill={color}/>,
    addedToCart: <AddedToCartSVG fill={color}/>,
    menu: <IconMenu fill={color}/>,
    shoppingCart: <IconShoppingCart fill={color}/>,
    close: <IconClose />,
    logo: <IconLogo fill={color} sizeType={sizeType}/>,
    downArrow: <IconDownArrow />,
    leftArrow: <IconLeftArrow />,
    rightArrow: <IconRightArrow />,
  };
  return (
    <span
      className={`${size ? `w-${size} h-${size}` : ""} flex justify-center items-center ${rounded ? "rounded-full" : ""} ${shadow ? "shadow-md" : ""} ${pointer ? "cursor-pointer" : ""}`} 
      onClick={() => {
        if (onClick) onClick();
        console.log(`Click a ${type} icon`);
      }}
    >
      {icons[type]}
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  pointer: PropTypes.bool,
  onClick: PropTypes.func,
  sizeType: PropTypes.string,
};

export default Icon;
