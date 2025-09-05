import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <>
        <div style={{ display: "flex", textAlign: "center", justifyContent: 'space-evenly' }}>
          <Alert>
            <label>
              <h2>3</h2> <p>Bài viết</p>
            </label>
          </Alert>

          <Alert>
            <label>
              <h2>1</h2> <p>Lượt thích</p>
            </label>
          </Alert>
        </div>

        <div>
          <Alert style={{width: '400px', textAlign: 'center'}}>
            <label>
              <div style={{display: 'flex', gap: '10px'}}>
                <b>Lọc theo: </b>
                <Form.Select>
                  <option>Tất cả bài viết</option>
                </Form.Select>
              </div><br />

              <button
                style={{
                  borderRadius: "50px",
                  color: "white",
                  backgroundColor: "orange",
                }}
              >
                Tạo bài viết
              </button>
            </label>
          </Alert>
        </div>

        <div>
          <Alert>
            <Alert style={{ backgroundColor: "white" }}>
              <Alert.Heading>Tiêu đề 1</Alert.Heading>
              <p>nội dung 1</p>
              <hr />
              <div style={{display: 'flex'}}>
                <Form.Check aria-label="option 1" />
              <button style={{borderRadius: '50%', backgroundColor: 'gray', marginLeft: '270px', color: 'white'}} disabled >S</button>
              </div>
              <p className="mb-0"></p>
            </Alert>

            <Alert style={{ backgroundColor: "white" }}>
              <Alert.Heading>Tiêu đề 2</Alert.Heading>
              <p>nội dung 2</p>
              <hr />
              <div style={{display: 'flex'}}>
                <Form.Check aria-label="option 1" />
              <button style={{borderRadius: '50%', backgroundColor: 'gray', marginLeft: '270px', color: 'white'}} disabled >S</button>
              </div>
              <p className="mb-0"></p>
            </Alert>

            <Alert style={{ backgroundColor: "white" }}>
              <Alert.Heading>Tiêu đề 3</Alert.Heading>
              <p>nội dung 3</p>
              <hr />
              <div style={{display: 'flex'}}>
                <Form.Check aria-label="option 1" />
              <button style={{borderRadius: '50%', backgroundColor: 'gray', marginLeft: '270px', color: 'white'}} disabled >S</button>
              </div>
              <p className="mb-0"></p>
            </Alert>
          </Alert>
        </div>

        <div>
            <Alert style={{ backgroundColor: "white" }} dismissible>
              <Alert.Heading>Bài viết của bạn</Alert.Heading>
              <hr />
              <p>Tiêu đề* </p> <input type="title" style={{backgroundColor: 'white', borderRadius: '10px', width: '300px'}}/><br />
              <p>Nội dung* </p> <input type="text" style={{backgroundColor: 'white', borderRadius: '10px', width: '300px'}}/>
              <hr />
              <div style={{position: 'absolute', left: '270px'}}>
                <Button variant="primary">Đăng</Button>
                <Button variant="danger">Huỷ</Button>
              </div>
              <p className="mb-5"></p>
            </Alert>
        </div>
    </>
  );
}

export default BasicExample;
