import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import axios from "axios";

type Job = {
  id: number
  taskName: string
  status: boolean
}

export default function TodoList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const [showConfirm, setShowConfirm] = useState(false)
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null)

  useEffect(() => {
    axios.get("http://localhost:8080/jobs").then(res => {
      setJobs(res.data)
    })
  }, [])

  const addJob = () => {
    if (name.trim() === "") {
      setError("Tên công việc không được để trống.")
      return
    }
    setError("")
    axios.post("http://localhost:8080/jobs", { taskName: name, status: false }).then(res => {
      setJobs([...jobs, res.data])
      setName("")
    })
  }

  const confirmDeleteJob = (job: Job) => {
    setJobToDelete(job)
    setShowConfirm(true)
  }

  const deleteJob = () => {
    if (!jobToDelete) return
    axios.delete("http://localhost:8080/jobs/" + jobToDelete.id).then(() => {
      setJobs(jobs.filter(j => j.id !== jobToDelete.id))
      setShowConfirm(false)
      setJobToDelete(null)
    })
  }

  const changeStatus = (job: Job, e: any) => {
    axios.patch("http://localhost:8080/jobs/" + job.id, { status: e.target.checked }).then(res => {
      setJobs(jobs.map(j => j.id === job.id ? res.data : j))
    })
  }

  const deleteCompleted = () => {
    jobs.filter(j => j.status).forEach(done => {
      axios.delete("http://localhost:8080/jobs/" + done.id)
    })
    setJobs(jobs.filter(j => !j.status))
  }

  const deleteAll = () => {
    jobs.forEach(j => {
      axios.delete("http://localhost:8080/jobs/" + j.id)
    })
    setJobs([])
  }

  return (
    <div>
      <form style={{ border: "1px solid lightgray", padding: "10px", borderRadius: '6px', boxShadow: '2px 2px 10px lightgray'}}>
        <h4 style={{ textAlign: 'center', marginTop: '30px' }}>Quản lý công việc</h4><br />
        <div style={{boxShadow: '2px 2px 10px lightgray', border: "1px solid lightgray", padding: "10px", borderRadius: '6px' }}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="  Nhập tên công việc" style={{ width: "510px", borderRadius: '6px', height: '35px', backgroundColor: 'white', color: 'black', display: 'flex', border: error ? "1px solid red" : "1px solid lightgray" }}/>
          {error && <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>{error}</div>}
          <Button variant="primary" style={{marginTop: '8px', width: '510px'}} onClick={addJob}>
            Thêm công việc
          </Button>
        </div><br />

        <div style={{boxShadow: '2px 2px 10px lightgray', border: "1px solid lightgray", padding: "10px", borderRadius: '6px', display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Button style={{height: '45px'}}>Tất cả</Button>
            <Button>Hoàn thành</Button>
            <Button>Đang thực hiện</Button>
        </div><br />

        {jobs.map((job) => (
          <div key={job.id} style={{ border: "1px solid lightgray", padding: "10px", borderRadius: "6px", marginTop: "10px", display: "flex", gap: "5px", alignItems: "center"}}>
            <input
              type="checkbox"
              checked={job.status}
              onChange={(e) => changeStatus(job, e)}
            />
            <span style={{ flex: 1 }}>{job.taskName}</span>
            <div style={{ cursor: "pointer" }}>✏️</div>
            <div style={{ cursor: "pointer" }} onClick={() => confirmDeleteJob(job)}>🗑️</div>
          </div>
        ))}<br />

        <div style={{marginTop: '8px', display: 'flex', gap: '30px'}}>
            <Button variant="danger" style={{width: '250px'}} onClick={deleteCompleted}>
              Xóa công việc hoàn thành
            </Button>
            <Button variant="danger" style={{width: '250px'}} onClick={deleteAll}>
              Xóa tất cả công việc
            </Button>
        </div>
      </form>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xoá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xoá công việc "{jobToDelete?.taskName}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Huỷ
          </Button>
          <Button variant="danger" onClick={deleteJob}>
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
