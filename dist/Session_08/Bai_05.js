function generic(arr) {
    return arr.find(item => typeof item === "number" && item % 2 === 0);
}
console.log(generic([1, 2, 3, 4]));
console.log(generic(["a", "b", "c"]));
export {};
//# sourceMappingURL=Bai_05.js.map