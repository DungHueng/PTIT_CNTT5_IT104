import { Component } from "react";

interface Exercises02{
    id: number;
    fullName: string;
    birth: string;
    address: string;
}

export class Information extends Component<object, Exercises02> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            fullName: "Hoàng Trung Dũng",
            birth: "05/01/2006",
            address: "Hà Nội",
        }
    }
    render() {
        return (
            <div>
                <b style={{fontSize: '30px'}}>Thông tin cá nhân</b>
                <p>id: {this.state.id}</p>
                <p>Họ và tên: {this.state.fullName}</p>
                <p>Ngày sinh: {this.state.birth}</p>
                <p>Địa chỉ: {this.state.address}</p>
            </div>
        )
    }
}