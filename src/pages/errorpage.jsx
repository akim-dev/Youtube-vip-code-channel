import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center min-h-screen items-center ">
      <h1 className="text-6xl font-bold text-blue-700">Oops !</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
