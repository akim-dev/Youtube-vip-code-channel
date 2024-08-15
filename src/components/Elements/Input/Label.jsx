import PropTypes from "prop-types";
const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 font-bold mb-2 text-sm"
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Label;
