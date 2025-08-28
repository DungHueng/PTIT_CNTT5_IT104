import React, { useState } from 'react'

export default function Bai_04() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  if(value === "") {
    setError({...error, [name]: `${name} không được để trống`});
  } else {
    setError({...error, [name]: ""});
  }
  setFormData({...formData, [name]: value});
}
console.log(formData);
  return (
    <div>
        <form>
            <h2>📝 Đăng ký thông tin</h2>
            <p>Họ và tên</p>
            <input type="name" placeholder='Nhập họ tên...' onChange={handleChange}/>
            <p style={{color: "red"}}>{error.name}</p>
            <p>Email</p>
            <input type="email" placeholder='example@gmail.com' onChange={handleChange}/><br />
            <p style={{color: "red"}}>{error.email}</p>
            <button>Gửi</button>
        </form>
    </div>
  )
}
