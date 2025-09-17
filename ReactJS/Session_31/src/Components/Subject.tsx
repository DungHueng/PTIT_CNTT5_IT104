import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
  status: boolean;
};
type NewPost = Omit<Post, "id">;

export default function Subject() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClose = () => { setShow(false); setTitle(""); setImage(""); setContent(""); };
  const handleShow = () => setShow(true);

  async function getData() {
    const posts = await axios.get("http://localhost:3000/Subject");
    setPosts([...posts.data]);
  }
  useEffect(() => { getData(); }, []);

  const handleBlock = (id: number) => { setPosts(prev => prev.map(post => post.id === id ? { ...post, status: !post.status } : post)); };

  async function addPost(post: NewPost) { const res = await axios.post("http://localhost:3000/Subject", post); return res; }

  const handleDelete = async (id: number) => {
    const choice = confirm("Xác nhận xóa.");
    if (choice) { await axios.delete(`http://localhost:3000/Subject/${id}`); setPosts(prev => prev.filter(post => post.id !== id)); }
  };

  const handleAddPosts = async () => {
    setShow(false);
    const response = await addPost({ title: title, image: image, content: content, date: new Date().toLocaleDateString("vi-VN"), status: true });
    const newPost = response.data;
    setPosts([...posts, newPost]);
    setImage(""); setTitle(""); setContent("");
  };

  return (
    <div>
      <form style={{display:'flex',marginBottom:'20px',width:'1450px',position:'absolute',top:20}}>
        <input type="text" placeholder=' Nhập từ khoá tìm kiếm' style={{width:'300px',height:'37px',borderRadius:'6px',border:'1px solid #e3e3e3',backgroundColor:'white',color:'black',marginRight:'10px'}}/> 
        <select name="subject" style={{width:'180px',height:'37px',borderRadius:'6px',border:'1px solid #e3e3e3',backgroundColor:'white',color:'black'}}>
            <option value="1">Lọc bài viết</option>
            <option value="2">Đã xuất bản</option>
            <option value="3">Chưa xuất bản</option>
        </select>
        <Button variant="primary" style={{marginLeft:'auto'}} onClick={handleShow}>Thêm mới bài viết</Button>
      </form>

      <div>
        <table border={1} cellSpacing={0} cellPadding={10} style={{border:'1px solid #e8e8e8',width:'1450px',position:'absolute',top:80}}>
          <thead>
            <tr style={{backgroundColor:"#f5f5f5",textAlign:'center'}}>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Nội dung</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td style={{textAlign:'center'}}>{index + 1}</td>
                <td>{post.title}</td>
                <td style={{textAlign:'center'}}><img src={post.image} alt={post.title} style={{width:"80px",height:"50px",objectFit:"cover"}}/></td>
                <td>{post.content}</td>
                <td>{post.date}</td>
                <td>
                  <button style={{backgroundColor:post.status?"#f6ffed":"#fff1f0",color:post.status?"#52c41a":"#e36544",border:post.status?"1px solid #b7eb8f":"1px solid #ffbeba",borderRadius:"6px",width:"110px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px"}} disabled>
                    {post.status ? "Đã xuất bản" : "Chưa xuất bản"}
                  </button>
                </td>
                <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>
                  <button onClick={() => handleBlock(post.id)} style={{height:"30px",width:"60px",borderRadius:"10px",backgroundColor:"#faaf19",color:"white",border:"1px solid #fdd992",display:"flex",alignItems:"center",justifyContent:"center"}}>Chặn</button>
                  <button style={{height:"30px",width:"60px",borderRadius:"10px",backgroundColor:"#fff7e6",color:"#dc8533",border:"1px solid #ffecce",display:"flex",alignItems:"center",justifyContent:"center"}}>Sửa</button>
                  <button onClick={() => handleDelete(post.id)} style={{height:"30px",width:"60px",borderRadius:"10px",backgroundColor:"#fff1f0",color:"#e36544",border:"1px solid #ffbeba",display:"flex",alignItems:"center",justifyContent:"center"}}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Thêm mới bài viết</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Tên bài viết</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Làm mới</Button>
          <Button variant="primary" onClick={handleAddPosts}>Xuất bản</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
