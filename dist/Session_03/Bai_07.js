"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "banana";
let str2 = [];
for (let i = 0; i < str.length; i++) {
    if (!str2.includes(str.charAt(i))) {
        str2.push(str.charAt(i));
    }
}
console.log(str2.join(""));
//# sourceMappingURL=Bai_07.js.map