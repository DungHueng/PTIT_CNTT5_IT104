import React, { Component } from 'react'

interface ReactProps {
    name: string;
}

export default class ReactChange extends Component<object, ReactProps> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Rikkei Academy",
        };
    }
    submitChange = () => {
        this.setState({ name: "RikkeiSoft" });
    }
  render() {
    return (
      <>
        <h1>Company: {this.state.name}</h1>
        <br />
        <button onClick={this.submitChange}>Change state</button>
      </>
    )
  }
}