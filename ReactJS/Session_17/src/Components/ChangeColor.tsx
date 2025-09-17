import { useState } from 'react'

export default function ChangeColor() {
    const [color, setColor] = useState("black");
    const colorChanging=() =>{
        setColor("red");
    }
  return (
    <div>
      <p style={{ color: color }}>Tiêu đề văn bản</p>
      <button onClick={colorChanging}>Thay đổi màu</button>
    </div>
  )
}
