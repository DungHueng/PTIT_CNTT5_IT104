import { useState } from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Bai_02() {
  const [product] = useState<Product>({id: 1, name: "Coca cola", price: 1000, quantity: 10});
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Tên sản phẩm: {product.name}</p>
      <p>Giá: {product.price} $</p>
      <p>Số lượng: {product.quantity}</p>
    </div>
  )
}
