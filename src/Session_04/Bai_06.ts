type Product = {

     id: string;

     name: string;

     price: number;

     category: {

       id: string;

       name: string;

  };
  discount?: number; 
}

let listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: {
        id: "C001",
        name: "Costumes"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Smartphone",
        price: 800000,
        category: {
        id: "C002",
        name: "Mobile"
        }
    },
    {
        id: "P003",
        name: "Tablet",
        price: 600000,
        category: {
        id: "C003",
        name: "Tablets"
        },
        discount: 5
    }
]

function getFinalPrice(product:Product) {
    let finalPrice = product.price;
    if (product.discount) {
        finalPrice -= (product.price * product.discount / 100);
    }
    return {
        ...product,
        finalPrice: finalPrice
    };
}
function printProductInfo(product: Product): void {
    const finalProduct = getFinalPrice(product);
    console.log(`ID: ${finalProduct.id}, Tên: ${finalProduct.name}, Giá: ${finalProduct.price} VNĐ, Danh mục: ${finalProduct.category.name}, Giảm giá: ${finalProduct.discount ? finalProduct.discount + '%' : 'Không có'}, Giá cuối cùng: ${finalProduct.finalPrice} VNĐ`);
}
listProduct.forEach(product => printProductInfo(product));