import PropTypes from "prop-types";
const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="block text-red-700 font-bold mb-2">
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Label;
