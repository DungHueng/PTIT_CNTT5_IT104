const a = 5;
const arr = [1, 2, 3];
a = 15;
// vì const không thể gán lại giá trị cho biến a, nên sẽ báo lỗi khi chạy đoạn code này
arr.push(4);
// Có thể thêm phần tử vào mảng arr vì mảng là một đối tượng có thể thay đổi nội dung