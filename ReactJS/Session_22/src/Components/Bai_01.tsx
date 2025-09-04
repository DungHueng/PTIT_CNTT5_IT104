import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <>
    <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
      <Button variant="primary">Lưu</Button>
      <Button variant="secondary">Huỷ</Button>
      <Button variant="success">Thành công</Button>
      <Button variant="warning">Cảnh báo</Button>
      <Button variant="danger">Báo lỗi</Button>
      <Button variant="info">Thông tin</Button>
      <Button variant="link">Đường dẫn</Button>
      </div>
    </>
  );
}

export default TypesExample;