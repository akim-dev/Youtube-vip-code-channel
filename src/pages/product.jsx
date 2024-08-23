import { Fragment, useState } from "react";
import Card from "../components/Fragments/Card";
import Button from "../components/Elements/Button/Index";

const products = [
  {
    id: 1,
    name: "Sepatu Baru ",
    image: "/images/shoes_1.jpg",
    price: 149.0,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione distinctio officia libero quibusdam accusamus nemo ex fuga! Neque dignissimos voluptates deleniti nulla temporibus totam tenetur laborum harum nihil ut!",
  },
  {
    id: 2,
    name: "Sepatu Baru 1",
    image: "/images/shoes_1.jpg",
    price: 200.0,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab aliquam esse accusamus! Rerum obcaecati ratione corporis, consequuntur",
  },
  {
    id: 3,
    name: "Sepatu Baru 2 ",
    image: "/images/shoes_1.jpg",
    price: 2.0,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum",
  },
  {
    id: 4,
    name: "Sepatu Baru 3 ",
    image: "/images/shoes_1.jpg",
    price: 250.0,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleClick2 = () => {
    console.log("You clicked me2!");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id, name) => {
    // cart.push({ id: id, quantity: 1, name: name });
    // setCart([...cart, { id: id, quantity: 1, name: name }]);

    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, quantity: 1, name: name }]);
    }
  };

  return (
    <Fragment>
      <div className=" flex justify-end bg-blue-400 text-white items-center px-20 py-10 h-20 ">
        <h1 className="text-md font-bold block">Welcome {email}</h1>
        <Button
          onClick={handleClick2}
          className="ml-5 bg-slate-600 p-2 rounded "
        >
          Log Out
        </Button>
      </div>
      <div className="flex">
        <div className="flex flex-wrap justify-center py-5 w-3/4">
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Header image={product.image} />
              <Card.Body name={product.name}>
                <h3 className="text-xl font-bold my-2 text-start ">
                  {product.name}
                </h3>
                {product.desc}
              </Card.Body>
              <Card.Footer
                price={product.price}
                addToCart={handleAddToCart}
                id={product.id}
                quantity={1}
                name={product.name}
              />
            </Card>
          ))}
        </div>
        <div className=" w-1/4 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <h2>
            Total Harga :{" "}
            {console.log(
              cart.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )
            )}
          </h2> */}

          {/* <div>{cart}</div> */}

          <table className="tex-left table-auto border-separate border-spacing-x-5 ">
            <thead className="m-5">
              <tr className="">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {cart.map((item) => {
                const prod = products.find((item) => item.id === item.id);
                return <tr key={item.id}>{console.log(prod)}</tr>;
              })} */}
              {cart.map((item) => {
                const data = products.find((i) => i.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{item.quantity}</td>
                    <td>{data.price * item.quantity}</td>
                    {/* <td>
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
