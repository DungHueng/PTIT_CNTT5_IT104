import React from "react";

interface ChildCompProps {
  id: number;
  productName: string;
  Price: number;
  Quantity: number;
}

const ChildComp: React.FC<ChildCompProps> = ({
  id,
  productName,
  Price,
  Quantity,
}) => {
  return (
    <div>
      <b>Dữ liệu trong component con</b>
      <p>ID: {id}</p>
      <p>Tên sản phẩm: {productName}</p>
      <p>Giá: {Price}</p>
      <p>Số lượng: {Quantity}</p>
    </div>
  );
};

export default ChildComp;

// FC là viết tắt của Functional Component, dùng để khai báo kiểu cho component React