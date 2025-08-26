import { useState } from 'react'

export default function Select() {
    const [city, setCity] = useState<string>("");
    const chooseCity=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setCity(event.target.value);
    }
  return (
    <div>
      <p>Thành phố: {city}</p>
      <select name="city" onChange={chooseCity}>
        <option value="choice" disabled>-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hoá">Thanh Hoá</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  )
}
