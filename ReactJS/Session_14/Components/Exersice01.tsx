import React, { Component } from 'react'

interface Exercise01State {
    userName: string;
}

export default class Exercise01 extends Component<object, Exercise01State > {
    constructor(props: object) {
        super(props);
        this.state ={
            userName: "John Doe",
        };
    }
  render() {
    return (
      <>
        {this.state.userName}
      </>
    )
  }
}
