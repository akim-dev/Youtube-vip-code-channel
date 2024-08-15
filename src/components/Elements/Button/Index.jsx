import PropTypes from "prop-types";

const Button = (props) => {
  const { classname, children } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
