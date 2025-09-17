import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SizesExample() {
  return (
    <>
    <InputGroup size="lg">
        <Form.Control
          aria-label="Large" placeholder='Input cỡ lớn'
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default" placeholder='Input cỡ trung bình'
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small" placeholder='Input cỡ bé'
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      
    </>
  );
}

export default SizesExample;