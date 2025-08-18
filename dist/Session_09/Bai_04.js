function withDefault(value) {
    if (value === undefined) {
        return "default";
    }
    return value;
}
console.log(withDefault());
console.log(withDefault(5));
console.log(withDefault(true));
export {};
//# sourceMappingURL=Bai_04.js.map