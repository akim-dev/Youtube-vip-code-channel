import PropTypes from "prop-types";

const Button = (props) => {
  const { classname, children, type = "button", onclick } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`}
      type={type}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
