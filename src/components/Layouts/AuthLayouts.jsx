import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
        <p className="mb-8 text-slate-500 font-medium ">
          Login to access your account
        </p>
        {children}
        <p className="my-5 text-slate-500 font-medium text-center">
          {type === "login"
            ? "Dont have an account ?"
            : "Already have an account ?"}{" "}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="text-blue-600 font-bold"
          >
            {type === "login" ? `Sign Up` : "Log In"}
          </Link>
          {type === "logout"}
        </p>
      </div>
    </div>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default AuthLayouts;
