function mergeObject(params) {
    return { ...params.obj1, ...params.obj2 };
}
const person = { name: "Jake" };
const job = { title: "Developer" };
const merged = mergeObject({ obj1: person, obj2: job });
console.log(merged);
export {};
//# sourceMappingURL=Bai_03.js.map