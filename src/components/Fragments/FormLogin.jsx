import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Index";
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data.email);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    window.location.href = "/product";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@email.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />

      <Button classname={"bg-blue-600 w-full"} type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
