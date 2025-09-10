import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Student() {
  const [input, setInput] = useState('');
  const [search, setSearchParams] = useSearchParams();
  const studentName = search.get('studentName');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ studentName: input });
  };

  return (
    <div>
      <input
        type="text"
        style={{ width: '200px', height: '25px', borderRadius: '5px', border: '1px solid black', padding: '5px' }}
        value={input}
        onChange={handleInputChange}
      />
      <button
        style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'blue', color: 'white', width: '100px', marginLeft: '10px' }}
        onClick={handleSearch}
      >
        Tìm kiếm
      </button>
      <div>
        <h4>{studentName}</h4>
      </div>
    </div>
  );
}