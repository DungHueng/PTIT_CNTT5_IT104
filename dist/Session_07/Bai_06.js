class account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        if (this.isLogin === "true") {
            console.log("Login thành công!");
        }
        else {
            console.log("Login thất bại!");
        }
    }
    logout() {
        if (this.isLogin === "true") {
            console.log("Đăng xuất thành công");
            this.isLogin = "false";
        }
    }
}
class userAcc extends account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = "true";
            console.log("Tài khoản đăng nhập thành công");
        }
        else if (this.status === "banned") {
            this.isLogin = "false";
            console.log("Tài khoản đã bị khoá");
        }
    }
}
class adminAcc extends account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log("Tài khoản này đã bị cấm");
    }
}
const UserAccount = new userAcc(1, "Dung", 123456, "true", "Leader", "active");
UserAccount.login();
UserAccount.logout();
const UserAccount2 = new userAcc(2, "Nam", 654321, "false", "Member", "banned");
UserAccount2.login();
UserAccount2.logout();
const AdminAccount = new adminAcc(1, "Dung", 123456, "true", "banned");
AdminAccount.banUser(UserAccount);
export {};
//# sourceMappingURL=Bai_06.js.map