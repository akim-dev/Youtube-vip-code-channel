import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Index";
const FormLogin = () => {
  return (
    <form action="">
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

      <Button classname={"bg-blue-600 w-full"}>Login</Button>
    </form>
  );
};

export default FormLogin;
