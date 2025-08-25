import { Component } from "react";

export default class Bai_03 extends Component {
  render() {
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button style={{background: '#0e6df9', color: 'white'}}>Primary</button>
        <button style={{background: '#6d747a', color: 'white'}}>Secondary</button>
        <button style={{background: '#1b864d', color: 'white'}}>Success</button>
        <button style={{background: '#fec105', color: 'black'}}>Warning</button>
        <button style={{background: '#dc3646', color: 'white'}}>Danger</button>
        <button style={{background: '#09cbf1', color: 'black'}}>Info</button>
        <button style={{background: '#f8f9fc', color: 'black'}}>Light</button>
        <button style={{background: '#212429', color: 'white'}}>Dark</button>
        <u>
          <a href="Link">Link</a>
        </u>
      </div>
    );
  }
}
