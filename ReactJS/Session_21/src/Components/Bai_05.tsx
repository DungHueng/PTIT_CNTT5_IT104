import { Card } from 'antd';
import { Button } from 'antd';

export default function Bai_05() {
  return (
    <div style={{backgroundColor: '#d7f2fe', justifyContent: 'center', display: 'flex'}}>
      <Card style={{width: '300px', height: '200px', backgroundColor: '#b7e8fd', margin: '20px', position: 'relative'}}>
        <b style={{color: '#49a4ce'}}>Relative parent</b>
        <Button type='primary' style={{position: 'absolute', bottom: '1px', left: '1px'}}><b>Absolute child</b></Button>
      </Card>
    </div>
  )
}
