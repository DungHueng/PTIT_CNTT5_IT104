import React, { Component } from 'react'

interface NotificationProps {
  notification: string;
}

export default class Notification extends Component<object, NotificationProps> {
    constructor(props: object) {
        super(props);
        this.state = {
            notification: "Component đã được mount!",
        };
    }
    componentDidMount(): void {
        console.log(this.state.notification);
    }

  render() {
    return (
      <>
        <p>Component đã được in ra console.log</p>
      </>
    )
  }
}
