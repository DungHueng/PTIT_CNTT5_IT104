import { Component } from "react";

interface Exercises01{
    fullName: string;
}

export class FullName extends Component<object, Exercises01> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullName: "Hoàng Trung Dũng"
        }
    }
    render() {
        return (
            <div>
                <b style={{fontSize: '50px'}}>Họ và tên: {this.state.fullName}</b>
            </div>
        )
    }
}   