function generic(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person = { name: "Dũng", age: 19 };
const job = { title: "Student" };
const merge = generic(person, job);
console.log(merge);
export {};
//# sourceMappingURL=Bai_04.js.map