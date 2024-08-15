import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

function InputForm(props) {
  const { label, type, name, placeholder } = props;
  console.log(name);
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputForm;
