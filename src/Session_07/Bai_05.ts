class account {
    public id: number;
    public userName: string;
    private password: number;
    public isLogin: string;
    public role: string;
    constructor(id: number, userName: string, password: number, isLogin: string, role: string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(): void{
        if(this.isLogin === "true"){
            console.log("Login thành công!");
        }else{
            console.log("Login thất bại!");
        }
    }

    logout(): void{
        if(this.isLogin === "true"){
            console.log("Đăng xuất thành công");
            this.isLogin = "false";
        }
    }
}

class userAcc extends account{
    status: string;
    constructor(id: number, userName: string, password: number, isLogin: string, role: string, status: string){
        super(id, userName, password, isLogin, role)
        this.status = status;
    }
    login(): void{
        if (this.status === "active") {
            this.isLogin = "true";
            console.log("Tài khoản đăng nhập thành công");
        } else if(this.status === "banned"){
            this.isLogin = "false";
            console.log("Tài khoản đã bị khoá");
        }
    }
}

const UserAccount = new userAcc(1, "Dung", 123456, "true", "Leader", "active");
UserAccount.login();
UserAccount.logout();

const UserAccount2 = new userAcc(2, "Nam", 654321, "false", "Member", "banned");
UserAccount2.login();
UserAccount2.logout();