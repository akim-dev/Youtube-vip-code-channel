import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
