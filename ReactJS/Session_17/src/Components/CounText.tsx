import { useState } from 'react'

export default function CounText() {
    const [text, setText] = useState<string>("");
    const textCount = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(event.target.value);
    }
  return (
    <div>
      <form action="">
        <textarea name="text" onChange={textCount} ></textarea>
        <p>Số ký tự: {text.length}</p>
      </form>
    </div>
  )
}
