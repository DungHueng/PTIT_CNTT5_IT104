import { Component } from 'react'
interface Subject {
    name: string;
}

export default class SubjectList extends Component<object, { subjects: Subject[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      subjects: [
        { name: "Toán" },
        { name: "Văn" },
        { name: "Anh" },
        { name: "Hoá" },
        { name: "Sinh" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>📚 Danh sách môn học</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {this.state.subjects.map((subject, index) => (
              <button key={index}>{subject.name}</button>
            ))}
        </form>
      </div>
    )
  }
}