import React, { useState } from 'react'

export default function Bai_01() {
    const [value, setValue] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

  return (
    <div>
      <form>
        <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
        <input type="text" placeholder='Nhập vào đây' onChange={handleChange} />
        {value.length > 0 && value.length <= 5 && (
            <p style={{ color: "red" }}>Chuỗi nhập vào dài hơn 5 ký tự!</p>
        )}
      </form>
    </div>
  )
}