import React, { useState } from 'react'

export default function UserProfile() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false);
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmit(true);
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Thông tin người dùng</h2>
        <input type="name" placeholder='Nhập tên' value={name} onChange={handleNameChange} /><br />
        <input type="email" placeholder='Nhập email' value={email} onChange={handleEmailChange} /><br />
        <button>Gửi</button>
        {submit && (
          <div>
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </form>
    </div>
  )
}
