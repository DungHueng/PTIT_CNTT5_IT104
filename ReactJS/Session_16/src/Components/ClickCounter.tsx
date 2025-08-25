import { Component } from "react";
type counting = {
  count: number;
};
export default class ClickCounter extends Component<object, counting> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
