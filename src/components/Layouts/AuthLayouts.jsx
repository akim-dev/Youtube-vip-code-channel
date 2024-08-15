import PropTypes from "prop-types";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
      <p className="mb-8 text-slate-500 font-medium ">
        Login to access your account
      </p>
      {children}
    </div>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AuthLayouts;
