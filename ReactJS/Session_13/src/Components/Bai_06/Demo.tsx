import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";


interface DemoState {
  email: string;
  submitEmail: string;
}

export default class Demo extends Component<object, DemoState> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      submitEmail: "",
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ submitEmail: this.state.email });
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <p>Email</p>
        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <input
            type="email"
            style={{ height: "35px" }}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.submitEmail && (
          <div>{JSON.stringify({ email: this.state.submitEmail })}</div>
        )}
      </div>
    );
  }
}
