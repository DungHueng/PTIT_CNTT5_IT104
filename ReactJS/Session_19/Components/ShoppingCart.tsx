import React, { useMemo } from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function ShoppingCart() {
    const cartItems: Product[] = [
        { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
        { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 }
    ];
    const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);
  return (
    <div>
      <h2>Tổng đơn hàng: {total}</h2>
    </div>
  )
}