function generic<T, U>(obj1: T, obj2: U) {
    return {...obj1, ...obj2};
}

const person = {name: "Dũng", age: 19};
const job = {title: "Student"};

const merge = generic(person, job);
console.log(merge);
