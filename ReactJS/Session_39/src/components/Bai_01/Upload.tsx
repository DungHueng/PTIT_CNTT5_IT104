import axios from 'axios'
import React, { useState } from 'react'

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null)
  const [imgUrl, setImgUrl] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      alert("vui lòng chọn file")
      return
    }
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "re_upload")
    try {
      setIsUploading(true)
      const response = await axios.post("https://api.cloudinary.com/v1_1/dpuekouaa/image/upload", formData)
      if (response.status === 200) {
        setImgUrl(response.data.secure_url)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div style={{color:"white",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      {isUploading && <div style={{marginBottom:10,fontWeight:"bold"}}>Loading...</div>}
      <h2 style={{marginBottom:20}}>Picture Upload Here</h2>
      {file && <img src={URL.createObjectURL(file)} alt="preview" style={{width:200,borderRadius:8,marginBottom:10}} />}
      {imgUrl && (
        <div style={{textAlign:"center",marginTop:20}}>
          <img src={imgUrl} alt="uploaded" style={{width:200,borderRadius:8}} />
          <p style={{marginTop:10,fontStyle:"italic"}}>{description}</p>
        </div>
      )}
      <input onChange={handleChangeFile} type="file" style={{marginBottom:10, marginLeft: '50px'}} />
      <input type="text" placeholder="Nhập mô tả ảnh..." value={description} onChange={(e) => setDescription(e.target.value)} style={{padding: '8px', marginBottom: '10px', border:"1px solid #ccc"}} />
      <button onClick={handleUpload} style={{padding:"8px 16px"}}>upload</button>
    </div>
  )
}
