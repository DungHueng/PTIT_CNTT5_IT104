import { useState } from 'react'

export default function Form() {
const [form, setForm] = useState<string>("");
const changeForm=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setForm(event.target.value);
}
  return (
    <div>
        <form action="">
          <input type="text" placeholder='Nhập nội dung' onChange={changeForm}/>
          <p>{form}</p>
        </form>
    </div>
  )
}