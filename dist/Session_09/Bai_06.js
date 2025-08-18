function firstMatch(Arr, predicate) {
    for (const item of Arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 0));
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4));
export {};
//# sourceMappingURL=Bai_06.js.map