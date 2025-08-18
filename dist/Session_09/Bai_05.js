class dataStore {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
    remove(index) {
        if (index > -1 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.log("Invalid index");
        }
    }
}
const stringStore = new dataStore();
stringStore.addItem("Hello");
stringStore.addItem("World");
console.log(stringStore.getItems());
stringStore.remove(0);
console.log(stringStore.getItems());
const numberStore = new dataStore();
numberStore.addItem(10);
numberStore.addItem(20);
numberStore.addItem(30);
console.log(numberStore.getItems());
numberStore.remove(1);
console.log(numberStore.getItems());
export {};
//# sourceMappingURL=Bai_05.js.map