import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <form style={{textAlign: 'center', width: '100%'}}>
        <div style={{position: 'absolute', top: '20px', display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-evenly', padding: '15px', backgroundColor: 'blue'}}>
          <Link to="/"><b style={{color: 'white'}}>Home</b></Link>
          <Link to="/about"><b style={{color: 'white'}}>About</b></Link>
          <Link to="/contact"><b style={{color: 'white'}}>Contact</b></Link>
        </div>
        <div style={{marginBottom: '350px', marginLeft: '560px'}}>
            <h2>Thông tin liên hệ</h2>
            <p><b>Email: </b><a href="#">nguyenvana@gmail.com</a></p>
            <p><b>Số điện thoại: </b>0123 456 789</p>
            <p><b>Linkedin: </b><a href="#">linkedin.com/in/nguyenvana</a></p>
        </div>
        </form>
  )
}



