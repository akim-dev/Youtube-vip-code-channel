import Button from "./components/Elements/Button/Index";
import InputForm from "./components/Elements/Input/InputForm";

// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//         Button
//       </button>
//     );
//   }
// }

// function Button_1() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//       Button_1
//     </button>
//   );
// }

// const Button_2 = () => {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//       Button_2
//     </button>
//   );
// };

function App() {
  return (
    <div className="flex  justify-center min-h-screen items-center ">
      <div className="w-full max-w-xs">
        <h1 className=" text-3xl font-bold mb-2 text-blue-600 text-center ">
          Login
        </h1>
        <p className="mb-6 text-slate-700">Login to access your account</p>
        <div className="mb-6">
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
        </div>
        <Button classname={"bg-blue-600 w-full"}>Login</Button>
      </div>
    </div>
  );
}

export default App;
