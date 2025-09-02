import React, { useRef, useEffect } from 'react'

export default function Bai_06() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenModal = (e: React.FormEvent) => {
        e.preventDefault();
        setModalOpen(true);
    }

    useEffect(() => {
        if (modalOpen) {
            inputRef.current?.focus();
        }
    }, [modalOpen])
  return (
    <div>
        <form style={{textAlign: 'center'}} onSubmit={handleOpenModal}>
            <h1>Ứng dụng React với Modal và Focus Input</h1><br />
            <button style={{backgroundColor: 'green', color: 'white'}}>Mở Modal</button>
        </form>
        {modalOpen && <form style={{textAlign: 'center', border: '2px solid gray', width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '10px'}}>
            <h3 style={{color: 'black'}}>Đăng nhập</h3>
            <input type="name" placeholder='Nhập tên người dùng' style={{borderRadius: '5px', backgroundColor: 'white', color: 'black'}} /><br />
            <button style={{textAlign: 'center', backgroundColor: 'red', color: 'white'}}>Đóng</button>
        </form>}
    </div>
  )
}