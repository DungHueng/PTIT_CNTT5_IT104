function checkEndString(str1, str2) {

    if (str1.endsWith(str2)) {
        console.log("true");
    } else {
        console.log("false");
    }
}
checkEndString("Hello, World!", "Hello");
checkEndString("Hi there!", "there!")