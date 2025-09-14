import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <form style={{textAlign: 'center', marginTop: '20px'}}>
    <div>
      <div style={{position: 'absolute', top: '20px', display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-evenly', padding: '15px', backgroundColor: 'blue'}}>
            <Link to="/"><b style={{color: 'white'}}>Home</b></Link>
            <Link to="/about"><b style={{color: 'white'}}>About</b></Link>
            <Link to="/contact"><b style={{color: 'white'}}>Contact</b></Link>
        </div>
    <div style={{marginBottom: '350px', marginLeft: '200px'}}>
        <h2>Giới thiệu bản thân</h2>
        <p>Xin chào! Tôi là <b style={{color: 'blue'}}>Nguyễn Văn A</b>, một lập trình viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng các ứng dụng web hiện đại và tối ưu trải nghiệm người dùng</p>
        <p><b>Sở thích: </b>Đọc sách, viết code và đi du lịch</p>
        <p><b>Mục tiêu: </b>Trở thành một lập trình viên xuất sắc và tạo ra những sản phẩm công nghệ có giá trị</p>
    </div>
    </div>
    </form>
  )
}