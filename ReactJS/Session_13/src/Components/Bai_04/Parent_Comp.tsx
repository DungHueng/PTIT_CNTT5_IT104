import { Component } from "react";
import ChildComp from "./Children_Comp";

interface ParentCompState {
  fullName: string;
}

export class Parent_Comp extends Component<object, ParentCompState> {
  constructor(props: object) {
    super(props);
    this.state = {
      fullName: "Nguyễn Văn Nam",
    };
  }
  render() {
    return (
      <div>
        <b style={{ fontSize: "20px" }}>
          Họ và tên bên component cha: {this.state.fullName}
        </b>
        <ChildComp fullName={this.state.fullName} />
      </div>
    );
  }
}
