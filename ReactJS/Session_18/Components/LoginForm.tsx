import React, { useCallback, useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        console.log({ email, password })
    }, [email, password])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input type="email" value={email} placeholder='nva@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input type="password" value={password} placeholder='********' onChange={(e) => setPassword(e.target.value)} /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
