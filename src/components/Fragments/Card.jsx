/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Index";
import PropTypes from "prop-types";

const Card = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-100 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="px-5 pt-5">
      <a href="">
        <img
          src={image}
          alt=""
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </a>
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a
        href=""
        className="text-xl font-normal tracking-tight text-white h-full "
      >
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id, name } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("us-en", { style: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-600 hover:first-letter:"
        onClick={() => addToCart(id, name, price)}
      >
        Add to cart
      </Button>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

Body.propTypes = {
  children: PropTypes.array,

  title: PropTypes.string,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
