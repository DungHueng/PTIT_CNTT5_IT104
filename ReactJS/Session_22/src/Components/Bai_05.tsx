import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      <Alert variant='success' dismissible style={{width: '700px'}}>Thêm tài khoản thành công </Alert>
      <Alert variant='danger' dismissible>Thêm mới tài khản thất bại </Alert>
      <Alert variant='warning' dismissible>Tài khoản không được thất bại </Alert>
    </>
  );
}

export default BasicExample;