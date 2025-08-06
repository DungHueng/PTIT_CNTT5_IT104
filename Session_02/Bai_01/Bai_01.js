function sum(arr) {
    let result = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            result += num;
        }
    }
    return result;
}

console.log(sum([1, 2, 3, 4, 5, 6]));
