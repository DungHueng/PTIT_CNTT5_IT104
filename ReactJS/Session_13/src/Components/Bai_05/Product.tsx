import { Component } from "react";
import Total from "./TotalProduct";

interface ProductProps {
  id: number;
  productName: string;
  Price: number;
  Quantity: number;
}

export class Product extends Component<object, ProductProps> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      productName: "Bưởi ba roi",
      Price: 12000,
      Quantity: 6,
    };
  }
  render() {
    return (
      <div>
        <Total
          id={this.state.id}
          productName={this.state.productName}
          Price={this.state.Price}
          Quantity={this.state.Quantity}
        />
      </div>
    );
  }
}

// Dùng {} thì TypeScript cho phép nhiều kiểu hơn object