import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <CardGroup style={{display: 'flex', gap: '10px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/07/17/1180055/macbookair2019vsmacbookpro2019_800x534.jpg" />
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title>MacBook Air 2018</Card.Title>
        <Card.Text>
          The reason I am selling the machine is because it is too much power for what I need
        </Card.Text>
        <div style={{display: 'flex', gap: '50px'}}>
            <Button variant="primary">Xem chi tiết</Button> <p>30.000.000 đ</p>
        </div>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/07/17/1180055/b1_800x450.jpg" style={{width: '287px', height: '193px'}} />
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title>MacBook Pro 2019</Card.Title>
        <Card.Text>
          he reason I am selling the machine is because it is too much power for what I need.
        </Card.Text>
        <div style={{display: 'flex', gap: '50px'}}>
            <Button variant="primary">Xem chi tiết</Button> <p>30.000.000 đ</p>
        </div>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}

export default BasicExample;