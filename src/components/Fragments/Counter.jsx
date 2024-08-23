import React from "react";
import Button from "../Elements/Button/Index";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex  justify-center min-h-screen items-center">
        <h1 className="text-3xl font-bold px-2">Count: {this.state.count}</h1>
        <Button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          classname={"bg-blue-600 hover:first-letter:"}
        >
          Increment
        </Button>
      </div>
    );
  }
}

export default Counter;
