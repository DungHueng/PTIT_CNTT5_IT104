class choice<T>{
    data: T;
    success: boolean;
    constructor(data: T, success: boolean){
        this.data = data;
        this.success = success;
    }
}

const choose = new choice("Xin chào",true);

if (choose.success) {
    console.log("Xin chào");
}else{
    console.log("Tạm biệt");
    
}