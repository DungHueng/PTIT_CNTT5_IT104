function handleUnionType(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length);
    }else if (typeof value === "number" && value % 2 === 0) {
        console.log(`Số ${value} là số chẵn`);
    }else if (typeof value === "number" && value % 2 !== 0) {
        console.log(`Số ${value} là số lẻ`);
    }
}
handleUnionType("demo123");
handleUnionType(10);