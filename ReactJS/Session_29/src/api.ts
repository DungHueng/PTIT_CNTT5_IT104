import type { Product } from './Components/Bai_02/getAllProduct';

export async function getAllProduct(): Promise<Product[]> {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Danh sách sản phẩm:', data);
    return data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sản phẩm:', error);
    return [];
  }
}
