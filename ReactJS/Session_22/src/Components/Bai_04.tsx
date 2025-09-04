    import Form from 'react-bootstrap/Form';

    function SelectBasicExample() {
    return (
        <Form.Select aria-label="Default select example">
        <option hidden>Nguyễn Văn Nam</option>
        <option value="1">Cài đặt</option>
        <option value="2">Đổi mật khẩu</option>
        <option value="3">Đăng xuất</option>
        </Form.Select>
    );
    }

    export default SelectBasicExample;