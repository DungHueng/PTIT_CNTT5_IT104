function generic<T>(arr: T[]): T | undefined {
    return arr.find(item => typeof item === "number" && item % 2 === 0);
}

console.log(generic([1, 2, 3, 4]));
console.log(generic(["a", "b", "c"]));