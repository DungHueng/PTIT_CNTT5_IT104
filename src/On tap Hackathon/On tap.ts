class Customer {
    id: number;
    name: string;
    email: string;
    shippingAddress: string;
    constructor(id: number, name: string, email: string, shippingAddress: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails(){
        return `${this.id} - ${this.name} - ${this.email} - ${this.shippingAddress}`;
    }
}

abstract class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    constructor(id: number, name: string, price: number, stock: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity: number){
        this.stock += quantity;
    }
    restock(quantity: number){
        this.stock -= quantity;
    }

    abstract getProductInfo(): string;

    abstract getShippingCost(distance: number): number;

    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;
    static costShipping: number;
    constructor (id: number, name: string, price: number, stock: number, warrantyPeriod: number){
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo(){
        return `ID: ${this.id} - Name: ${this.name} - Price: ${this.price.toLocaleString} VND - warrantyPeriod: ${this.warrantyPeriod}`
    }
    getShippingCost(distance: number): number{
        return ElectronicsProduct.costShipping;
    }
    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product{
    size: string;
    color: string;
    static costShipping: number;
    constructor(id: number, name: string, price: number, stock: number, size: string, color: string){
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
         return `ID: ${this.id} - Name: ${this.name} - Price: ${this.price.toLocaleString} VND - Size ${this.size} - Color: ${this.color}`
    }
    getShippingCost(distance: number): number {
        return ClothingProduct.costShipping;
    }
    getCategory(): string {
        return "Clothing";
    }
}

class Order {
    orderID: number;
    customer: Customer;
    product: Product[];
    totalAmount: number;
    constructor(orderID: number, customer: Customer, product: Product[], totalAmount: number){
        this.orderID = orderID;
        this.customer = customer;
        this.product = product;
        this.totalAmount = totalAmount;
    }
    getDetail(){
        return `orderID: ${this.orderID} - customer: ${this.customer} - product: ${this.product} - totalAmount: ${this.totalAmount}`
    }
}

class Store{
    product: Product[];
    customer: Customer[];
    order: Order[];
    constructor(product: Product[], customer: Customer[], order: Order[]){
        this.product = product;
        this.customer = customer;
        this.order = order;
    }

    addProduct(product: Product):void{
        this.product.push(product);
    }

    addCustomer() : void{
        const id = this.customer.length+1;

        let name = prompt("Nhập tên khách hàng: ");
        let email = prompt("Nhập email: ");
        let address = prompt("Nhập địa chỉ: ");
        
        if (name && email && address) {
            const newcustomer = new Customer(id, name, email, address);
            this.customer.push(newcustomer);
            console.log("thêm thành công!");
        }else{
            console.log("Không hợp lệ");   
        }
    }

    // createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null{
        
    // }

    cancelOrder(orderId: number): void{
        
    }

    listAvailableProducts(): void{
        const available = this.product.filter(p => p.stock > 0);
    if (available.length === 0) {
        console.log("Không có sản phẩm nào còn hàng.");
    } else {
        console.log("Danh sách sản phẩm còn hàng:");
        available.forEach(p => {
            console.log(p.getProductInfo());
        });
    }
}

    listCustomerOrders(customerId: number): void{
    const customer = this.customer.find(c => c.id === customerId);

    if (!customer) {
        console.log(`Không tìm thấy khách hàng với ID ${customerId}`);
        return;
    }

    const orders = this.order.filter(o => o.customer.id === customerId);

    if (orders.length === 0) {
        console.log(`Khách hàng "${customer.name}" chưa có đơn hàng nào.`);
    } else {
        console.log(`Danh sách đơn hàng của "${customer.name}":`);
        orders.forEach(o => {
            console.log(`- Mã đơn: ${o.orderID}, Tổng tiền: ${o.totalAmount} VND`);
            o.product.forEach(p => {
                console.log(`   + ${p.getProductInfo()}`);
            });
        });
    }
    }

    // calculateTotalRevenue(): number{

    // }

    countProductsByCategory(): void{

    }

    updateProductStock(productId: number, newStock: number): void{

    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined{
        return collection.find(item => item.id === id);
    }
}

function mainMenu() {
    let choice: number;
    let myStore = new Store([],[],[])   ;
    do{
    choice = Number(prompt(`
======== MENU CHỨC NĂNG ========
1. Thêm khách hàng mới
2. Thêm sản phẩm mới
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị sản phẩm còn hàng
6. Hiển thị đơn hàng của khách
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho
10. Tìm kiếm theo ID
11. Xem chi tiết sản phẩm
12. Thoát
===============================`))
switch (choice) {
    case 1:
    myStore.addCustomer();
        break;

    case 2:
        
        break;

    case 3:
        
        break;

    case 4:
        
        break;

    case 5:
        myStore.listAvailableProducts();
        break;

    case 6:
        const customerId = Number(prompt("Nhập ID khách hàng cần xem đơn hàng:"));
        myStore.listCustomerOrders(customerId);
        break;

    case 7:
        
        break;

    case 8:
        
        break;

    case 9:
        
        break;

    case 10:
        
        break;

    case 11:
        
        break;
    
    case 12:
    console.log("Tạm biệt");
        break;

    default:
    console.log("Lựa chọn không hợp lệ!");
        break;
}
}while(choice != 12);
}
mainMenu();