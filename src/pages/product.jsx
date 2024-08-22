import { Fragment } from "react";
import Card from "../components/Fragments/Card";
import Button from "../components/Elements/Button/Index";

const products = [
  {
    id: 1,
    name: "Sepatu Baru ",
    image: "/images/shoes_1.jpg",
    price: "200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione distinctio officia libero quibusdam accusamus nemo ex fuga! Neque dignissimos voluptates deleniti nulla temporibus totam tenetur laborum harum nihil ut!",
  },
  {
    id: 2,
    name: "Sepatu Baru ",
    image: "/images/shoes_1.jpg",
    price: "200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab aliquam esse accusamus! Rerum obcaecati ratione corporis, consequuntur",
  },
  {
    id: 3,
    name: "Sepatu Baru ",
    image: "/images/shoes_1.jpg",
    price: "200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum",
  },
  {
    id: 4,
    name: "Sepatu Baru ",
    image: "/images/shoes_1.jpg",
    price: "200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  // function handleClick() {
  //   console.log("You clicked me!");
  // }

  const handleClick2 = () => {
    console.log("You clicked me2!");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className=" flex justify-end bg-blue-400 text-white items-center px-20 py-10 h-20 ">
        <h1 className="text-md font-bold block">Welcome {email}</h1>
        <button
          onClick={handleClick2}
          className="ml-5 bg-slate-600 p-2 rounded "
        >
          Log Out
        </button>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        {products.map((product) => (
          <Card key={product.id}>
            <Card.Header image={product.image} />
            <Card.Body name={product.name}>{product.desc}</Card.Body>
            <Card.Footer price={product.price} />
          </Card>
        ))}
        {/* <Card>
        <Card.Header image={"/images/shoes_1.jpg"} />
        <Card.Body title="Sepatu Baru ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ratione distinctio officia libero quibusdam accusamus nemo ex fuga!
          Neque dignissimos voluptates deleniti nulla temporibus totam tenetur
          laborum harum nihil ut!
        </Card.Body>
        <Card.Footer price="200.000"></Card.Footer>
      </Card> */}
      </div>
    </Fragment>
  );
};

export default ProductPage;
