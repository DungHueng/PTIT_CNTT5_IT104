class choice {
    data;
    success;
    constructor(data, success) {
        this.data = data;
        this.success = success;
    }
}
const choose = new choice("Xin chào", true);
if (choose.success) {
    console.log("Xin chào");
}
else {
    console.log("Tạm biệt");
}
export {};
//# sourceMappingURL=Bai_02.js.map