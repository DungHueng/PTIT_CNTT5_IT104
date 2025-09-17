import React, { useCallback, useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState('');
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, [color]);
  return (
    <div>
      <form>
        <h3>Màu mà người dùng chọn</h3>
        <input type="color" value={color} onChange={handleChange} />
        <h3>Màu hiển thị:</h3>
        <div style={{ width: '150px', height: '100px', backgroundColor: color }} />
      </form>
    </div>
  )
}
