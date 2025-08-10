function merge(arr1 = [], arr2 = [], x) {
    if (x < 0 || x >= arr1.length) {
        return console.log("Vi tri x khong hop le");
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.splice(x + i, 0, arr2[i]);
    }
    return console.log(arr1);
}
merge([1,2,3,7,8], [4,5,6], 3)
merge([`a`, `b`, `e`, `f`], [`c`,`d`], 2);