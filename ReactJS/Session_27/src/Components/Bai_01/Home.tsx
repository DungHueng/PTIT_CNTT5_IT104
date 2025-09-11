import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <form style={{textAlign: 'center', width: '100%'}}>
    <div style={{position: 'absolute', top: '20px', display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-evenly', padding: '15px', backgroundColor: 'blue'}}>
      <Link to="/"><b style={{color: 'white'}}>Home</b></Link>
      <Link to="/about"><b style={{color: 'white'}}>About</b></Link>
      <Link to="/contact"><b style={{color: 'white'}}>Contact</b></Link>
    </div>
    <div style={{marginBottom: '350px', marginLeft: '150px'}}>
        <h1>Chào mừng đến với ứng dụng giới thiệu bản thân</h1>
        <p>Đây là ứng dụng đơn giản giúp bạn tìm hiểu thêm về tôi. Hãy khám phá các trang khác để biết thêm chi tiết!</p>
    </div>
    </form>
  )
}