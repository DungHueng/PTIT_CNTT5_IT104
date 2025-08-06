let str: string ="banana";
let str2: string[] = [];
for (let i = 0; i < str.length; i++) {
    if(!str2.includes(str.charAt(i))) {
        str2.push(str.charAt(i));
    }
}
console.log(str2.join(""));
