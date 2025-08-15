class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor(id: number, name: string, email: string, phone: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(){
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

abstract class Vehice {
    id: number;
    type: string;
    rentalPricePerDay: number;
    isAvailable: boolean;
    constructor(id: number, type: string, rentalPricePerDay: number, isAvailable: boolean) {
        this.id = id;
        this.type = type;
        this.rentalPricePerDay = rentalPricePerDay;
        this.isAvailable = isAvailable;
    }
    rent(){
        this.isAvailable === false;
            console.log("Phương tiện đã được thuê");
        }
    returnVehice(){
        this.isAvailable === true;
        console.log("Phương tiện đã được trả lại");
    }
    abstract calculateRentalCost(days: number): number;
    abstract getFeature(): string[];
    abstract getInsurancePolicy(): string;
}

class Car extends Vehice {
    constructor(id: number, type: string, rentalPricePerDay: number, isAvailable: boolean){
        super(id, type, rentalPricePerDay, isAvailable);
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeature(): string[] {
        return ["Điều hoà", "GPS dẫn đường"];
    }
    getInsurancePolicy(): string {
        return "Bảo hiểm toàn diện, miễn thường $500";
    }
}

class Motorcycle extends Vehice {
    constructor(id: number, type: string, rentalPricePerDay: number, isAvailable: boolean){
        super(id, type, rentalPricePerDay, isAvailable);
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeature(): string[] {
        return ["Mũ bảo hiểm đi kèm"];
    }
    getInsurancePolicy(): string {
        return "Bảo hiểm trách nhiệm dân sự cơ bản";
    }
}

class Truck extends Vehice {
    constructor(id: number, type: string, rentalPricePerDay: number, isAvailable: boolean){
        super(id, type, rentalPricePerDay, isAvailable);
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeature(): string[] {
        return ["Thùng hàng lớn", "Bừng nâng thuỷ lực"];
    }
    getInsurancePolicy(): string {
        return "Bảo hiểm hàng hoá và phương tiện thương mại";
    }
}

class Rental {
    rentalId: number;
    customer: Customer;
    vehice: Vehice;
    days: number;
    totalCost: number;
    constructor(rentalId: number, customer: Customer, vehice: Vehice, days: number){
        this.rentalId = rentalId;
        this.customer = customer;
        this.vehice = vehice;
        this.days = days;
        this.totalCost = vehice.calculateRentalCost(days);
    }
    getDetails(){
        return `rentalID: ${this.rentalId}, Customer: ${this.customer.getDetails()}, Vehice: ${this.vehice.getFeature()}, Days: ${this.days}, Total Cost: ${this.totalCost}`
    }
}

class RentalAgency {
    vehices: Vehice[];
    customer: Customer[];
    rentals: Rental[];
    constructor(vehices: Vehice[], customer: Customer[], rentals: Rental[]){
        this.vehices = vehices;
        this.customer = customer;
        this.rentals = rentals;
    }
    addVehices(vehice: Vehice): void{
        this.vehices.push(vehice);
    }
    addCustomer(name: string, email: string, phone: string): Customer{
        const newCustomer = new Customer(this.customer.length + 1, name, email, phone);
        this.customer.push(newCustomer);
        return newCustomer;
    }
    
    rentVehice(customerId: number, vehiceId: number, days: number): Rental | null{
        const customer = this.customer.find(c => c.id === customerId);
        const vehice = this.vehices.find(v => v.id === vehiceId);
        if (!customer || !vehice || !vehice.isAvailable){
            return null;
        }
        const rental = new Rental(this.rentals.length + 1, customer, vehice, days);
        this.rentals.push(rental);
        vehice.isAvailable = false;
        return rental;
    }

    returnVehice(vehiceId: number): void{
        const vehice = this.vehices.find(v => v.id === vehiceId);
        if (!vehice){
            console.log("Phương tiện này không tồn tại");
            return;
        }
        vehice.isAvailable = true;
        console.log("Phương tiện này được trả thành công");
    }

    // listAvailableVehices(): void{}

    // listCustomerRentals(customerId: number): void

    calculateTotalRevenue(): number{
        return this.rentals.reduce((total, rental) => total + rental.totalCost, 0);
    }

    // getVehicleTypeCount(): void{}

    // getVehicleFeatures(vehicleId: number): void{}

    getVehicleInsurance(vehiceId: number): void{
        const vehice = this.vehices.find(v => v.id === vehiceId);
        if (!vehice){
            console.log("Phương tiện này không tồn tại");
            return;
        }
        console.log(`Chính sách bảo hiểm của phương tiện ${vehiceId}: ${vehice.getInsurancePolicy()}`);
    }
}
function mainMenu(){
    const rentalChoice = new RentalAgency([],[],[]);
    let exit = false;
    do{
        const choice = prompt(
        "==========MENU=========\n "+
        "1. Thêm khách hàng mới\n "+
        "2. Thêm phương tiện mới\n"+
        "3. Thuê xe\n"+
        "4. Trả xe\n"+
        "5. Hiển thị danh sách xe còn trống\n"+
        "6. Hiển thị danh sách hợp đồng mỗi khách hàng\n"+
        "7. Tính và hiển thị tổng doanh thu\n"+
        "8. Đếm số lượng từng loại xe\n"+
        "9. Tìm kiếm và hiển thị thông tin bằng mã định danh\n"+
        "10. Hiển thị tính năng và chính sách bảo hiểm mỗi xe\n"+
        "11. Thoát chương trình"
    );
    switch(choice){
        case "1":
            const name = prompt("Nhập tên khách hàng: ") || "";
            const email = prompt("Nhập email khách hàng: ") || "";
            const phone = prompt("Nhập số điện thoại khách hàng: ") || "";
            rentalChoice.addCustomer(name, email, phone);
            break;
        case "2":
            const type = prompt("Nhập phương tiện: ") || "";
            const rentalPricePerDay = Number(prompt("Nhập giá thuê: "));
            rentalChoice.addVehices(new Car(rentalChoice.vehices.length + 1, type, rentalPricePerDay, true));
            break;
        case "3":
            break;
        case "4":
            break;
        case "5": 
            break;
        case "6": 
            break;
        case "7":
            const totalRevenue = rentalChoice.calculateTotalRevenue();
            console.log(`Tổng doanh thu: ${totalRevenue}`);
            break;
        case "8":
            break;
        case "9":
            break;
        case "10":
            const vehiceId = Number(prompt("Nhập mã phương tiện: "));
            rentalChoice.getVehicleInsurance(vehiceId);
            break;
        case "11":
            exit = true;
            console.log("Thoát thành công!");
            break;
    }
    } while (!exit);
    
}
mainMenu();