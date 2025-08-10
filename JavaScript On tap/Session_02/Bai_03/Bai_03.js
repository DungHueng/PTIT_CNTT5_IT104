function typeConsole(type) {
    let message = "";
    if (type === "log") {
        message = "Đây là type: log.";
        console.log(message);
    } else if (type === "warn") {
        message = "Cảnh báo! Đây là type: warn.";
        console.warn(message);
    } else if (type === "error") {
        message = "Lỗi! Đây là type: error.";
        console.error(message);
    }else{
        console.log("Đây là type: log");
    }
}
typeConsole("log");
typeConsole("warn");
typeConsole("error");  
typeConsole();