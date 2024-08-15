import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Index";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Insert your fullname..."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <InputForm
        label="Password"
        type="password"
        name="email"
        placeholder="Enter your password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="**********"
      />

      <Button classname={"bg-blue-600 w-full"}>Register</Button>
    </form>
  );
};

export default FormRegister;
