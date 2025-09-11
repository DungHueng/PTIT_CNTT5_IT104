import React from 'react'
import { Link } from 'react-router'

export default function TaskList() {
  return (
    <div style={{position: 'absolute', top: 0}}>
      <h2>Danh sách công việc</h2>
      <div style={{border: '1px solid black', padding: '10px', marginBottom: '10px', width: '500px', borderRadius: '10px'}}>
        <b>Học ReactRouter</b>
        <p>Làm quen với Dynamic Routes và useNavigate</p>
        <Link to="/1" style={{textDecoration: 'none'}}>Xem chi tiết</Link>
      </div>

      <div style={{border: '1px solid black', padding: '10px', marginBottom: '10px', width: '500px', borderRadius: '10px'}}>
        <b>Ôn lại Tailwind</b>
        <p>Thực hành tạo UI cơ bản bằng Tailwind CSS</p>
        <Link to="/2" style={{textDecoration: 'none'}}>Xem chi tiết</Link>
      </div>
      
      <div style={{border: '1px solid black', padding: '10px', marginBottom: '10px', width: '500px', borderRadius: '10px'}}>
        <b>Hoàn thành BTVN</b>
        <p>Đẩy code lên GitHub và nộp link</p>
        <Link to="/3" style={{textDecoration: 'none'}}>Xem chi tiết</Link>
      </div>
    </div>
  )
}
