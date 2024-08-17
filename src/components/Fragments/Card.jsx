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
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp {price}</span>
      <Button classname="bg-blue-600 hover:first-letter:">Add to cart</Button>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

Body.PropTypes = {
  children: PropTypes.string,

  title: PropTypes.string.isRequired,
};

Card.PropTypes = {
  children: PropTypes.node.string,
};

export default Card;
