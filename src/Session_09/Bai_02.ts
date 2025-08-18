function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));
console.log(wrapInArray({a: 1}));