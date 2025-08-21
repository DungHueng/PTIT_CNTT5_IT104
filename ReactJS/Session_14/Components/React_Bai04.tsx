import React, { Component } from 'react'

interface React_Bai04Props {
    name: string;
}

export default class React_Bai04 extends Component<object, React_Bai04Props> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "Học code để đi làm"
        };
    }
    submitChange = () => {
        this.setState({ name: "Học code sẽ thành công. Cố lên!!!" });
    }

    render() {
        return (
            <>
                <h1>Slogan: {this.state.name}</h1>
                <br />
                <button onClick={this.submitChange}>Change State</button>
            </>
        )
    }
}