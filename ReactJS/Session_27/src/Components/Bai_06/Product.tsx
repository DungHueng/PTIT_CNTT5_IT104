import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <form style={{textAlign: 'center', width: '100%'}}>
    <div style={{position: 'absolute', top: '20px', display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-evenly', padding: '15px', backgroundColor: '#ed2f2f'}}>
      <Link to="/main" style={{ textDecoration: "none" }}><b style={{color: 'white'}}>Home</b></Link>
      <Link to="/product" style={{ textDecoration: "none" }}><b style={{color: 'white'}}>Product</b></Link>
      <Link to="/detail" style={{ textDecoration: "none" }}><b style={{color: 'white'}}>Detail</b></Link>
    </div>
    <div><h3>Product</h3></div>
    </form>
  )
}