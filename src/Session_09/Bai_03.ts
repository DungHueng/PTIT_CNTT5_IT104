function mergeObject<T, U>(params: { obj1: T; obj2: U }): T & U {
    return { ...params.obj1, ...params.obj2 };
}

const person = {name: "Jake"};
const job = {title: "Developer"};

const merged = mergeObject({ obj1: person, obj2: job });
console.log(merged);