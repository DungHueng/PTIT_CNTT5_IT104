function identity<T>(value: T): T {
    return value;
}
console.log(identity(5));
console.log(identity("Hello"));
console.log(identity({a: 1}));