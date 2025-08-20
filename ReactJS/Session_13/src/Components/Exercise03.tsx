import { Component } from "react";

interface Exercise03 {
    id: number;
    fullName: string;
    age: number;
    people: { id: number; fullName: string; age: number }[];
}

export class Table extends Component<object, Exercise03> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 0,
            fullName: "",
            age: 0,
            people: [
                {id: 1, fullName: "John", age: 30},
                {id: 2, fullName: "Mary", age: 25},
                {id: 3, fullName: "Jane", age: 20}
            ]
        }
    }
    render() {
        return (
            <table border={1} style={{width: '200px', height: '175px', textAlign: 'center'}}>
            <tr>
                <td style={{fontWeight: "bold"}}>Id</td>
                <td style={{fontWeight: "bold"}}>Name</td>
                <td style={{fontWeight: "bold"}}>Age</td>
            </tr>
            {this.state.people.map(person => (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.fullName}</td>
                    <td>{person.age}</td>
                </tr>
            ))}
            </table>
        )
    }
}