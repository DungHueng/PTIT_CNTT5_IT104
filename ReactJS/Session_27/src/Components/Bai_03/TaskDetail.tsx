import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface IDataTask {
    id: number;
    title: string;
    description: string;
}

const dataTask: IDataTask[] = [
    {
        id: 1,
        title: 'Học ReactRouter',
        description: 'Làm quen với Dynamic Routes và useNavigate'
    },
    {
        id: 2,
        title: 'Ôn lại Tailwind',
        description: 'Thực hành tạo UI cơ bản bằng Tailwind CSS'
    },
    {
        id: 3,
        title: 'Hoàn thành BTVN',
        description: 'Đẩy code lên GitHub và nộp link'
    }
];

export default function TaskDetail() {
    const { id } = useParams<{ id: string }>();
    const data = dataTask.find(task => task.id === Number(id));
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <Button variant="primary"><Link to='/:' style={{color: 'white', textDecoration: 'none'}}>Quay lại</Link></Button>
    </div>
  )
}
