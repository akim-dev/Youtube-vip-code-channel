import Card from "../components/Fragments/Card";

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
];

const ProductPage = () => {
  return (
    <div className="flex justify-center  py-5">
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
  );
};

export default ProductPage;
