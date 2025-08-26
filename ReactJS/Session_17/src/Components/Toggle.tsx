import { useState } from 'react'

export default function Toggle() {
    const [isToggled, setIsToggled] = useState(false);
    const toggle = () => {
        if(isToggled){
            setIsToggled(false);
        }else{
            setIsToggled(true);
        }
    }
  return (
    <div>
        <button onClick={toggle}>{isToggled ? "Ẩn" : "Hiện"}</button>
        <p>{isToggled ? "Tiêu đề văn bản" : ""}</p>
    </div>
  )
}
