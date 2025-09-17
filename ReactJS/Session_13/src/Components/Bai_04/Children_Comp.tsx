import React from "react";

interface ChildCompProps {
  fullName: string;
}

export default class ChildComp extends React.Component<ChildCompProps> {
  render() {
    const { fullName } = this.props;
    return (
      <div>
        <b style={{ fontSize: "20px" }}>
          Họ và tên bên component con: {fullName}
        </b>
      </div>
    );
  }
}
