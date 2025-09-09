import React from 'react'

export default function Login() {
  return (
    <div style={{border: '1px solid black', width: '300px', height: '300px ', padding: '10px', borderRadius: '10px', backgroundColor: '#f0f0f0'}}>
      <h2 style={{color: 'black', textAlign: 'center'}}>Login account</h2>
      <div>
        <b style={{color: 'black'}}>Your email</b><br />
        <input type="email" placeholder='name@company.com' style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px', width: '260px', height: '23px', backgroundColor: '#f9fafb', color: '#bbbdca'}} /><br />
        <b style={{color: 'black'}}>Your password</b><br />
        <input type="password" placeholder='********' style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px', width: '260px', height: '23px', backgroundColor: '#f9fafb', color: '#bbbdca'}} /><br />
        <button style={{ display: 'block', marginTop: '10px', width: '270px', backgroundColor: '#2563eb'}}>Login an account</button>
        <p style={{color: '#c4c7ca'}}>Already have an account? <a href="#" style={{color: '#a7acb2'}}>Register here</a></p>
      </div>
    </div>
  )
}
