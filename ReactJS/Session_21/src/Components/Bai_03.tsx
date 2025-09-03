import { Card } from 'antd';

export default function Bai_03() {
  return (
    <div style={{display: 'flex', gap: '8px'}} >
      <Card style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
      <Card style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
      <Card style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
    </div>
  )
}