function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
} 

console.log(findElement([2, 4, 6, 8],8));
console.log(findElement([2, 4, 6, 8],9));